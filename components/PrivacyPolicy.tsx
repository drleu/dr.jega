import React, { useEffect } from 'react';
import { DOCTOR_PROFILE, CONTACT_EMAIL } from '../constants';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 border-b border-slate-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Aviso de Privacidad Integral</h1>
          <p className="text-slate-500">Última actualización: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Identidad y Domicilio del Responsable</h3>
            <p className="leading-relaxed">
              El <strong>Dr. {DOCTOR_PROFILE.name}</strong>, con Cédula Profesional <strong>{DOCTOR_PROFILE.cedula}</strong> expedida por la <strong>{DOCTOR_PROFILE.university}</strong>, es el responsable del uso y protección de sus datos personales. Comprometido con la seguridad de su información en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
            </p>
            <p className="mt-2">
              Para efectos de este aviso, se señala como medio de contacto principal el correo electrónico: <strong>{CONTACT_EMAIL}</strong> y la plataforma de atención virtual establecida en este sitio web.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Datos Personales Recabados</h3>
            <p className="leading-relaxed mb-2">
              Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Datos de identificación (Nombre completo, edad, fecha de nacimiento).</li>
              <li>Datos de contacto (Teléfono móvil, correo electrónico, domicilio).</li>
              <li>Datos fiscales (en caso de requerir factura).</li>
            </ul>
            <p className="mt-4 mb-2 font-medium">Datos Personales Sensibles</p>
            <p className="leading-relaxed">
              Además, para la prestación de servicios médicos y telemedicina, recabaremos <strong>datos personales sensibles</strong> relacionados con su estado de salud presente y futuro, antecedentes médicos, información genética, y estilo de vida. Estos datos serán tratados bajo estrictas medidas de seguridad y confidencialidad, de acuerdo con la Normativa Oficial Mexicana del Expediente Clínico (NOM-004-SSA3-2012).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">3. Finalidades del Tratamiento</h3>
            <p className="leading-relaxed mb-2">
              Los datos personales que recabamos de usted serán utilizados para las siguientes finalidades que son necesarias para el servicio que solicita:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prestación de servicios médicos de consulta general, segunda opinión y seguimiento (modalidad online).</li>
              <li>Creación, estudio, análisis, actualización y conservación del expediente clínico médico.</li>
              <li>Emisión de recetas médicas digitales.</li>
              <li>Interpretación de estudios de laboratorio y gabinete.</li>
              <li>Facturación y cobro por los servicios prestados.</li>
              <li>Contacto para seguimiento de su estado de salud, recordatorios de citas o ajustes de tratamiento.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">4. Transferencia de Datos</h3>
            <p className="leading-relaxed">
              Le informamos que sus datos personales no serán compartidos con ninguna autoridad, empresa, organización o persona distinta a nosotros, salvo en los casos estrictamente previstos por la Ley (como emergencias médicas o requerimientos de autoridad judicial competente) y que sean necesarios para la atención médica adecuada.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">5. Derechos ARCO</h3>
            <p className="leading-relaxed">
              Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
            </p>
            <p className="mt-2">
              Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva enviando un correo electrónico a: <strong>{CONTACT_EMAIL}</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">6. Seguridad en Telemedicina</h3>
            <p className="leading-relaxed">
              Al tratarse de servicios en línea, implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado. Las videoconsultas se realizan a través de plataformas encriptadas y seguras.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">7. Cambios al Aviso de Privacidad</h3>
            <p className="leading-relaxed">
              El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los servicios que ofrecemos; de nuestras prácticas de privacidad; o por otras causas. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad a través de este sitio web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};