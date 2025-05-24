"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BeeFundRecovery() {
  return (
    <div className="bg-[#0c0c0f] text-white font-sans min-h-screen">
      {/* Navigation */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <Link href="/" className="flex items-center text-gray-300 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar
        </Link>
      </div>

      {/* Header */}
      <header className="text-center py-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400">🐝 BEEFund Voltou. Mas Não Como Antes.</h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Voltamos para pagar. Não para arrecadar. Esse é o Plano de Recuperação Oficial.
        </p>
      </header>

      {/* Main Alert Section */}
      <section className="bg-[#121216] px-6 py-8 max-w-3xl mx-auto rounded-xl border border-yellow-500 mb-8">
        <h2 className="text-xl font-bold text-yellow-300">📢 Atenção, ex-usuário da BeeFund:</h2>
        <p className="mt-2 text-gray-300">Se você investiu e ficou sem receber… Agora é a sua vez.</p>
        <ul className="mt-4 space-y-2 text-green-400 list-disc list-inside">
          <li>🔒 PAGAR quem confiou.</li>
          <li>❌ Sem capturar novos valores.</li>
          <li>❌ Sem vender promessas.</li>
          <li>❌ Sem pegadinhas.</li>
        </ul>
        <div className="mt-6 text-center">
          <a
            href="https://t.me/bee_restituicao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
          >
            📲 Entrar no Grupo Oficial do Telegram
          </a>
        </div>
      </section>

      {/* Important Clarifications */}
      <section className="px-6 py-10 max-w-3xl mx-auto">
        <h3 className="text-yellow-400 font-bold text-lg">❗ Esclarecimentos importantes:</h3>
        <ul className="mt-4 space-y-3 text-gray-300 list-disc list-inside">
          <li>Cuidado com imitadores. Nenhuma plataforma tem ligação com a BeeFund verdadeira.</li>
          <li>Este retorno não tem fins comerciais. Não estamos arrecadando dinheiro.</li>
        </ul>
      </section>

      {/* Recovery Plan Details */}
      <section className="bg-[#1a1a1d] px-6 py-8 max-w-3xl mx-auto rounded-xl mb-8">
        <h3 className="text-yellow-300 font-bold text-xl">💡 O que é o Plano de Recuperação BeeFund?</h3>
        <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
          <li>✔ Reconhecimento oficial do seu saldo antigo</li>
          <li>✔ Criação do seu BEELOCK (saldo congelado)</li>
          <li>✔ Liberação gradual do valor, SEM NOVO DEPÓSITO</li>
          <li>✔ Acesso apenas para quem já teve conta antes</li>
          <li>✔ Sem convites. Sem campanhas. Sem investimento novo</li>
        </ul>
        <h4 className="mt-6 text-red-400 font-bold">❌ O que a BeeFund NÃO está fazendo:</h4>
        <ul className="mt-2 text-gray-300 list-disc list-inside space-y-2">
          <li>🚫 Não está pedindo mais dinheiro</li>
          <li>🚫 Não está reabrindo investimentos</li>
          <li>🚫 Não está operando com indicação obrigatória</li>
          <li>🚫 Não está escondendo a verdade</li>
          <li>❌ A criptomoeda BEEP foi um erro. Está oficialmente descartada.</li>
        </ul>
      </section>

      {/* Release Table */}
      <section className="px-6 py-10 max-w-3xl mx-auto">
        <h3 className="text-green-400 font-bold text-xl">🔓 Como funciona a liberação?</h3>
        <div className="overflow-x-auto">
          <table className="w-full mt-4 border border-gray-700 text-sm">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-2 text-left">Ação</th>
                <th className="p-2 text-left">Liberação</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-t border-gray-700">
                <td className="p-2">Acesso e verificação de conta</td>
                <td className="p-2">5%</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-2">Permanecer ativo por 30 dias</td>
                <td className="p-2">+10%</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-2">Participar de missões éticas</td>
                <td className="p-2">+15%</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-2">Compartilhar depoimento verificado</td>
                <td className="p-2">+5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-[#121216] px-6 py-10 max-w-3xl mx-auto rounded-xl mb-8">
        <h3 className="text-yellow-400 font-bold text-xl">🗺️ ROADMAP DE QUITAÇÃO BEEFund</h3>
        <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-300">
          <li>ETAPA 1: Identificação da base antiga (0 a 15 dias)</li>
          <li>ETAPA 2: Auditoria e priorização de pagamento (15 a 30 dias)</li>
          <li>ETAPA 3: Programa de liberação gradual</li>
          <li>ETAPA 4: Pagamento em lote (a cada 30 dias)</li>
          <li>ETAPA 5: Encerramento total (12 a 18 meses)</li>
        </ol>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-8 max-w-3xl mx-auto text-center">
        <p className="text-gray-300">
          📌 Nenhum investimento novo será solicitado
          <br />📌 Nenhuma comissão em rede será paga
          <br />📌 100% de foco na quitação de quem confiou
        </p>
        <a
          href="https://t.me/bee_restituicao"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
        >
          🎯 Entrar agora no GRUPO OFICIAL no Telegram
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 px-4">
        Sem justiça, não há futuro. Sem verdade, não há lançamento. E sem vocês… a colmeia nunca existiria.
      </footer>
    </div>
  )
}
