import React from 'react';
import { Activity, FileText, MessageCircle, CalendarCheck, CheckCircle2, AlertCircle, ScrollText } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Consulta General Online",
      description: "Diagnóstico y tratamiento de padecimientos comunes mediante videollamada segura y privada.",
      icon: Activity,
      badge: "Incluye Receta Médica Digital"
    },
    {
      title: "Interpretación de Estudios",
      description: "Análisis detallado y explicación clara de tus resultados de laboratorio o gabinete.",
      icon: FileText
    },
    {
      title: "Seguimiento Médico",
      description: "Monitoreo continuo de enfermedades crónicas o evolución de tratamientos previos.",
      icon: CalendarCheck
    },
    {
      title: "Segunda Opinión",
      description: "Revisión de diagnósticos previos para mayor tranquilidad y certeza en tu salud.",
      icon: MessageCircle
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Services List */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center lg:text-left">
              Atención integral <br />
              <span className="text-teal-600">a un clic de distancia.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 text-center lg:text-left">
              La telemedicina permite resolver hasta el 70% de las consultas de atención primaria sin necesidad de desplazamientos físicos. Ahorra tiempo y evita salas de espera.
            </p>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start group p-4 rounded-xl hover:bg-white transition-colors">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white text-teal-600 shadow-sm border border-teal-100 group-hover:border-teal-500 group-hover:text-white group-hover:bg-teal-600 transition-all duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{service.title}</h3>
                        {service.badge && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 border border-teal-200">
                                <ScrollText className="w-3 h-3 mr-1" />
                                {service.badge}
                            </span>
                        )}
                    </div>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transition-all hover:shadow-2xl duration-300">
              <div className="p-6 sm:p-8 bg-slate-900 text-white relative overflow-hidden text-center sm:text-left">
                <div className="relative z-10">
                  <h3 className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-1">Esquema de Tarifas</h3>
                  <p className="text-slate-300 text-sm">Transparencia y flexibilidad para tu salud.</p>
                </div>
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-32 h-32 bg-teal-500 rounded-full opacity-20 blur-xl"></div>
              </div>

              <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">
                {/* Tier 1 */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-start p-4 sm:p-0 bg-slate-50 sm:bg-transparent rounded-lg sm:rounded-none border sm:border-0 border-slate-100 sm:border-b sm:pb-6">
                  <div className="mb-3 sm:mb-0">
                    <div className="flex items-center mb-1 flex-wrap gap-2">
                        <h4 className="font-bold text-slate-900 text-lg">Consulta Inicial / 2ª Opinión</h4>
                        <span className="px-2 py-0.5 bg-teal-100 text-teal-800 text-[10px] font-bold uppercase tracking-wide rounded-full">Más Completo</span>
                    </div>
                    <p className="text-sm text-slate-500 max-w-xs">Historia clínica detallada, diagnóstico integral y plan de tratamiento.</p>
                  </div>
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start border-t sm:border-t-0 border-slate-200 pt-3 sm:pt-0 mt-2 sm:mt-0 min-w-[90px]">
                    <span className="text-sm font-medium text-slate-500 sm:hidden">Precio:</span>
                    <div className="text-right">
                        <span className="block text-2xl font-bold text-teal-600">$500</span>
                        <span className="text-xs text-slate-400">MXN</span>
                    </div>
                  </div>
                </div>

                {/* Tier 2 */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-start p-4 sm:p-0 bg-slate-50 sm:bg-transparent rounded-lg sm:rounded-none border sm:border-0 border-slate-100 sm:border-b sm:pb-6">
                  <div className="mb-3 sm:mb-0">
                    <h4 className="font-bold text-slate-900 text-lg">Control Crónico</h4>
                    <p className="text-sm text-slate-500 max-w-xs">Seguimiento para pacientes con expediente previo y tratamiento activo.</p>
                  </div>
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start border-t sm:border-t-0 border-slate-200 pt-3 sm:pt-0 mt-2 sm:mt-0 min-w-[90px]">
                    <span className="text-sm font-medium text-slate-500 sm:hidden">Precio:</span>
                    <div className="text-right">
                        <span className="block text-2xl font-bold text-teal-600">$350</span>
                        <span className="text-xs text-slate-400">MXN</span>
                    </div>
                  </div>
                </div>

                {/* Tier 3 */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-start p-4 sm:p-0 bg-slate-50 sm:bg-transparent rounded-lg sm:rounded-none border sm:border-0 border-slate-100">
                  <div className="mb-3 sm:mb-0">
                    <h4 className="font-bold text-slate-900 text-lg">Revisión de Estudios</h4>
                    <p className="text-sm text-slate-500 max-w-xs">Interpretación rápida y profesional de análisis de laboratorio.</p>
                  </div>
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start border-t sm:border-t-0 border-slate-200 pt-3 sm:pt-0 mt-2 sm:mt-0 min-w-[90px]">
                    <span className="text-sm font-medium text-slate-500 sm:hidden">Precio:</span>
                    <div className="text-right">
                        <span className="block text-2xl font-bold text-teal-600">$250</span>
                        <span className="text-xs text-slate-400">MXN</span>
                    </div>
                  </div>
                </div>

                {/* Info & Disclaimer */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-3">
                    <div className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-600 text-justify leading-relaxed">
                            <strong>Seguimiento gratuito:</strong> La consulta inicial incluye una revisión (virtual o presencial) en los próximos <strong>7 días</strong> únicamente para verificar la resolución del padecimiento actual o ajustar tratamiento.
                        </p>
                    </div>
                    <div className="flex items-start space-x-3">
                         <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                         <p className="text-xs text-slate-600 text-justify leading-relaxed">
                            Si aparece una nueva enfermedad distinta o requiere atención fuera de este tiempo, aplicará una nueva consulta.
                         </p>
                    </div>
                </div>

                <div className="text-[11px] text-slate-400 italic text-center px-2">
                    El costo de la consulta inicial es de $500 MXN por el análisis integral. Los controles subsecuentes tienen tarifa preferencial.
                </div>

                <div className="pt-2">
                    <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Dr.%20Galindo,%20me%20gustaría%20agendar%20una%20cita.`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full bg-slate-900 border border-transparent rounded-xl py-4 px-4 text-center font-semibold text-white hover:bg-teal-600 transition-all shadow-lg hover:shadow-teal-500/30"
                    >
                        Agendar Cita Ahora
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};