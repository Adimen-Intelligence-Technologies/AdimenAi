import { Wrapper } from "../components/Wrapper";
import { getTranslations } from "next-intl/server";

export default async function PrivacidadPage() {
  const t = await getTranslations("privacyPage");

  return (
    <div className="flex flex-col">
      <section className="relative flex items-center justify-center border-b border-zinc-200">
        <Wrapper className="border-x-0 border-zinc-200">
          <div
            className="relative overflow-hidden bg-cover bg-center px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 border-x border-zinc-200"
            style={{ backgroundImage: "url('/background.avif')" }}
          >
            <div className="absolute inset-0" />
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center px-2 sm:px-6 lg:px-20 xl:px-30">
              <p
                className="text-base sm:text-lg md:text-xl font-medium text-gray-600 tracking-wide animate-hero-fade"
                style={{ animationDelay: "0.1s" }}
              >
                {t("eyebrow")}
              </p>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tighter leading-tight animate-hero-fade"
                style={{ animationDelay: "0.2s" }}
              >
                {t("title")}
              </h1>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="border-b border-zinc-200">
        <Wrapper className="border-x-0 border-zinc-200">
          <div className="border-x border-zinc-200 bg-white">
            <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
              <div className="prose prose-zinc max-w-none space-y-8 text-base leading-relaxed text-zinc-700">
                <div>
                  <h2 className="text-xl font-semibold text-black">1. Responsable del tratamiento</h2>
                  <p className="mt-2">
                    Adimen Intelligence Technologies S.L. (en adelante, AdimenAI), con domicilio en Elgoibar, Gipuzkoa, y correo electrónico de contacto{" "}
                    <a href="mailto:adimen.tech@gmail.com" className="text-[#6C47FF] hover:underline">adimen.tech@gmail.com</a>, es la entidad responsable del tratamiento de los datos personales que facilites a través de este sitio web.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">2. Datos personales que recogemos</h2>
                  <p className="mt-2">Podemos recoger los siguientes datos personales:</p>
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    <li>Datos de contacto (nombre, correo electrónico, teléfono) cuando contactas con nosotros a través del formulario.</li>
                    <li>Datos de navegación (dirección IP, navegador, páginas visitadas) mediante cookies y tecnologías similares.</li>
                    <li>Cualquier otra información que nos compartas voluntariamente.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">3. Finalidad del tratamiento</h2>
                  <p className="mt-2">Tratamos tus datos personales con las siguientes finalidades:</p>
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    <li>Gestionar las consultas y solicitudes de contacto enviadas a través del formulario.</li>
                    <li>Mejorar la experiencia de navegación y el rendimiento del sitio web.</li>
                    <li>Enviar comunicaciones comerciales, siempre con tu consentimiento previo.</li>
                    <li>Cumplir con las obligaciones legales aplicables.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">4. Base legal</h2>
                  <p className="mt-2">El tratamiento de tus datos se realiza bajo las siguientes bases legales:</p>
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    <li><strong>Consentimiento:</strong> cuando nos escribes a través del formulario o aceptas cookies de marketing.</li>
                    <li><strong>Ejecución de un contrato:</strong> para prestar los servicios solicitados.</li>
                    <li><strong>Interés legítimo:</strong> para mejorar nuestros servicios y garantizar la seguridad del sitio.</li>
                    <li><strong>Cumplimiento legal:</strong> para cumplir con obligaciones fiscales, RGPD y otras normativas.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">5. Destinatarios de los datos</h2>
                  <p className="mt-2">
                    No cedemos tus datos personales a terceros, salvo obligación legal o cuando sea necesario para prestar el servicio solicitado (por ejemplo, proveedores de hosting, herramientas de email marketing). En todo caso, seleccionamos proveedores que garantizan un nivel adecuado de protección de datos.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">6. Transferencias internacionales</h2>
                  <p className="mt-2">
                    Certains herramientas que utilizamos (como Google Analytics o servicios de email) pueden implicar transferencias de datos fuera del Espacio Económico Europeo (EEE). Dichas transferencias se realizan bajo las garantías previstas por el RGPD (cláusulas contractuales tipo o decisiones de adecuación).
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">7. Plazo de conservación</h2>
                  <p className="mt-2">Conservamos tus datos personales durante el tiempo imprescindible para cada finalidad:</p>
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    <li>Datos de contacto: mientras mantengamos relación comercial o durante 2 años desde el último contacto si no se formalizó ningún servicio.</li>
                    <li>Datos de navegación (analytics): un máximo de 26 meses.</li>
                    <li>Datos de facturación: 6 años según la normativa fiscal.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">8. Tus derechos</h2>
                  <p className="mt-2">Puedes ejercer en cualquier momento los siguientes derechos:</p>
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    <li><strong>Acceso:</strong> conocer qué datos tuyos tenemos.</li>
                    <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                    <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
                    <li><strong>Oposición:</strong> detener el tratamiento en certains circumstancias.</li>
                    <li><strong>Limitación:</strong> restringir el uso de tus datos.</li>
                    <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
                    <li><strong>Revocar el consentimiento:</strong> en cualquier momento, sin afectar a tratamientos anteriores.</li>
                  </ul>
                  <p className="mt-2">
                    Para ejercer tus derechos, escribe a{" "}
                    <a href="mailto:adimen.tech@gmail.com" className="text-[#6C47FF] hover:underline">adimen.tech@gmail.com</a>. Si consideras que no hemos atendido tus derechos, puedes presentar una reclamación ante la Autoridad de Control competente (AEPD en España).
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">9. Cookies</h2>
                  <p className="mt-2">
                    Utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación, analizar el uso del sitio y mostrar contenido personalizado. Para más información, consulta nuestra{" "}
                    <a href="/seleccionar-cookies" className="text-[#6C47FF] hover:underline">política de cookies</a> y puedes gestionar tus preferencias desde el panel de configuración de cookies.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">10. Medidas de seguridad</h2>
                  <p className="mt-2">
                    Adoptamos medidas técnicas y organizativas adecuadas para proteger tus datos personales contra acceso no autorizado, pérdida o alteración. Entre ellas: cifrado SSL/TLS en todo el sitio, acceso restringido a sistemas, copias de seguridad periódicas y revisiones de seguridad regulares.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">11. Cambios a esta política</h2>
                  <p className="mt-2">
                    Podemos actualizar esta política de privacidad periódicamente. Cualquier cambio se publicará en esta misma página con la fecha de "última actualización" renovada. Te recomendamos revisarla cada vez que accedas al sitio.
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">Última actualización: junio de 2026</p>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
