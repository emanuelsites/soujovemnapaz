import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function PresenceModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full h-full sm:max-w-7xl sm:max-h-[95vh] sm:rounded-lg bg-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 bg-[#022466] sm:rounded-t-lg">
          <h2 className="text-lg sm:text-xl font-bold text-white">Confirme sua presença</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#19F1DB]/20 rounded-full transition-colors duration-200"
            aria-label="Fechar modal"
          >
            <X size={24} className="text-white" />
          </button>
        </div>
        
        {/* Iframe Container */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src="https://soujovemnapaz.lovable.app/"
            className="w-full h-full border-0"
            title="Formulário de Confirmação de Presença"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

