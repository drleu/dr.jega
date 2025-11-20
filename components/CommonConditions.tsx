import React from 'react';
import { HeartPulse, Thermometer, ClipboardCheck, Check } from 'lucide-react';

export const CommonConditions: React.FC = () => {
  return (
    <section id="common-conditions" className="py-16 bg-slate-50 border-t border-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm">Padecimientos Frecuentes</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            ¿En qué puedo ayudarte?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Atención médica enfocada en resolver tus problemas de salud actuales y prevenir complicaciones futuras con tratamientos actualizados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Crónicos */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6 text-teal-600">
              <HeartPulse className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Control de Enfermedades Crónicas</h3>
            <p className="text-xs text-slate-500 mb-6 uppercase tracking-wide font-semibold">Enfoque en prevención de complicaciones</p>
            
            <ul className="space-y-4 flex-1">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-slate-800 font-medium block">Diabetes Mellitus</span>
                  <span className="text-xs text-slate-500 leading-tight mt-1 block">Tratamiento farmacológico y nutricional basado en guías actuales (ADA).</span>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-slate-800 font-medium block">Hipertensión Arterial</span>
                  <span className="text-xs text-slate-500 leading-tight mt-1 block">Manejo según guías de cardiología (AHA) para proteger tu corazón.</span>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Control de Peso y Obesidad</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Colesterol y Triglicéridos</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Agudos */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <Thermometer className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Padecimientos Agudos</h3>
            <p className="text-xs text-slate-500 mb-6 uppercase tracking-wide font-semibold">Alivio rápido y efectivo</p>
            
            <ul className="space-y-4 flex-1">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Infecciones Respiratorias y Garganta</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Problemas Digestivos (Gastritis, Colitis, Reflujo)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Infecciones de vías urinarias</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Dermatología básica (Erupciones, alergias, acné leve)</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Integral */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
              <ClipboardCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Salud Integral y Preventiva</h3>
            <p className="text-xs text-slate-500 mb-6 uppercase tracking-wide font-semibold">Tu bienestar a largo plazo</p>
            
            <ul className="space-y-4 flex-1">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-slate-800 font-medium block">Interpretación de Estudios</span>
                  <span className="text-xs text-slate-500 leading-tight mt-1 block">Análisis detallado de tus laboratorios.</span>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Certificados Médicos</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Segunda Opinión Médica</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Orientación en Salud Sexual</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};