import { motion } from 'framer-motion';
import { Heart, Users, Target, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: 'Fé e Esperança',
      description: 'Guiados pelo Espírito Santo com amor e dedicação',
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Jovens de diferentes realidades unidos pela fé',
    },
    {
      icon: Target,
      title: 'Propósito',
      description: 'Despertar jovens para viver com propósito',
    },
    {
      icon: Sparkles,
      title: 'Transformação',
      description: 'Experiências profundas que mudam vidas',
    },
  ];

  return (
    <section id="quem-somos" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('/Fundo_Azul_01Prancheta-1.png')`,
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
            <span className="text-gradient-sjnp">Sobre o Evento</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0658CE] to-[#19F1DB] mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative flex justify-center">
              <img
                src="/sobre-evento.png"
                alt="Sou Jovem na Paz"
                className="rounded-2xl shadow-2xl hover-lift w-3/4"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#19F1DB] rounded-full opacity-20 blur-3xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#022466]">
              Mais do que um evento
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              O Sou Jovem na Paz é mais do que um evento — é um movimento de fé, esperança e transformação. Somos uma equipe apaixonada por Jesus, guiada pelo Espírito Santo e comprometida com o propósito de alcançar e impactar a juventude com a mensagem do Evangelho.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nasceu com a missão de criar um espaço onde jovens de diferentes realidades possam se encontrar, adorar a Deus, viver experiências profundas com o Espírito Santo e serem despertados para viver uma vida com propósito.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nosso time é formado por líderes, voluntários e parceiros que acreditam no potencial de cada jovem. Trabalhamos com excelência, amor e dedicação para levar esperança a corações, fortalecer famílias, e fazer de cada edição um marco espiritual e social.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0658CE] to-[#022466] p-8 rounded-2xl text-white hover-lift cursor-pointer group"
            >
              <feature.icon className="w-12 h-12 mb-4 text-[#19F1DB] group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-[#92DEEB]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

