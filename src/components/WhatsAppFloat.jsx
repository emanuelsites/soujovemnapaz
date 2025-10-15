import { UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppFloat({ onOpenModal }) {
  return (
    <motion.button
      onClick={onOpenModal}
      className="whatsapp-float bg-gradient-to-r from-[#0658CE] to-[#19F1DB] hover:from-[#022466] hover:to-[#0658CE] text-white rounded-full px-4 md:px-6 py-3 md:py-4 shadow-2xl flex items-center gap-2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <UserPlus size={20} className="md:w-6 md:h-6" />
      <span className="font-bold text-sm md:text-base">Confirmar presença</span>
    </motion.button>
  );
}

