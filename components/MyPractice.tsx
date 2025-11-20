import React, { useEffect } from 'react';
import { HeartPulse, Thermometer, Brain, Siren, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const MyPractice: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
          Método de Trabajo
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Medicina Basada en Evidencia: <br />
          <span className="text-teal-600">Tu salud sin mitos.</span>
        </h1>
        <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
          En la era de la información, es fácil caer en remedios milagrosos o consejos sin fundamento científico. 
          Mi práctica se distingue por utilizar tratamientos actualizados según <strong>guías internacionales (GPC, ADA, AHA)</strong>. 
          Combato la desinformación de redes sociales explicándote el "porqué" de cada decisión médica, 
          garantizando seguridad y eficacia en tu recuperación.
        </p>
      </div>

      {/* Padecimientos Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">¿Qué padecimientos atiendo?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Crónicos */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-teal-500 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-6">
              <HeartPulse className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Enfermedades Crónicas</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Diabetes:</strong> Ajuste de medicación y prevención de neuropatías.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Hipertensión:</strong> Metas de control para proteger riñones y corazón.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Obesidad:</strong> Enfoque metabólico integral, no solo estético.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Agudos */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-blue-500 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <Thermometer className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Padecimientos Agudos</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Respiratorios:</strong> Diferenciación precisa entre virus y bacterias (evitando antibióticos innecesarios).</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Estomacales:</strong> Manejo de gastritis, colitis infecciosa y deshidratación.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Urinarios:</strong> Tratamiento enfocado a eliminar síntomas y prevenir recurrencias.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Mental */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-indigo-500 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6">
              <Brain className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Salud Mental</h3>
            <p className="text-slate-600 mb-4 text-sm">
              La salud física no existe sin la salud mental. Ofrezco un espacio seguro para el abordaje inicial.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Manejo inicial de crisis de ansiedad.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Control del estrés laboral y somatización (síntomas físicos por estrés).</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Urgencias Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="p-4 bg-slate-800 rounded-full shrink-0">
            <Siren className="w-12 h-12 text-red-400 animate-pulse" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-3">Experiencia en Urgencias Reales</h3>
            <p className="text-slate-300 leading-relaxed">
              Mi formación incluye trabajo en unidades móviles de urgencias y salas de choque. 
              Esto es vital incluso en la consulta online, pues poseo la capacidad entrenada para 
              <strong> detectar signos de alarma graves</strong> que requieren hospitalización inmediata, 
              algo que un médico sin experiencia en urgencias podría pasar por alto.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Listo para una atención médica profesional?</h2>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Dr.%20Galindo,%20leí%20sobre%20su%20método%20de%20trabajo%20y%20quisiera%20agendar%20una%20cita.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-teal-600 rounded-xl hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/40"
        >
          Agendar Cita
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>

    </div>
  );
};