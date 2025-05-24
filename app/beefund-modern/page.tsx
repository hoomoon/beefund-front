"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Plus, Twitter, Linkedin, Instagram, Globe } from "lucide-react"

export default function BeeFundModern() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-yellow-400">🐝 Bee</span>
            <span className="text-2xl font-bold text-white">Fund</span>
          </Link>
          <button className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              Sobre
            </Link>
            <Link href="#recovery" className="text-gray-300 hover:text-white transition-colors">
              Recuperação
            </Link>
            <Link href="#roadmap" className="text-gray-300 hover:text-white transition-colors">
              Roadmap
            </Link>
            <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link>
            <a
              href="https://t.me/bee_restituicao"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium px-6 py-2 rounded-full hover:from-yellow-400 hover:to-yellow-300 transition-all"
            >
              Entrar no Telegram
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full inline-flex items-center mb-6">
                <span className="mr-2">🔒</span>
                <span>Plano Oficial de Recuperação</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">BeeFund</h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-4">[biː.fʌnd], substantivo</p>
              <p className="text-2xl md:text-3xl text-gray-200 mb-8">A Evolução da Recuperação de Ativos</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://t.me/bee_restituicao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium px-8 py-3 rounded-full hover:from-yellow-400 hover:to-yellow-300 transition-all flex items-center justify-center"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Entrar no grupo oficial
                </a>
                <a
                  href="#recovery"
                  className="bg-white/10 backdrop-blur-sm text-white font-medium px-8 py-3 rounded-full hover:bg-white/20 transition-all flex items-center justify-center"
                >
                  Saiba mais
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-6xl">🐝</span>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-yellow-400/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-yellow-400/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-yellow-400/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Compromisso</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A BeeFund retorna com um único propósito: honrar seus compromissos e devolver o valor aos investidores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Segurança Garantida</h3>
              <p className="text-gray-400">
                Implementamos protocolos de segurança avançados para proteger todos os dados e transações.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Recuperação de Ativos</h3>
              <p className="text-gray-400">
                Plano estruturado para devolver gradualmente os valores investidos aos nossos usuários.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparência Total</h3>
              <p className="text-gray-400">
                Acompanhe em tempo real o progresso do plano de recuperação e todas as ações tomadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Plan Section */}
      <section id="recovery" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Plano de Recuperação</h2>
              <p className="text-xl text-gray-400 mb-8">
                Nosso plano de recuperação foi cuidadosamente elaborado para garantir que todos os investidores recebam
                seus valores de volta.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Identificação</h3>
                    <p className="text-gray-400">Verificação e validação de todos os investidores afetados.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Auditoria</h3>
                    <p className="text-gray-400">Análise completa dos valores e priorização de pagamentos.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Liberação</h3>
                    <p className="text-gray-400">Pagamentos graduais conforme cronograma estabelecido.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Cronograma de Liberação</h3>

                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <div>
                      <h4 className="font-medium">Acesso e verificação</h4>
                      <p className="text-sm text-gray-400">Validação inicial da conta</p>
                    </div>
                    <div className="text-yellow-400 font-bold">5%</div>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <div>
                      <h4 className="font-medium">Permanência ativa</h4>
                      <p className="text-sm text-gray-400">Após 30 dias de atividade</p>
                    </div>
                    <div className="text-yellow-400 font-bold">+10%</div>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <div>
                      <h4 className="font-medium">Missões éticas</h4>
                      <p className="text-sm text-gray-400">Participação em atividades da comunidade</p>
                    </div>
                    <div className="text-yellow-400 font-bold">+15%</div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Depoimento verificado</h4>
                      <p className="text-sm text-gray-400">Compartilhamento de experiência</p>
                    </div>
                    <div className="text-yellow-400 font-bold">+5%</div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://t.me/bee_restituicao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium px-6 py-3 rounded-full hover:from-yellow-400 hover:to-yellow-300 transition-all w-full block text-center"
                  >
                    Participar do Plano
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap de Quitação</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nosso plano detalhado para garantir a quitação completa de todos os valores.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-yellow-400/30"></div>

            <div className="space-y-24 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold mb-3">Fase 1: Identificação</h3>
                  <p className="text-gray-400">
                    Cadastro via Portal BeeLock e geração automática do saldo reconhecido.
                  </p>
                  <p className="text-yellow-400 mt-2">0-15 dias</p>
                </div>
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center z-10 mx-auto md:mx-0">
                  <span className="text-black font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right"></div>
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center z-10 mx-auto md:mx-0">
                  <span className="text-black font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-2xl font-bold mb-3">Fase 2: Auditoria</h3>
                  <p className="text-gray-400">Validação cruzada e priorização para usuários com prejuízo total.</p>
                  <p className="text-yellow-400 mt-2">15-30 dias</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold mb-3">Fase 3: Liberação Gradual</h3>
                  <p className="text-gray-400">
                    Liberação proporcional com base em atividade, sem exigência de investimento.
                  </p>
                  <p className="text-yellow-400 mt-2">30-90 dias</p>
                </div>
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center z-10 mx-auto md:mx-0">
                  <span className="text-black font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right"></div>
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center z-10 mx-auto md:mx-0">
                  <span className="text-black font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-2xl font-bold mb-3">Fase 4: Pagamento em Lote</h3>
                  <p className="text-gray-400">Usando fundo de liquidez alimentado por taxas internas e parcerias.</p>
                  <p className="text-yellow-400 mt-2">A cada 30 dias</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold mb-3">Fase 5: Encerramento Total</h3>
                  <p className="text-gray-400">Todos os saldos quitados e relatório público transparente.</p>
                  <p className="text-yellow-400 mt-2">12-18 meses</p>
                </div>
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center z-10 mx-auto md:mx-0">
                  <span className="text-black font-bold">5</span>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-700/10 p-12 rounded-3xl border border-yellow-500/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Junte-se ao Movimento de Recuperação</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Acompanhe de perto o processo de quitação e participe da reconstrução da confiança.
            </p>
            <a
              href="https://t.me/bee_restituicao"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium px-8 py-4 rounded-full hover:from-yellow-400 hover:to-yellow-300 transition-all inline-flex items-center text-lg"
            >
              <span className="mr-2">🎯</span>
              Entrar no Grupo Oficial do Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-6">Compromisso com a Transparência</h3>
              <div className="flex space-x-6 opacity-70">
                <div className="h-8 w-20 bg-white/20 rounded"></div>
                <div className="h-8 w-20 bg-white/20 rounded"></div>
                <div className="h-8 w-20 bg-white/20 rounded"></div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-6">O que dizem sobre nós</h3>
              <div className="flex space-x-6 opacity-70">
                <div className="h-8 w-20 bg-white/20 rounded"></div>
                <div className="h-8 w-20 bg-white/20 rounded"></div>
                <div className="h-8 w-20 bg-white/20 rounded"></div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-6">Desenvolvido por</h3>
              <div className="flex space-x-6 opacity-70">
                <div className="h-8 w-20 bg-white/20 rounded"></div>
                <div className="h-8 w-20 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-yellow-400">🐝 Bee</span>
                <span className="text-2xl font-bold text-white">Fund</span>
              </Link>
              <p className="text-gray-500 mt-2">© 2025 BeeFund. Todos os direitos reservados.</p>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>Sem justiça, não há futuro. Sem verdade, não há lançamento. E sem vocês… a colmeia nunca existiria.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
