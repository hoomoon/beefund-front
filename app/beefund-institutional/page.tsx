"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  LucideLink,
  MapPin,
  MessageSquare,
  Pin,
  Sparkles,
  Target,
} from "lucide-react"

export default function BeeFundInstitutional() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="min-h-screen text-white font-light bg-cover bg-center bg-no-repeat lg:bg-fixed bg-scroll relative overflow-hidden"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2024%20de%20mai.%20de%202025%2C%2012_04_12-ETcpF9gx4hD6lPrt2SS1qhoPNcWHuK.png')`,
      }}
    >
      {/* Botão de voltar */}
      <div className="absolute top-6 left-6 z-50">
        <Link href="/" className="flex items-center text-gray-400 hover:text-[#00FFA8] transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Voltar</span>
        </Link>
      </div>

      {/* Logo BeeFund */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50">
        <img src="/logo-beefund.png" alt="Logo BeeFund" className="w-40 h-auto" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 max-w-4xl">
        {/* Cabeçalho */}
        <header className="text-center mb-16 mt-8 bg-transparent">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-white mb-6 transition-all duration-300 hover:scale-105 hover:text-[#00FFA8] hover:drop-shadow-[0_0_10px_rgba(0,255,168,0.5)] cursor-default title-fade-up animate-title-pulse">
            <Sparkles className="inline w-8 h-8 mr-3 text-yellow-400" /> BEEFund Voltou. Mas Não Como Antes.
          </h1>
          <p className="text-xl md:text-2xl text-white font-extralight max-w-2xl mx-auto leading-relaxed subtitle-fade-up">
            Voltamos para pagar. Não para arrecadar.
            <br />
            <span className="text-[#00FFA8]">Esse é o Plano de Recuperação Oficial.</span>
          </p>
        </header>

        {/* Seção principal */}
        <div className="space-y-12">
          {/* Acompanhe a quitação */}
          <section className="bg-transparent border border-[#00FFA8] shadow-[0_0_12px_#00FFA8] rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00FFA8] hover:border-[#00FFA8]/80 text-white card-attention">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 mr-3 text-[#00FFA8]" /> Acompanhe a quitação de perto
            </h2>
            <p className="text-gray-300 mb-8 font-light leading-relaxed">
              Junte-se ao nosso canal oficial para receber atualizações em tempo real sobre o processo de quitação e
              garantir seu acesso ao plano de recuperação.
            </p>

            <div className="flex flex-col items-center">
              <h3 className="text-xl font-light text-[#00FFA8] mb-6 flex items-center">
                <LucideLink className="w-5 h-5 mr-3" /> Grupo Oficial do Telegram
              </h3>

              <a
                href="https://t.me/beefundofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#00FFA8] text-black font-medium px-8 py-4 rounded-lg hover:bg-[#00FFA8]/90 transition-all duration-300 shadow-lg shadow-[#00FFA8]/20 w-full md:w-auto text-center"
              >
                <div className="flex items-center justify-center">
                  <span className="mr-2">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                  <span>ENTRAR NO GRUPO OFICIAL</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </a>
            </div>
          </section>

          {/* Importante */}
          <section className="bg-transparent border border-[#00FFA8] shadow-[0_0_12px_#00FFA8] rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00FFA8] hover:border-[#00FFA8]/80 text-white card-attention">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3 text-[#00FFA8]" /> Importante
            </h2>
            <div className="space-y-4 text-gray-300 font-light leading-relaxed">
              <p>
                Este é o único canal oficial de comunicação da BeeFund. Não confie em imitadores ou plataformas que
                alegam ter ligação conosco.
              </p>
              <p>
                Nosso retorno tem um único objetivo: quitar os valores devidos aos usuários que confiaram em nós. Não
                estamos arrecadando novos investimentos nem promovendo qualquer tipo de captação financeira.
              </p>
              <p>
                <span className="text-[#00FFA8]">
                  Todas as informações sobre o processo de quitação serão divulgadas exclusivamente pelos nossos canais
                  oficiais.
                </span>
              </p>
            </div>
          </section>

          {/* Roadmap */}
          <section className="bg-transparent border border-[#00FFA8] shadow-[0_0_12px_#00FFA8] rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00FFA8] hover:border-[#00FFA8]/80 text-white card-attention">
            <h2 className="text-2xl font-light text-white mb-8 flex items-center">
              <MapPin className="w-6 h-6 mr-3 text-[#00FFA8]" /> ROADMAP INSTITUCIONAL DE QUITAÇÃO – BEEFund
            </h2>

            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l border-[#00FFA8]/30">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#00FFA8] -translate-x-2"></div>
                <h3 className="text-xl font-light text-[#00FFA8] mb-2">
                  <CheckCircle className="inline w-5 h-5 mr-2" /> Fase 1: Identificação e Reconhecimento
                </h3>
                <p className="text-gray-400 text-sm mb-2">0-30 dias</p>
                <p className="text-gray-300 mb-3 font-light">
                  Mapeamento completo da base de usuários e reconhecimento oficial dos saldos.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 font-light">
                  <li>Verificação de identidade e validação de contas</li>
                  <li>Cálculo e confirmação dos valores devidos</li>
                  <li>Criação do portal de acesso para consulta de saldos</li>
                </ul>
              </div>

              <div className="relative pl-8 pb-8 border-l border-[#00FFA8]/30">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#00FFA8] -translate-x-2"></div>
                <h3 className="text-xl font-light text-[#00FFA8] mb-2">
                  <CheckCircle className="inline w-5 h-5 mr-2" /> Fase 2: Auditoria e Priorização
                </h3>
                <p className="text-gray-400 text-sm mb-2">30-60 dias</p>
                <p className="text-gray-300 mb-3 font-light">
                  Análise detalhada dos casos e estabelecimento de critérios de prioridade.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 font-light">
                  <li>Auditoria externa dos registros financeiros</li>
                  <li>Priorização de usuários com maior tempo de espera</li>
                  <li>Definição do cronograma de pagamentos</li>
                </ul>
              </div>

              <div className="relative pl-8 pb-8 border-l border-[#00FFA8]/30">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#00FFA8] -translate-x-2"></div>
                <h3 className="text-xl font-light text-[#00FFA8] mb-2">
                  <CheckCircle className="inline w-5 h-5 mr-2" /> Fase 3: Implementação do Plano
                </h3>
                <p className="text-gray-400 text-sm mb-2">60-120 dias</p>
                <p className="text-gray-300 mb-3 font-light">
                  Início do processo de liberação gradual dos valores aos usuários.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 font-light">
                  <li>Liberação inicial de 5% dos saldos para todos os usuários</li>
                  <li>Implementação do sistema de missões para aceleração de liberações</li>
                  <li>Estabelecimento de parcerias estratégicas para captação de recursos</li>
                </ul>
              </div>

              <div className="relative pl-8 pb-8 border-l border-[#00FFA8]/30">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#00FFA8] -translate-x-2"></div>
                <h3 className="text-xl font-light text-[#00FFA8] mb-2">
                  <CheckCircle className="inline w-5 h-5 mr-2" /> Fase 4: Execução e Monitoramento
                </h3>
                <p className="text-gray-400 text-sm mb-2">120-300 dias</p>
                <p className="text-gray-300 mb-3 font-light">
                  Continuidade do processo de pagamento e ajustes no plano conforme necessário.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 font-light">
                  <li>Pagamentos mensais conforme cronograma estabelecido</li>
                  <li>Relatórios transparentes sobre o andamento do processo</li>
                  <li>Ajustes no plano com base no feedback dos usuários</li>
                </ul>
              </div>

              <div className="relative pl-8 pb-8">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#00FFA8] -translate-x-2"></div>
                <h3 className="text-xl font-light text-[#00FFA8] mb-2">
                  <CheckCircle className="inline w-5 h-5 mr-2" /> Fase 5: Conclusão e Transparência
                </h3>
                <p className="text-gray-400 text-sm mb-2">300-450 dias</p>
                <p className="text-gray-300 mb-3 font-light">
                  Finalização do processo de quitação e prestação de contas pública.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 font-light">
                  <li>Quitação total dos valores devidos</li>
                  <li>Publicação de relatório final detalhado</li>
                  <li>Encerramento oficial das atividades da BeeFund</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Diretrizes Éticas */}
          <section className="bg-transparent border border-[#00FFA8] shadow-[0_0_12px_#00FFA8] rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00FFA8] hover:border-[#00FFA8]/80 text-white">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <Pin className="w-6 h-6 mr-3 text-[#00FFA8]" /> DIRETRIZES ÉTICAS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-transparent border border-[#00FFA8] shadow-[0_0_8px_#00FFA8] rounded-lg p-6 transition-all duration-300 hover:scale-103 hover:shadow-[0_0_16px_#00FFA8] hover:border-[#00FFA8]/80 text-white">
                <h3 className="text-lg font-light text-[#00FFA8] mb-3">Transparência Total</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Todas as ações, decisões e movimentações financeiras serão documentadas e disponibilizadas para
                  consulta dos usuários.
                </p>
              </div>

              <div className="bg-transparent border border-[#00FFA8] shadow-[0_0_8px_#00FFA8] rounded-lg p-6 transition-all duration-300 hover:scale-103 hover:shadow-[0_0_16px_#00FFA8] hover:border-[#00FFA8]/80 text-white">
                <h3 className="text-lg font-light text-[#00FFA8] mb-3">Sem Novos Investimentos</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Não aceitaremos novos depósitos ou investimentos. Nosso foco é exclusivamente na quitação dos valores
                  existentes.
                </p>
              </div>

              <div className="bg-transparent border border-[#00FFA8] shadow-[0_0_8px_#00FFA8] rounded-lg p-6 transition-all duration-300 hover:scale-103 hover:shadow-[0_0_16px_#00FFA8] hover:border-[#00FFA8]/80 text-white">
                <h3 className="text-lg font-light text-[#00FFA8] mb-3">Comunicação Clara</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Manteremos uma comunicação direta e objetiva, sem promessas irrealistas ou linguagem enganosa.
                </p>
              </div>

              <div className="bg-transparent border border-[#00FFA8] shadow-[0_0_8px_#00FFA8] rounded-lg p-6 transition-all duration-300 hover:scale-103 hover:shadow-[0_0_16px_#00FFA8] hover:border-[#00FFA8]/80 text-white">
                <h3 className="text-lg font-light text-[#00FFA8] mb-3">Prioridade aos Usuários</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Todas as decisões serão tomadas considerando o melhor interesse dos usuários e a maximização da
                  recuperação de seus valores.
                </p>
              </div>
            </div>
          </section>

          {/* Encerramento */}
          <section className="bg-transparent border border-[#00FFA8] shadow-[0_0_12px_#00FFA8] rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00FFA8] hover:border-[#00FFA8]/80 text-white text-center card-attention">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center justify-center">
              <Target className="w-6 h-6 mr-3 text-[#00FFA8]" /> Compromisso com a Recuperação
            </h2>
            <p className="text-gray-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Reconhecemos os erros do passado e estamos comprometidos em fazer o que é certo. Este plano de recuperação
              representa nosso compromisso inabalável com a transparência, a ética e a responsabilidade para com todos
              que confiaram em nós.
            </p>

            <a
              href="https://t.me/beefundofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-[#00FFA8] text-[#00FFA8] font-medium px-8 py-4 rounded-lg hover:bg-[#00FFA8]/10 transition-all duration-300 shadow-lg shadow-[#00FFA8]/10"
            >
              <div className="flex items-center justify-center">
                <span className="mr-2">
                  <ExternalLink className="w-4 h-4" />
                </span>
                <span>ACOMPANHE O PROCESSO DE RECUPERAÇÃO</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>

            <p className="mt-8 text-sm text-gray-500 font-light">
              Sem justiça, não há futuro. Sem verdade, não há recuperação.
              <br />E sem vocês… a colmeia nunca existiria.
            </p>
          </section>
        </div>
      </div>

      {/* Estilos CSS para animações */}
      <style jsx global>{`
        /* Animação de pulsação suave para chamar atenção */
        @keyframes soft-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .card-attention {
          animation: soft-pulse 2s ease-in-out infinite;
          animation-delay: 5s;
        }

        /* Pausar a pulsação durante o hover para não conflitar */
        .card-attention:hover {
          animation-play-state: paused;
        }

        /* Animação de entrada fade-up para o título */
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-up-subtitle {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title-fade-up {
          animation: fade-up 1s ease-out forwards;
        }

        .subtitle-fade-up {
          animation: fade-up-subtitle 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }

        /* Animação de pulsação específica para o título */
        @keyframes pulse-title {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }

        .animate-title-pulse {
          animation: pulse-title 3s ease-in-out infinite;
          animation-delay: 5s;
        }

        /* Pausar a pulsação do título durante o hover */
        .animate-title-pulse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
