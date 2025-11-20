import React from 'react';
import { Mail, Phone, Facebook, Instagram } from 'lucide-react';
import { DOCTOR_PROFILE, CONTACT_EMAIL, WHATSAPP_NUMBER } from '../constants';
import { NavigationProps } from '../types';

// Custom TikTok Icon component to match Lucide style
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Contact: React.FC<NavigationProps> = ({ onNavigate }) => {
  
  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    
    if (target === 'privacy') {
      onNavigate('privacy');
      return;
    }
    
    onNavigate('home');
    
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target.startsWith('#')) {
      setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-teal-400">Dr. Galindo</h3>
            <p className="text-slate-400 mb-6 max-w-sm">
              Medicina general online. Acercando la salud profesional a ti, con la comodidad y seguridad que mereces.
            </p>
            <div className="flex space-x-4">
               {/* Facebook */}
               <a 
                 href="https://www.facebook.com/profile.php?id=61579296592136" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-slate-400 hover:text-white transition-colors"
                 aria-label="Facebook"
               >
                 <Facebook className="w-5 h-5" />
               </a>
               {/* Instagram */}
               <a 
                 href="https://www.instagram.com/_drleu/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-slate-400 hover:text-white transition-colors"
                 aria-label="Instagram"
               >
                 <Instagram className="w-5 h-5" />
               </a>
               {/* TikTok */}
               <a 
                 href="https://www.tiktok.com/@_drleu?is_from_webapp=1&sender_device=pc" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-slate-400 hover:text-white transition-colors"
                 aria-label="TikTok"
               >
                 <TikTokIcon className="w-5 h-5" />
               </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-teal-400 transition-colors block cursor-pointer">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" onClick={(e) => handleNavClick(e, '#sobre-mi')} className="hover:text-teal-400 transition-colors block cursor-pointer">
                  Perfil Profesional
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-teal-400 transition-colors block cursor-pointer">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNavClick(e, 'privacy')} className="hover:text-teal-400 transition-colors block cursor-pointer">
                   Aviso de Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div id="book">
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center group cursor-pointer hover:text-white transition-colors">
                <Mail className="w-5 h-5 mr-3 text-teal-500" />
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-center group cursor-pointer hover:text-white transition-colors">
                <Phone className="w-5 h-5 mr-3 text-teal-500" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`}>+52 814 632 4999</a>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20gustaría%20agendar%20una%20consulta.`}
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-teal-600 text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-teal-700 transition-all w-full text-center"
              >
                Agendar vía WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. {DOCTOR_PROFILE.name}. Todos los derechos reservados.</p>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-2 md:mt-0">
            <p>Cédula Prof. {DOCTOR_PROFILE.cedula} | UV</p>
            <button 
              onClick={(e) => handleNavClick(e, 'privacy')} 
              className="text-slate-500 hover:text-teal-400 transition-colors md:border-l md:border-slate-700 md:pl-4 text-left"
            >
              Aviso de Privacidad
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};