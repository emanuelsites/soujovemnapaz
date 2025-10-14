import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function IdealizadoresSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#0658CE] to-[#022466] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Nossos Idealizadores
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#19F1DB] to-[#92DEEB] mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl shadow-2xl overflow-hidden"
            style={{
              backgroundImage: `url(\'/depoimento1.png\')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#19F1DB] rounded-full opacity-20 blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-[#19F1DB]" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Pastores Douglas e Carleane Soares
              </h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-lg text-white leading-relaxed mb-4">
                O Sou Jovem na Paz nasceu no coração de Deus e, um dia, Ele fez esse fogo arder em nossos corações. Desde então, temos vivido o propósito de levar refrigério, unidade e transformação para o povo de Fortaleza e para todo o Ceará.
              </p>
              <p className="text-lg text-white leading-relaxed mb-4">
                Em cada edição, vemos Deus mover vidas, restaurar famílias e reacender a fé dos jovens. Já chegamos à 9ª edição desse projeto, e seguimos com o mesmo amor e a mesma convicção: o Sou Jovem na Paz não é apenas um evento — é um chamado divino que nos inspira a unir gerações e espalhar a paz que vem de Cristo.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Com gratidão, continuamos a servir e sonhar, certos de que o melhor ainda está por vir.
              </p>
              <div className="mt-6 text-right">
                <p className="text-[#19F1DB] font-bold text-xl">— Pastores Douglas e Carleane Soares</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

