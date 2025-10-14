import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, User, Mail, Phone, MapPin, Church, Users, Briefcase, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function InscricaoPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefoneWhatsapp: '',
    igreja: '',
    cidade: '',
    tipoParticipacao: 'participante',
    equipe: 'Qualquer',
    areaAtuacao: '',
    areaAtuacaoOutros: '',
    cargoEclesiastico: '',
    cargoEclesiasticoOutros: '',
  });
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Load teams from localStorage
    const storedTeams = JSON.parse(localStorage.getItem('teams') || '["Sem Equipe"]');
    setTeams(['Qualquer', ...storedTeams]);
  }, []);

  const areasAtuacao = [
    'Atendimento psicológico / Aconselhamento',
    'Cabeleireiro / Barbeiro',
    'Cozinha / Alimentação',
    'Idiomas',
    'Limpeza / Organização',
    'Logística',
    'Maquiagem / Estética',
    'Massagem / Terapia manual',
    'Montagem e desmontagem',
    'Orientação jurídica / Advocacia',
    'Primeiros socorros',
    'Segurança',
    'Transporte',
    'Outros',
  ];

  const cargosEclesiasticos = [
    'Discípulo',
    'Líder de célula',
    'Presbítero',
    'Pastor',
    'Bispo',
    'Apóstolo',
    'Outros',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset "Outros" fields when changing selection
    if (name === 'areaAtuacao' && value !== 'Outros') {
      setFormData(prev => ({ ...prev, areaAtuacaoOutros: '' }));
    }
    if (name === 'cargoEclesiastico' && value !== 'Outros') {
      setFormData(prev => ({ ...prev, cargoEclesiasticoOutros: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Execute reCAPTCHA v3
      const token = await window.grecaptcha.execute('6LeXsOgrAAAAAJG-IzKG4wse9QQB8zqfc8rZUDAz', { action: 'submit' });
      
      // Note: In production, you would verify this token on the backend
      // For now, we'll just proceed with the registration
      console.log('reCAPTCHA token:', token);

      // Get next sequential number
      const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
      const nextNumber = registrations.length + 1;

      const newRegistration = {
        ...formData,
        id: Date.now(),
        numeroSequencial: nextNumber,
        date: new Date().toISOString(),
        team: formData.tipoParticipacao === 'voluntario' ? formData.equipe : 'N/A',
        areaAtuacaoFinal: formData.areaAtuacao === 'Outros' ? formData.areaAtuacaoOutros : formData.areaAtuacao,
        cargoEclesiasticoFinal: formData.cargoEclesiastico === 'Outros' ? formData.cargoEclesiasticoOutros : formData.cargoEclesiastico,
      };
      registrations.push(newRegistration);
      localStorage.setItem('registrations', JSON.stringify(registrations));

      setSubmitted(true);

      // Reset form after 3 seconds and redirect
      setTimeout(() => {
        setFormData({
          nome: '',
          email: '',
          telefoneWhatsapp: '',
          igreja: '',
          cidade: '',
          tipoParticipacao: 'participante',
          equipe: 'Qualquer',
          areaAtuacao: '',
          areaAtuacaoOutros: '',
          cargoEclesiastico: '',
          cargoEclesiasticoOutros: '',
        });
        setSubmitted(false);
        window.open("https://soujovemnapaz.lovable.app/", "_blank");
      }, 3000);
    } catch (error) {
      console.error('Erro ao enviar inscrição:', error);
      alert('Erro ao processar reCAPTCHA. Por favor, tente novamente.');
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0658CE] to-[#022466] flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-12 text-center max-w-md shadow-2xl"
        >
          <CheckCircle className="w-24 h-24 text-[#19F1DB] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#022466] mb-4">
            Presença Confirmada!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Obrigado por confirmar sua presença no Sou Jovem na Paz 2025. Em breve entraremos em contato!
          </p>
          <div className="animate-pulse text-[#0658CE]">
            Redirecionando...
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0658CE] to-[#022466] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#19F1DB] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#19F1DB] rounded-full opacity-10 blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button
            onClick={() => navigate('/')}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30"
          >
            <ArrowLeft className="mr-2" size={20} />
            Voltar
          </Button>
          <img
            src="/logonew.png"
            alt="Sou Jovem na Paz"
            className="h-16 w-auto"
          />
        </div>
      </div>

      {/* Form */}
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-[#022466] mb-4">
                Confirmar Presença
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0658CE] to-[#19F1DB] mx-auto mb-4"></div>
              <p className="text-lg text-gray-700">
                Preencha o formulário abaixo para garantir sua participação no SJNP 2025
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline mr-2" size={18} />
                  Nome Completo *
                </label>
                <Input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0658CE] focus:ring-2 focus:ring-[#19F1DB]/20 transition-all"
                  placeholder="Digite seu nome completo"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline mr-2" size={18} />
                  E-mail *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0658CE] focus:ring-2 focus:ring-[#19F1DB]/20 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Telefone/WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline mr-2" size={18} />
                  Telefone/WhatsApp *
                </label>
                <Input
                  type="tel"
                  name="telefoneWhatsapp"
                  value={formData.telefoneWhatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0658CE] focus:ring-2 focus:ring-[#19F1DB]/20 transition-all"
                  placeholder="(85) 99999-9999"
                />
              </div>

              {/* Igreja */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Church className="inline mr-2" size={18} />
                  Igreja que faz parte *
                </label>
                <Input
                  type="text"
                  name="igreja"
                  value={formData.igreja}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0658CE] focus:ring-2 focus:ring-[#19F1DB]/20 transition-all"
                  placeholder="Nome da sua igreja"
                />
              </div>

              {/* Cidade */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline mr-2" size={18} />
                  Cidade *
                </label>
                <Input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0658CE] focus:ring-2 focus:ring-[#19F1DB]/20 transition-all"
                  placeholder="Sua cidade"
                />
              </div>

              {/* Tipo de Participação */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="inline mr-2" size={18} />
                  Tipo de Participação *
                </label>
                <select
                  name="tipoParticipacao"
                  value={formData.tipoParticipacao}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0658CE] focus:ring-2 focus:ring-[#19F1DB]/20 transition-all"
                >
                  <option value="participante">Apenas Participante</option>
                  <option value="voluntario">Voluntário</option>
                </select>
              </div>



              {/* Área de Atuação (only if voluntario) */}
              {formData.tipoParticipacao === 'voluntario' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Briefcase className="inline mr-2" size={18} />
                      Área de Atuação
                    </label>
                    <select
                      name="areaAtuacao"
                      value={formData.areaAtuacao}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0658CE] focus:ring-2 focus:ring-[#19F1DB]/20 transition-all"
                    >
                      <option value="">Selecione uma área</option>
                      {areasAtuacao.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Área de Atuação - Outros */}
                  {formData.areaAtuacao === 'Outros' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Especifique a área de atuação *
                      </label>
                      <Input
                        type="text"
                        name="areaAtuacaoOutros"
                        value={formData.areaAtuacaoOutros}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0658CE] focus:ring-2 focus:ring-[#19F1DB]/20 transition-all"
                        placeholder="Digite a área de atuação"
                      />
                    </div>
                  )}
                </>
              )}

              {/* Cargo Eclesiástico (opcional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Award className="inline mr-2" size={18} />
                  Cargo Eclesiástico
                </label>
                <select
                  name="cargoEclesiastico"
                  value={formData.cargoEclesiastico}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0658CE] focus:ring-2 focus:ring-[#19F1DB]/20 transition-all"
                >
                  <option value="">Selecione um cargo</option>
                  {cargosEclesiasticos.map((cargo) => (
                    <option key={cargo} value={cargo}>
                      {cargo}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cargo Eclesiástico - Outros */}
              {formData.cargoEclesiastico === 'Outros' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Especifique o cargo eclesiástico *
                  </label>
                  <Input
                    type="text"
                    name="cargoEclesiasticoOutros"
                    value={formData.cargoEclesiasticoOutros}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0658CE] focus:ring-2 focus:ring-[#19F1DB]/20 transition-all"
                    placeholder="Digite o cargo eclesiástico"
                  />
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0658CE] to-[#19F1DB] text-white hover:from-[#022466] hover:to-[#0658CE] font-bold text-lg py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
              >
                CONFIRMAR PRESENÇA
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

