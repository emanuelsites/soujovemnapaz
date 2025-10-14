import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://bf5e923921e34b0182651759785380275.0711931.meusitehostgator.com.br/wp-content/uploads/2025/10/video-ok.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#022466]/80 via-[#0658CE]/60 to-[#022466]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/logonew.png"
            alt="Sou Jovem na Paz"
            className="h-40 w-auto mx-auto mb-8 animate-float"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            DECLARE PAZ
          </h1>
          
          <p className="text-xl md:text-2xl text-[#92DEEB] mb-8 leading-relaxed max-w-3xl mx-auto font-light">
            O Sou Jovem na Paz é um evento que tem como objetivo alcançar vidas e levar paz através da Palavra de Deus e do agir do Espírito Santo. O evento também realiza ações sociais, ajudando famílias carentes e transformando realidades, pois é a fé que gera movimento, esperança e mudança de vida.
          </p>
          
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://soujovemnapaz.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#19F1DB] text-[#022466] hover:bg-[#92DEEB] font-bold text-lg px-12 py-6 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl flex items-center justify-center"
            >
              CONFIRME SUA PRESENÇA
            </a>
            <p className="text-[#19F1DB] text-sm md:text-base font-medium">
              e concorra a um moletom SJnP 2K25
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

