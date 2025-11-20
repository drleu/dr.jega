import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Video } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import { HeroProps } from '../types';

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 to-teal-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
              Consultas 100% Online
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Medicina moderna, <br />
              <span className="text-teal-600">sin salir de casa.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Atención médica general profesional, humana y accesible. 
              El Dr. Jesús Emanuel Galindo Alonso te atiende estés donde estés.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Dr.%20Galindo,%20quisiera%20iniciar%20una%20consulta%20médica%20online.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto justify-center items-center px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Iniciar Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button
                onClick={() => onNavigate('practice')}
                className="inline-flex w-full sm:w-auto justify-center items-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all cursor-pointer"
              >
                Conoce más
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-200 pt-8">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <ShieldCheck className="h-6 w-6 text-teal-500 mb-2" />
                <span className="text-xs sm:text-sm font-medium text-slate-900">Atención Segura</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <Clock className="h-6 w-6 text-teal-500 mb-2" />
                <span className="text-xs sm:text-sm font-medium text-slate-900">Horarios Flexibles</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <Video className="h-6 w-6 text-teal-500 mb-2" />
                <span className="text-xs sm:text-sm font-medium text-slate-900">Video HD</span>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-teal-900/10 group mt-8 lg:mt-0 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=2069&auto=format&fit=crop" 
              alt="Escritorio minimalista con laptop y celular para consulta online" 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
              <div className="bg-white/95 backdrop-blur p-4 sm:p-6 rounded-xl shadow-lg border border-white/20">
                <p className="text-teal-800 font-semibold text-xs sm:text-sm mb-1">Cédula Profesional</p>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">12117730</p>
                <p className="text-slate-500 text-xs mt-1">Universidad Veracruzana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    </section>
  );
};