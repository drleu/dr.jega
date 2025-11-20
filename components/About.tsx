
import React from 'react';
import { Award, BookOpen, Globe, ShieldCheck, Stethoscope, CheckCircle2 } from 'lucide-react';
import { DOCTOR_PROFILE } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-16 sm:py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bio Text Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
            Más que una consulta, una atención <span className="text-teal-600">respaldada por la ciencia.</span>
          </h2>
          <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full mb-8"></div>
          
          <div className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              Soy el <strong>Dr. Jesús Emanuel Galindo Alonso</strong>, Médico General egresado de la Universidad Veracruzana. 
              Mi práctica médica se rige por un principio innegociable: la <span className="text-teal-700 font-semibold">Medicina Basada en Evidencia</span>.
            </p>
            <p>
              En un mundo lleno de desinformación sanitaria, me dedico a investigar y actualizarme constantemente 
              para ofrecerte diagnósticos precisos y tratamientos modernos, libres de mitos y remedios sin sustento. 
              No solo te receto; te explico el porqué de tu tratamiento con datos actuales y verificables.
            </p>
            <p className="font-medium text-slate-800 text-lg">
              Mi objetivo es brindarte la seguridad de un hospital y la calidez de un médico de cabecera, 
              todo a través de la tecnología.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {/* Card 1 */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-teal-100 transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Certificación</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Cuenta con Cédula Profesional <strong>{DOCTOR_PROFILE.cedula}</strong>, garantizando una práctica médica regulada y segura.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-teal-100 transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Formación</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Egresado de la prestigiosa <strong>{DOCTOR_PROFILE.university}</strong>, con una sólida formación en medicina general y atención primaria.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-teal-100 transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Innovación</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Pionero en telemedicina, ofreciendo un servicio ágil, digital y adaptado a las necesidades del paciente moderno.
            </p>
          </div>
        </div>

        {/* Credential Card with Profile Photo */}
        <div className="relative w-full max-w-5xl mx-auto mt-12">
          <div className="relative z-10 bg-gradient-to-r from-[#0f4c45] to-[#0d9488] rounded-3xl shadow-2xl overflow-hidden border border-white/10 transition-transform hover:scale-[1.005] duration-500">
            
            {/* Decorative subtle background noise/texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            {/* Background Watermark */}
            <div className="absolute -bottom-12 -left-12 text-white/[0.05] rotate-12 pointer-events-none">
                <Stethoscope size={350} strokeWidth={1} />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 gap-8 relative z-20">
              
              {/* Profile & Info Group */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left lg:flex-1">
                
                {/* Profile Photo */}
                <div className="shrink-0 relative group">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                        <img 
                            src="https://i.postimg.cc/4yCDvN1m/doctor-profile.jpg" 
                            alt="Dr. Jesús Emanuel Galindo Alonso" 
                            className="w-full h-full object-cover rounded-full bg-slate-800"
                        />
                    </div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-teal-400 border-4 border-[#0f4c45] rounded-full" title="Disponible"></div>
                </div>

                {/* Name & Title */}
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm leading-tight">
                        Dr. Jesús Emanuel<br className="hidden lg:block"/> Galindo Alonso
                        </h2>
                        <div className="h-1.5 w-20 bg-teal-400 rounded-full mt-4 mx-auto md:mx-0 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-teal-50 font-medium text-lg md:text-xl">
                            <Stethoscope className="w-5 h-5 text-teal-300" />
                            <span>Médico General</span>
                        </div>
                        <p className="text-teal-200/80 text-sm md:text-base font-medium tracking-wide uppercase">
                            {DOCTOR_PROFILE.university}
                        </p>
                         <p className="text-teal-300/60 text-xs md:text-sm font-normal">
                            Medicina basada en evidencia | Monterrey, NL
                        </p>
                    </div>
                </div>
              </div>

              {/* Cédula Badge (Right) */}
              <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-end mt-4 lg:mt-0">
                <div className="flex flex-col items-center md:items-end gap-3">
                  <span className="text-teal-200/70 text-xs font-bold uppercase tracking-[0.25em]">Licencia Médica</span>
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 md:px-8 md:py-5 rounded-2xl border border-white/20 shadow-2xl group hover:bg-white/15 transition-all cursor-default hover:border-teal-300/30">
                    <ShieldCheck className="w-10 h-10 text-teal-300 group-hover:text-white transition-colors" />
                    <div className="flex flex-col text-left">
                        <span className="text-xs text-teal-200/80 font-medium uppercase tracking-wider">Cédula Prof.</span>
                        <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white tracking-widest drop-shadow-lg">
                        {DOCTOR_PROFILE.cedula}
                        </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-teal-400/90 text-sm font-medium bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      <CheckCircle2 size={14} className="text-teal-400" />
                      <span>Verificado por SEP</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
