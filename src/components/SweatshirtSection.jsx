import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SweatshirtSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: '/blusa.png', price: '40' },
    { src: '/SJNP_MoletomPrancheta-1.png', price: '150' },
  ];

  const handleWhatsAppOrder = () => {
    window.open('https://wa.me/5585997715349?text=Olá! Gostaria de comprar o moletom oficial do Sou Jovem na Paz.', '_blank');
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-[#0658CE] to-[#022466] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#19F1DB] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#19F1DB] rounded-full opacity-10 blur-3xl"></div>

      {/* Decorative Stripes */}
      <div className="absolute top-0 right-0 w-3/4 h-20 opacity-30">
        <div
          className="h-full"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              #19F1DB,
              #19F1DB 20px,
              transparent 20px,
              transparent 40px
            )`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Confirme sua presença e concorra a um moletom!
          </h2>
          <div className="w-24 h-1 bg-[#19F1DB] mx-auto mb-4"></div>
          <p className="text-xl text-[#92DEEB]">
            Garanta o seu e apoie este projeto!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative hover-lift aspect-square">
              <img
                src={images[currentImage].src}
                alt="Moletom Oficial SJNP"
                className="w-full h-full object-contain rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-[#19F1DB] text-[#022466] font-bold text-2xl px-6 py-3 rounded-full shadow-xl animate-pulse">
                Edição 2025
              </div>
              
              {/* Carousel Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#022466] p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#022466] p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronRight size={24} />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentImage === index ? 'bg-[#19F1DB] w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              DECLARE PAZ
            </h3>
            
            <p className="text-xl text-[#92DEEB] mb-8 leading-relaxed">
              Vista-se com propósito! O moletom oficial do Sou Jovem na Paz 2025 é mais do que uma peça de roupa - é uma declaração de fé, esperança e transformação.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-[#19F1DB]">R$ {images[currentImage].price}</span>
                <span className="text-2xl text-[#92DEEB]">,00</span>
              </div>
              
              <ul className="space-y-3 text-[#92DEEB]">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#19F1DB] rounded-full"></div>
                  Tecido de alta qualidade
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#19F1DB] rounded-full"></div>
                  Design exclusivo SJNP 2025
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#19F1DB] rounded-full"></div>
                  Disponível em diversos tamanhos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#19F1DB] rounded-full"></div>
                  Apoie o projeto e vista a causa
                </li>
              </ul>
            </div>

            <Button
              onClick={handleWhatsAppOrder}
              className="w-full bg-[#19F1DB] text-[#022466] hover:bg-[#92DEEB] font-bold text-xl px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <ShoppingCart className="mr-3" size={24} />
              COMPRAR AGORA
            </Button>

            <p className="text-center text-[#92DEEB] mt-4">
              <MessageCircle className="inline mr-2" size={18} />
              Pedidos: (85) 99771-5349
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Stripes */}
      <div className="absolute bottom-0 left-0 w-3/4 h-20 opacity-30">
        <div
          className="h-full"
          style={{
            background: `repeating-linear-gradient(
              -45deg,
              #19F1DB,
              #19F1DB 20px,
              transparent 20px,
              transparent 40px
            )`,
          }}
        ></div>
      </div>
    </section>
  );
}

