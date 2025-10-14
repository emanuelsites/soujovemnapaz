import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import IdealizadoresSection from './IdealizadoresSection';
import TestimonialsSection from './TestimonialsSection';
import SponsorshipSection from './SponsorshipSection';
import SweatshirtSection from './SweatshirtSection';
import WhatsAppFloat from './WhatsAppFloat';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#022466] shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/logonew.png"
                alt="Sou Jovem na Paz"
                className="h-16 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('quem-somos')}
                className="text-white hover:text-[#19F1DB] transition-colors duration-300 font-medium"
              >
                Quem Somos
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-white hover:text-[#19F1DB] transition-colors duration-300 font-medium"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('patrocinio')}
                className="text-white hover:text-[#19F1DB] transition-colors duration-300 font-medium"
              >
                Patrocínio
              </button>
              <Button
                onClick={() => window.open('https://soujovemnapaz.lovable.app/', '_blank')}
                className="bg-[#19F1DB] text-[#022466] hover:bg-[#92DEEB] font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                Confirmar presença
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#19F1DB] transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#022466] border-t border-[#19F1DB]/30">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <button
                onClick={() => scrollToSection('quem-somos')}
                className="block w-full text-left text-white hover:text-[#19F1DB] transition-colors py-2 font-medium"
              >
                Quem Somos
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="block w-full text-left text-white hover:text-[#19F1DB] transition-colors py-2 font-medium"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('patrocinio')}
                className="block w-full text-left text-white hover:text-[#19F1DB] transition-colors py-2 font-medium"
              >
                Patrocínio
              </button>
              <Button
                onClick={() => window.open('https://soujovemnapaz.lovable.app/', '_blank')}
                className="w-full bg-[#19F1DB] text-[#022466] hover:bg-[#92DEEB] font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                Confirmar presença
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <IdealizadoresSection />
      <TestimonialsSection />
      <SponsorshipSection />
      <SweatshirtSection />

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />

      {/* Footer */}
      <footer className="bg-[#022466] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img
                src="/logonew.png"
                alt="Sou Jovem na Paz"
                className="h-20 w-auto mb-4"
              />
              <p className="text-[#92DEEB]">
                Um movimento de fé, esperança e transformação.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#19F1DB]">Contato</h3>
              <p className="text-[#92DEEB] mb-2">WhatsApp: (85) 99771-5349</p>
              <p className="text-[#92DEEB]">Email: contato@soujovemnapaz.com.br</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#19F1DB]">Redes Sociais</h3>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://www.instagram.com/soujovemnapaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#92DEEB] hover:text-[#19F1DB] transition-colors flex items-center gap-2"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/soujovemnapaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#92DEEB] hover:text-[#19F1DB] transition-colors flex items-center gap-2"
                >
                  <Facebook size={20} />
                  <span>Facebook</span>
                </a>
              </div>
              <a
                href="https://soujovemnapaz.lovable.app/admin"
                className="text-[#19F1DB] hover:text-white transition-colors font-medium underline"
              >
                Painel de Inscrições
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#19F1DB]/30 text-center text-[#92DEEB]">
            <p>&copy; 2025 Sou Jovem na Paz. Todos os direitos reservados. Developed by Emanuel Gomes</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

