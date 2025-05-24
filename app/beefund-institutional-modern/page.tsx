"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Link2,
  MapPin,
  MessageSquare,
  Sparkles,
  Target,
  Zap,
} from "lucide-react"

export default function BeeFundInstitutionalModern() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white font-light">
      {/* Background com gradiente sutil */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(102, 224, 204, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(102, 224, 204, 0.1) 0%, transparent 50%)
            `,
          }}
        ></div>

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Navbar fixa com glassmorphism */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center text-gray-400 hover:text-[#66e0cc] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Voltar</span>
          </Link>

          {scrolled && (
            <div className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-[#66e0cc]" />
              <span className="font-medium text-[#66e0cc]">BEEFund</span>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10 max-w-4xl">
        {/* Cabeçalho */}
        <header
          className="text-center mb-16 mt-8 opacity-0 animate-[fadeIn_0.8s_ease_forwards]"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide flex items-center justify-center">
            <Sparkles className="w-8 h-8 mr-3 text-[#66e0cc]" />
            <span>BEEFund Voltou. Mas Não Como Antes.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-extralight max-w-2xl mx-auto leading-relaxed">
            Voltamos para pagar. Não para arrecadar.
            <br />
            <span className="text-[#66e0cc]">Esse é o Plano de Recuperação Oficial.</span>
          </p>
        </header>

        {/* Seção principal */}
        <div className="space-y-12">
          {/* Acompanhe a quitação */}
          <section
            className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(102,224,204,0.1)] opacity-0 animate-[fadeIn_0.8s_ease_forwards]"
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 mr-3 text-[#66e0cc]" /> Acompanhe a quitação de perto
            </h2>
            <p className="text-gray-300 mb-8 font-light leading-relaxed">
              Junte-se ao nosso canal oficial para receber atualizações em tempo real sobre o processo de quitação e
              garantir seu acesso ao plano de recuperação.
            </p>

            <div className="flex flex-col items-center">
              <h3 className="text-xl font-light text-[#66e0cc] mb-6 flex items-center">
                <Link2 className="w-5 h-5 mr-3" /> Grupo Oficial do Telegram
              </h3>

              <a
                href="https://t.me/bee_restituicao"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#66e0cc] text-black font-medium px-8 py-4 rounded-lg hover:bg-[#66e0cc]/90 transition-all duration-300 shadow-lg shadow-[#66e0cc]/20 w-full md:w-auto text-center group"
              >
                <div className="flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                  <span>ENTRAR NO GRUPO OFICIAL</span>
                </div>
              </a>
            </div>
          </section>

          {/* Importante */}
          <section
            className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(102,224,204,0.1)] opacity-0 animate-[fadeIn_0.8s_ease_forwards]"
            style={{ animationDelay: "0.6s" }}
          >
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <AlertCircle className="w-6 h-6 mr-3 text-[#66e0cc]" /> Importante
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
                <span className="text-[#66e0cc]">
                  Todas as informações sobre o processo de quitação serão divulgadas exclusivamente pelos nossos canais
                  oficiais.
                </span>
              </p>
            </div>
          </section>

          {/* Roadmap */}
          <section
            className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(102,224,204,0.1)] opacity-0 animate-[fadeIn_0.8s_ease_forwards]"
            style={{ animationDelay: "0.8s" }}
          >
            <h2 className="text-2xl font-light text-white mb-8 flex items-center">
              <MapPin className="w-6 h-6 mr-3 text-[#66e0cc]" /> ROADMAP INSTITUCIONAL DE QUITAÇÃO – BEEFund
            </h2>

            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l border-[#66e0cc]/30">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#66e0cc] -translate-x-2 shadow-[0_0_10px_rgba(102,224,204,0.5)]"></div>
                <h3 className="text-xl font-light text-[#66e0cc] mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" /> Fase 1: Identificação e Reconhecimento
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

              <div className="relative pl-8 pb-8 border-l border-[#66e0cc]/30">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#66e0cc] -translate-x-2 shadow-[0_0_10px_rgba(102,224,204,0.5)]"></div>
                <h3 className="text-xl font-light text-[#66e0cc] mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" /> Fase 2: Auditoria e Priorização
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

              <div className="relative pl-8 pb-8 border-l border-[#66e0cc]/30">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#66e0cc] -translate-x-2 shadow-[0_0_10px_rgba(102,224,204,0.5)]"></div>
                <h3 className="text-xl font-light text-[#66e0cc] mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" /> Fase 3: Implementação do Plano
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

              <div className="relative pl-8 pb-8 border-l border-[#66e0cc]/30">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#66e0cc] -translate-x-2 shadow-[0_0_10px_rgba(102,224,204,0.5)]"></div>
                <h3 className="text-xl font-light text-[#66e0cc] mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" /> Fase 4: Execução e Monitoramento
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
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#66e0cc] -translate-x-2 shadow-[0_0_10px_rgba(102,224,204,0.5)]"></div>
                <h3 className="text-xl font-light text-[#66e0cc] mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" /> Fase 5: Conclusão e Transparência
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
          <section
            className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(102,224,204,0.1)] opacity-0 animate-[fadeIn_0.8s_ease_forwards]"
            style={{ animationDelay: "1s" }}
          >
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-3 text-[#66e0cc]" /> DIRETRIZES ÉTICAS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 transition-all duration-300 hover:border-[#66e0cc]/20">
                <h3 className="text-lg font-light text-[#66e0cc] mb-3">Transparência Total</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Todas as ações, decisões e movimentações financeiras serão documentadas e disponibilizadas para
                  consulta dos usuários.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg border border-white/10 transition-all duration-300 hover:border-[#66e0cc]/20">
                <h3 className="text-lg font-light text-[#66e0cc] mb-3">Sem Novos Investimentos</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Não aceitaremos novos depósitos ou investimentos. Nosso foco é exclusivamente na quitação dos valores
                  existentes.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg border border-white/10 transition-all duration-300 hover:border-[#66e0cc]/20">
                <h3 className="text-lg font-light text-[#66e0cc] mb-3">Comunicação Clara</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Manteremos uma comunicação direta e objetiva, sem promessas irrealistas ou linguagem enganosa.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg border border-white/10 transition-all duration-300 hover:border-[#66e0cc]/20">
                <h3 className="text-lg font-light text-[#66e0cc] mb-3">Prioridade aos Usuários</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Todas as decisões serão tomadas considerando o melhor interesse dos usuários e a maximização da
                  recuperação de seus valores.
                </p>
              </div>
            </div>
          </section>

          {/* Encerramento */}
          <section
            className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(102,224,204,0.1)] text-center opacity-0 animate-[fadeIn_0.8s_ease_forwards]"
            style={{ animationDelay: "1.2s" }}
          >
            <h2 className="text-2xl font-light text-white mb-6 flex items-center justify-center">
              <Target className="w-6 h-6 mr-3 text-[#66e0cc]" /> Compromisso com a Recuperação
            </h2>
            <p className="text-gray-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Reconhecemos os erros do passado e estamos comprometidos em fazer o que é certo. Este plano de recuperação
              representa nosso compromisso inabalável com a transparência, a ética e a responsabilidade para com todos
              que confiaram em nós.
            </p>

            <a
              href="https://t.me/bee_restituicao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border border-[#66e0cc] text-[#66e0cc] font-medium px-8 py-4 rounded-lg hover:bg-[#66e0cc]/10 transition-all duration-300 shadow-lg shadow-[#66e0cc]/10 group"
            >
              <div className="flex items-center justify-center">
                <ExternalLink className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                <span>ACOMPANHE O PROCESSO DE RECUPERAÇÃO</span>
              </div>
            </a>

            <p className="mt-8 text-sm text-gray-500 font-light">
              Sem justiça, não há futuro. Sem verdade, não há recuperação.
              <br />E sem vocês… a colmeia nunca existiria.
            </p>
          </section>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
