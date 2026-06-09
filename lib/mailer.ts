import nodemailer, { type Transporter } from "nodemailer";

let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter;

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error(
      "Faltan variables de entorno GMAIL_USER y/o GMAIL_APP_PASSWORD",
    );
  }

  cachedTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  return cachedTransporter;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const transporter = getTransporter();
  const user = process.env.GMAIL_USER as string;

  const subjectLabel = payload.subject || "Sin asunto";

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; color: #1a1a1a;">
      <h2 style="margin: 0 0 16px; color: #6C47FF;">Nueva solicitud de contacto</h2>
      <table cellpadding="6" style="border-collapse: collapse; width: 100%;">
        <tr><td style="color: #666; width: 120px;"><strong>Nombre</strong></td><td>${escape(payload.name)}</td></tr>
        <tr><td style="color: #666;"><strong>Email</strong></td><td><a href="mailto:${escape(payload.email)}">${escape(payload.email)}</a></td></tr>
        <tr><td style="color: #666;"><strong>Teléfono</strong></td><td>${escape(payload.phone) || "—"}</td></tr>
        <tr><td style="color: #666;"><strong>Asunto</strong></td><td>${escape(subjectLabel)}</td></tr>
      </table>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <h3 style="margin: 0 0 8px; color: #1a1a1a;">Mensaje</h3>
      <p style="white-space: pre-wrap; line-height: 1.6; margin: 0;">${escape(payload.message)}</p>
    </div>
  `;

  const text = [
    "Nueva solicitud de contacto",
    "",
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    `Teléfono: ${payload.phone || "—"}`,
    `Asunto: ${subjectLabel}`,
    "",
    "Mensaje:",
    payload.message,
  ].join("\n");

  await transporter.sendMail({
    from: `AdimenAI Web <${user}>`,
    to: user,
    replyTo: payload.email,
    subject: `Nuevo contacto desde la web — ${payload.name}`,
    html,
    text,
  });
}
