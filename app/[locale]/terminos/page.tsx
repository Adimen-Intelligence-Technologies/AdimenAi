import { Wrapper } from "@/app/components/Wrapper";
import { getTranslations } from "next-intl/server";

export default async function LocaleTerminosPage() {
  const t = await getTranslations("terminosPage");

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
                  <h2 className="text-xl font-semibold text-black">1. Información general</h2>
                  <p className="mt-2">
                    El presente sitio web, accesible en{" "}
                    <a href="https://adimenai.com" className="text-[#6C47FF] hover:underline">adimenai.com</a>, es propiedad de Adimen Intelligence Technologies S.L. (en adelante, AdimenAI), con domicilio en Elgoibar, Gipuzkoa, y CIF B-xxxxxxx. El acceso y uso de este sitio web implica la aceptación expresa de los presentes términos y condiciones.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">2. Objeto</h2>
                  <p className="mt-2">
                    El objeto de estos términos y condiciones es regular el acceso y uso del sitio web de AdimenAI, así como la contratación de los servicios y productos ofrecidos a través del mismo. Los servicios ofertados incluyen, entre otros: software de gestión (TPV, comanderos, kioscos), soluciones de automatización e inteligencia artificial, presencia digital, marketing digital y servicios de gráfica e impresión.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">3. Servicios de AdimenAI</h2>
                  <p className="mt-2">AdimenAI ofrece los siguientes servicios:</p>
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    <li><strong>Software de gestión:</strong> sistemas TPV, comanderos electrónicos, kioscos de autoservicio, balanzas electrónicas, robots de cocina y pantallas electrónicas.</li>
                    <li><strong>Automatización e IA:</strong> agentes inteligentes, RPA, chatbots y gestión de CRM.</li>
                    <li><strong>Presencia digital:</strong> diseño de páginas web, tiendas online, fotografía de producto y gestión de redes sociales.</li>
                    <li><strong>Marketing digital:</strong> posicionamiento SEO, publicidad SEM y campañas de anuncios.</li>
                    <li><strong>Gráfica e impresión:</strong> diseño gráfico, tarjetas de visita, libros de visita, papelería corporativa y merchandising.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">4. Contratación de servicios</h2>
                  <p className="mt-2">
                    La contratación de cualquier servicio ofrecido por AdimenAI se realizará a través de los medios de contacto indicados en el sitio web (formulario de contacto, correo electrónico o teléfono). Las condiciones específicas de cada servicio (precios, plazos, alcance) serán acordadas por escrito entre ambas partes antes del inicio de la prestación.
                  </p>
                  <p className="mt-2">
                    Todo servicio contratado estará sujeto a un presupuesto personalizado que podrá incluir un contrato específico de prestación de servicios con condiciones particulares que complementarán los presentes términos generales.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">5. Precios y pago</h2>
                  <p className="mt-2">
                    Los precios de los servicios serão quelli indicati nel preventivo concordato. I prezzi sono espressi in euro e IVA escluso, salvo diversa indicazione. Il pagamento dovrá essere effettuato secondo le modalità concordate nel contratto specifico.
                  </p>
                  <p className="mt-2">
                    AdimenAI si riserva il diritto di modificare i prezzi dei propri servizi in qualsiasi momento, fermo restando che ai clienti con contratto in corso si applicheranno le condizioni economiche pattuite.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">6. Propiedad intelectual</h2>
                  <p className="mt-2">
                    Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, código fuente, logos, marcas) son propiedad de AdimenAI o cuentan con la licencia correspondiente. Queda prohibida su reproducción, distribución o comunicación pública sin el consentimiento expreso de AdimenAI.
                  </p>
                  <p className="mt-2">
                    En el caso de desarrollos software realizados específicamente para el cliente, la propiedad intelectual podrá ser objeto de negociación específica en el contrato particular correspondiente.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">7. Confidencialidad</h2>
                  <p className="mt-2">
                    AdimenAI se compromete a mantener la máxima confidencialidad sobre toda la información que le sea facilitada por el cliente para la prestación de los servicios contratados. Esta obligación de confidencialidad permanecerá vigente incluso después de finalizada la relación comercial.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">8. Limitación de responsabilidad</h2>
                  <p className="mt-2">
                    AdimenAI no será responsable de los daños y perjuicios que puedan derivarse del uso del sitio web o de los servicios contratados, salvo en caso de dolo o negligencia grave. En todo caso, la responsabilidad de AdimenAI por cualquier reclamación quedará limitada al importe efectivamente pagado por el cliente por el servicio causante del daño.
                  </p>
                  <p className="mt-2">
                    El cliente es responsable de garantizar que dispone de las licencias y permisos necesarios para los contenidos que facilite a AdimenAI para la realización de los servicios.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">9. Protección de datos</h2>
                  <p className="mt-2">
                    Los datos personales facilitados a través del sitio web o durante la prestación de servicios serán tratados conforme a lo establecido en nuestra{" "}
                    <a href="/privacidad" className="text-[#6C47FF] hover:underline">Política de privacidad</a>. El cliente se compromete a cumplir con el Reglamento General de Protección de Datos (RGPD) y demás normativa aplicable en materia de protección de datos.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">10. Terminación</h2>
                  <p className="mt-2">
                    Cualquiera de las partes podrá resolver el contrato de servicios con un preaviso de 30 días naturales salvo pacto en contrario. AdimenAI podrá resolver inmediatamente el contrato en caso de incumplimiento grave por parte del cliente, notamment en caso de impago o vulneración de la normativa de protección de datos.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">11. Ley aplicable y jurisdicción</h2>
                  <p className="mt-2">
                    Los presentes términos y condiciones se rigen por la legislación española. Para cualquier controversia derivada del uso del sitio web o de la contratación de servicios, ambas partes se someten expresamente a los Juzgados y Tribunales de Gipuzkoa, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">12. Modificaciones</h2>
                  <p className="mt-2">
                    AdimenAI se reserva el derecho de modificar los presentes términos y condiciones en cualquier momento. Las modificaciones serán publicadas en esta misma página. El uso continuado del sitio web o la contratación de servicios tras la entrada en vigor de las modificaciones implicará la aceptación de las mismas.
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
