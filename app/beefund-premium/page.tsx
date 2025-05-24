"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function BeeFundPremium() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Animação pulsante para elementos com classe 'pulse'
    const pulseElements = document.querySelectorAll(".pulse")
    pulseElements.forEach((element) => {
      setInterval(() => {
        element.classList.toggle("pulse-active")
      }, 2000)
    })
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#050510] text-white font-sans relative overflow-hidden">
      {/* Background com efeito tech */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050510]"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 50%, rgba(0, 255, 170, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 85% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
              linear-gradient(45deg, transparent 48%, rgba(0, 255, 170, 0.03) 50%, transparent 52%),
              linear-gradient(135deg, transparent 48%, rgba(255, 215, 0, 0.03) 50%, transparent 52%)
            `,
            backgroundSize: "100% 100%, 100% 100%, 30px 30px, 30px 30px",
          }}
        ></div>

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Stars */}
        <div className="stars">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + "px",
                height: Math.random() * 2 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.2,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Botão de voltar */}
        <div className="absolute top-6 left-6 z-50">
          <Link href="/" className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Voltar</span>
          </Link>
        </div>

        {/* Colmeia Digital - Elemento central */}
        <div className="flex justify-center mb-12 mt-16">
          <div className="relative w-64 h-64">
            {/* Círculos pulsantes */}
            <div
              className="absolute inset-0 rounded-full border border-yellow-500/30 pulse"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute inset-2 rounded-full border border-yellow-500/20 pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute inset-4 rounded-full border border-yellow-500/10 pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Colmeia hexagonal */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="honeycomb-container">
                <svg width="180" height="180" viewBox="0 0 180 180">
                  <defs>
                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00FFA0" stopOpacity="0.3" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Hexágonos da colmeia */}
                  <g className="honeycomb" filter="url(#glow)">
                    {/* Hexágono central */}
                    <polygon
                      points="90,50 115,65 115,95 90,110 65,95 65,65"
                      fill="url(#hexGradient)"
                      stroke="#FFD700"
                      strokeWidth="1.5"
                      className="pulse"
                    />

                    {/* Hexágonos ao redor */}
                    <polygon
                      points="90,10 115,25 115,55 90,70 65,55 65,25"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="1"
                      opacity="0.6"
                    />
                    <polygon
                      points="130,30 155,45 155,75 130,90 105,75 105,45"
                      fill="none"
                      stroke="#00FFA0"
                      strokeWidth="1"
                      opacity="0.6"
                    />
                    <polygon
                      points="130,90 155,105 155,135 130,150 105,135 105,105"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="1"
                      opacity="0.6"
                    />
                    <polygon
                      points="90,110 115,125 115,155 90,170 65,155 65,125"
                      fill="none"
                      stroke="#00FFA0"
                      strokeWidth="1"
                      opacity="0.6"
                    />
                    <polygon
                      points="50,90 75,105 75,135 50,150 25,135 25,105"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="1"
                      opacity="0.6"
                    />
                    <polygon
                      points="50,30 75,45 75,75 50,90 25,75 25,45"
                      fill="none"
                      stroke="#00FFA0"
                      strokeWidth="1"
                      opacity="0.6"
                    />
                  </g>

                  {/* Abelha no centro */}
                  <text x="90" y="85" textAnchor="middle" fontSize="24" fill="#FFD700">
                    🐝
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Título e Subtítulo */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            🐝 BEEFund Voltou. Mas Não Como Antes.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Voltamos para pagar. Não para arrecadar.
            <span className="block mt-2">Esse é o Plano de Recuperação Oficial.</span>
          </p>
        </div>

        {/* Cards principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card do Plano */}
          <div className="bg-[#0A0A20]/40 backdrop-blur-md rounded-xl border border-[#1A1A40] p-6 shadow-lg shadow-[#00FFA0]/5 hover:shadow-[#00FFA0]/10 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-400/10 flex items-center justify-center mr-4">
                <span className="text-yellow-400 text-xl">📢</span>
              </div>
              <h2 className="text-2xl font-bold text-yellow-400">Atenção, ex-usuário</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Se você investiu e ficou sem receber... <span className="text-white font-medium">Agora é a sua vez.</span>
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#00FFA0]/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="#00FFA0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-white">
                  <span className="text-[#00FFA0] font-medium">PAGAR</span> quem confiou.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#00FFA0]/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="#00FFA0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-white">Sem capturar novos valores.</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#00FFA0]/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="#00FFA0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-white">Sem vender promessas.</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#00FFA0]/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="#00FFA0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-white">Sem pegadinhas.</span>
              </li>
            </ul>
          </div>

          {/* Tabela de Liberação */}
          <div className="bg-[#0A0A20]/40 backdrop-blur-md rounded-xl border border-[#1A1A40] p-6 shadow-lg shadow-[#00FFA0]/5 hover:shadow-[#00FFA0]/10 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-400/10 flex items-center justify-center mr-4">
                <span className="text-yellow-400 text-xl">🔓</span>
              </div>
              <h2 className="text-2xl font-bold text-yellow-400">Como funciona a liberação</h2>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#1A1A40]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#1A1A40]/50">
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-300">Ação</th>
                    <th className="py-3 px-4 text-right text-sm font-medium text-gray-300">Liberação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A1A40]">
                  <tr className="bg-[#0A0A20]/30 hover:bg-[#0A0A20]/50 transition-colors">
                    <td className="py-3 px-4 text-sm text-white">Acesso e verificação de conta</td>
                    <td className="py-3 px-4 text-right text-sm font-medium text-[#00FFA0]">5%</td>
                  </tr>
                  <tr className="bg-[#0A0A20]/30 hover:bg-[#0A0A20]/50 transition-colors">
                    <td className="py-3 px-4 text-sm text-white">Permanecer ativo por 30 dias</td>
                    <td className="py-3 px-4 text-right text-sm font-medium text-[#00FFA0]">+10%</td>
                  </tr>
                  <tr className="bg-[#0A0A20]/30 hover:bg-[#0A0A20]/50 transition-colors">
                    <td className="py-3 px-4 text-sm text-white">Participar de missões éticas</td>
                    <td className="py-3 px-4 text-right text-sm font-medium text-[#00FFA0]">+15%</td>
                  </tr>
                  <tr className="bg-[#0A0A20]/30 hover:bg-[#0A0A20]/50 transition-colors">
                    <td className="py-3 px-4 text-sm text-white">Compartilhar depoimento verificado</td>
                    <td className="py-3 px-4 text-right text-sm font-medium text-[#00FFA0]">+5%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              <p>Liberações adicionais serão anunciadas conforme o avanço do plano de recuperação.</p>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-yellow-400 mb-10">ROADMAP DE QUITAÇÃO BEEFund</h2>

          <div className="relative">
            {/* Linha do tempo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-yellow-400/50 via-[#00FFA0]/50 to-yellow-400/50"></div>

            <div className="relative z-10">
              {/* Etapa 1 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold text-white mb-2">Identificação da base antiga</h3>
                  <p className="text-gray-400">
                    Cadastro via Portal BeeLock e geração automática do saldo reconhecido.
                  </p>
                  <p className="text-yellow-400 mt-2 text-sm">0-15 dias</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center z-10 mx-auto md:mx-0 shadow-lg shadow-yellow-400/30">
                  <span className="text-black font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>

              {/* Etapa 2 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                <div className="w-10 h-10 rounded-full bg-[#00FFA0] flex items-center justify-center z-10 mx-auto md:mx-0 shadow-lg shadow-[#00FFA0]/30">
                  <span className="text-black font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-white mb-2">Auditoria e priorização</h3>
                  <p className="text-gray-400">Validação cruzada e priorização para usuários com prejuízo total.</p>
                  <p className="text-[#00FFA0] mt-2 text-sm">15-30 dias</p>
                </div>
              </div>

              {/* Etapa 3 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold text-white mb-2">Programa de liberação gradual</h3>
                  <p className="text-gray-400">
                    Liberação proporcional com base em atividade, sem exigência de investimento.
                  </p>
                  <p className="text-yellow-400 mt-2 text-sm">30-90 dias</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center z-10 mx-auto md:mx-0 shadow-lg shadow-yellow-400/30">
                  <span className="text-black font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>

              {/* Etapa 4 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                <div className="w-10 h-10 rounded-full bg-[#00FFA0] flex items-center justify-center z-10 mx-auto md:mx-0 shadow-lg shadow-[#00FFA0]/30">
                  <span className="text-black font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-white mb-2">Pagamento em lote</h3>
                  <p className="text-gray-400">Usando fundo de liquidez alimentado por taxas internas e parcerias.</p>
                  <p className="text-[#00FFA0] mt-2 text-sm">A cada 30 dias</p>
                </div>
              </div>

              {/* Etapa 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold text-white mb-2">Encerramento total</h3>
                  <p className="text-gray-400">Todos os saldos quitados e relatório público transparente.</p>
                  <p className="text-yellow-400 mt-2 text-sm">12-18 meses</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center z-10 mx-auto md:mx-0 shadow-lg shadow-yellow-400/30">
                  <span className="text-black font-bold">5</span>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#0A0A20]/40 backdrop-blur-md rounded-xl border border-[#1A1A40] p-8 shadow-lg shadow-[#00FFA0]/5 hover:shadow-[#00FFA0]/10 transition-all duration-500 text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Entre no Grupo Oficial</h2>
            <p className="text-gray-300 mb-6">
              Junte-se ao canal oficial para acompanhar o processo de recuperação e garantir seu acesso ao plano.
            </p>

            <a
              href="https://t.me/bee_restituicao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 font-medium px-8 py-3 rounded-full hover:bg-yellow-400/10 transition-all duration-300 shadow-lg shadow-yellow-400/20 group"
            >
              <div className="flex items-center justify-center">
                <span className="mr-2">🔗</span>
                <span>ENTRAR NO TELEGRAM OFICIAL</span>
                <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <p className="mt-6 text-sm text-gray-500">
              Sem justiça, não há futuro. Sem verdade, não há lançamento.
              <br />E sem vocês… a colmeia nunca existiria.
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-animation {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }
        
        .pulse {
          animation: pulse-animation 3s infinite ease-in-out;
        }
        
        .pulse-active {
          filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.6));
        }
      `}</style>
    </div>
  )
}
