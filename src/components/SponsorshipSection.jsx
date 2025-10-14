import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SponsorshipSection() {
  const benefits = [
    '1 postagem individual no Instagram',
    '1 post colab com @soujovemnapaz e @prdouglassoares, com @ marcado (POST fixado)',
    '1 postagem no Instagram, com os demais patrocinadores (após o evento), com @ marcado',
    '2 a 3 Stories no Instagram',
    'Logotipo exibido em alguns momentos no telão durante o evento',
    'Agradecimento ao patrocinador no dia do evento pelo Pr. Douglas',
    'Agradecimento e indicação no Stories, pelo Pr. Douglas, nos perfis @soujovemnapaz e @prdouglassoares',
    'Vídeo exclusivo, apresentando sua marca e destacando que é um apoiador do projeto Sou Jovem na Paz',
  ];

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/5585988051986?text=Olá! Gostaria de ser um patrocinador do Sou Jovem na Paz.', '_blank');
  };

  return (
    <section id="patrocinio" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('/Fundo_03Prancheta-1-copiar-2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-sjnp">Proposta de Patrocínio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0658CE] to-[#19F1DB] mx-auto mb-8"></div>
          <p className="text-2xl text-[#022466] font-bold mb-4">
            AGORA, IMAGINE SUA MARCA FAZENDO PARTE DISSO!
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Patrocinar o Sou Jovem na Paz é investir em algo que vai além de um evento, é estar junto em um propósito de promover valores, alcançar famílias e transformar a sociedade.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Benefits - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-3xl"
          >
            <div className="bg-gradient-to-br from-[#0658CE] to-[#022466] rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-[#19F1DB]">
              <img
                src="/logonew.png"
                alt="Sou Jovem na Paz"
                className="h-24 w-auto mx-auto mb-8"
              />
              
              <h4 className="text-3xl font-bold text-white mb-8 text-center">
                Benefícios do Patrocínio:
              </h4>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#19F1DB] flex items-center justify-center">
                        <Check size={16} className="text-[#022466]" />
                      </div>
                    </div>
                    <p className="text-white text-lg">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#0658CE] to-[#19F1DB] rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Entre em contato e seja um patrocinador:
            </h3>
            
            <Button
              onClick={handleWhatsAppContact}
              className="bg-white text-[#0658CE] hover:bg-[#92DEEB] font-bold text-lg px-12 py-6 rounded-full transition-all duration-300 hover:scale-110 shadow-xl"
            >
              <MessageCircle className="mr-2" size={24} />
              (85) 98805-1986
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

