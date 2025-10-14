
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Glenda Costas',
      username: '@glendascostas',
      text: 'Sou Jovem na Paz sempre impactou minha vida, lembro da minha vez, ajoelhada com uma multidão clamando por Paz em nossa cidade, quando olhei para o alto, vi família nos prédios com panos brancos e com as mãos direcionadas para o alto também. Eu não observava somente o desejo daquelas pessoas pela paz na cidade, e sim no seu interior.',
      image: '/glendacosta.jpg',
    },
    {
      name: 'Charles Filmmaker',
      username: '@charlesfilmaker',
      text: 'Esse Projeto é muito Importante para nossa cidade, ele combate a violência e na minha vida deve um impacto muito forte, pois estava afastado de Deus e consequentemente eu me tornei uma pessoa violenta, mas o sou jovem na paz mostrou que o amor de Deus é maior que tudo e esse amor vai alcançar milhares de jovem em nome de Jesus. Não parem.❤️🙌',
      image: '/charles_filmmaker.png',
    },
    {
      name: 'Dante Ferreira',
      username: '@danteferreiraa',
      text: 'O sou jovem na paz me fez acreditar no pode Deus sobre minha geração.',
      image: '/danteferreira.jpg',
    },
    {
      name: 'Kelsay',
      username: '@opto_kelsay',
      text: 'O Sou Jovem na Paz é um evento que mostra a nossa sociedade o desejo dos jovens de buscar a paz em nossa cidade. Isso impacta porque não um desejo individual, mas sim a nova geração que busca uma por paz.',
      image: '/opto_kelsay.jpg',
    },
    {
      name: 'Isaías',
      username: '@isaaiasfbm12',
      text: 'Sou jovem na paz sem dúvida é evento impactante, um momento onde jovens se reúnem com um só propósito,de mudar a atmosfera da cidade de Fortaleza com a palavra de transformação.',
      image: 'instagram_icon',
    },
    {
      name: 'Abimael Morais',
      username: '@abimaelmorais12',
      text: 'O SJP reacendeu, dentro de mim, a importância de servir ao Reino e aos homens, com amor',
      image: '/abimaelmorais12.jpg',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="depoimentos"
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: `url('/Fundo_Azul_01Prancheta-1-copiar.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#022466]/95 to-[#0658CE]/95"></div>

      {/* Decorative Stripes */}
      <div className="absolute top-0 left-0 w-full h-16 opacity-30">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Depoimentos
          </h2>
          <div className="w-24 h-1 bg-[#19F1DB] mx-auto mb-4"></div>
          <p className="text-xl text-[#92DEEB]">
            Vidas transformadas pela fé e esperança
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative"
            >
              <Quote className="absolute top-8 left-8 w-16 h-16 text-[#19F1DB] opacity-20" />
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  {testimonials[currentIndex].image === 'instagram_icon' ? (
                    <div className="w-32 h-32 rounded-full flex items-center justify-center bg-[#0658CE] border-4 border-[#19F1DB] shadow-lg">
                      <Instagram size={64} className="text-white" />
                    </div>
                  ) : (
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-[#19F1DB] shadow-lg"
                    />
                  )}
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div>
                    <h4 className="text-2xl font-bold text-[#022466]">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#0658CE] font-medium">{testimonials[currentIndex].username}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              className="bg-[#19F1DB] text-[#022466] hover:bg-[#92DEEB] rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#19F1DB] w-8'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextTestimonial}
              className="bg-[#19F1DB] text-[#022466] hover:bg-[#92DEEB] rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Stripes */}
      <div className="absolute bottom-0 right-0 w-full h-16 opacity-30">
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

