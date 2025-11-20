import React, { useState, useEffect } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import { NavItem, NavigationProps } from '../types';

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#services' },
  { label: 'Contacto', href: '#contact' },
];

export const Navbar: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    onNavigate('home');
    setIsOpen(false);
    
    // If it's an anchor link, give the DOM a moment to switch views then scroll
    if (href.startsWith('#')) {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => handleNavClick('#home')}
          >
            <div className="p-2 bg-teal-500 rounded-lg">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <span className={`font-bold text-lg tracking-tight ${isScrolled ? 'text-slate-800' : 'text-slate-900'}`}>
              Dr. Galindo
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#book')}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/30"
            >
              Agendar Cita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#book')}
              className="block w-full text-center mt-4 px-5 py-3 text-base font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Agendar Cita
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};