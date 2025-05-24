"use client"

import { Eye, TrendingUp, Volume2, Box, Send, BarChart3, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { LanguageSelector } from "@/components/language-selector"

export default function FinancialApp() {
  const [activeTab, setActiveTab] = useState("deposits")

  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#0f0f1a] to-[#101828]">
      {/* Header com background de moedas */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image src="/images/coins-background.png" alt="Moedas de ouro" fill className="object-cover opacity-20" />
        </div>

        {/* Logo BeeFund sobreposta */}
        <img
          src="/logo-beefund.png"
          alt="Logo BeeFund"
          className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 lg:w-48 z-50 transition-all duration-300 ease-in-out hover:scale-105"
        />

        <div className="relative z-10 p-6 pt-20 pb-8">
          {/* Seletor de idiomas */}
          <div className="flex justify-end mb-4">
            <LanguageSelector />
          </div>

          {/* Lucro do dia e Saldo total */}
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-2xl font-bold text-green-400 transition-all duration-300 ease-in-out">
                +43,696 <span className="text-sm">≈ R$ 242,88</span>
              </p>
              <p className="text-xs text-gray-400">Ontem</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold transition-all duration-300 ease-in-out">1.401,4742</p>
              <div className="flex items-center justify-end text-xs text-gray-400">
                <span>Saldo total</span>
                <Eye className="w-4 h-4 ml-1 transition-all duration-300 ease-in-out" />
              </div>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-medium transition-all duration-300 ease-in-out">1.370,4925</p>
              <p className="text-xs text-gray-400">Depositado</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-medium text-green-400 transition-all duration-300 ease-in-out">+310,4925</p>
              <p className="text-xs text-gray-400">Ganhos de detenção</p>
            </div>
            <div>
              <p className="text-lg font-medium transition-all duration-300 ease-in-out">30,9817</p>
              <p className="text-xs text-gray-400">Saldo disponível</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-medium text-green-400 transition-all duration-300 ease-in-out">+874,4277</p>
              <p className="text-xs text-gray-400">Total</p>
            </div>
          </div>

          {/* Ícone de seta para cima */}
          <div className="absolute bottom-2 right-4">
            <TrendingUp className="w-6 h-6 text-green-400 transition-all duration-300 ease-in-out" />
          </div>
        </div>
      </div>

      {/* Botões de Rendimento e Histórico */}
      <div className="grid grid-cols-2 border-t border-b border-gray-800">
        <button className="flex items-center justify-center py-4 text-gray-300 hover:bg-gray-800/30 transition-all duration-300 ease-in-out">
          <span className="mr-2">📈</span>
          <span>Rendimento</span>
        </button>
        <button className="flex items-center justify-center py-4 text-gray-300 border-l border-gray-800 hover:bg-gray-800/30 transition-all duration-300 ease-in-out">
          <span className="mr-2">📊</span>
          <span>Histórico</span>
        </button>
      </div>

      {/* Aviso flutuante */}
      <div className="flex items-center p-3 bg-[#111827]/80 backdrop-blur-sm border-b border-gray-800 transition-all duration-300 ease-in-out">
        <Volume2 className="w-4 h-4 mr-2 text-gray-400" />
        <span className="text-sm">
          Us****75 Lucro <span className="text-green-400">+1,6 USDT</span>
        </span>
      </div>

      {/* Abas de navegação */}
      <div className="grid grid-cols-2 border-b border-gray-800">
        <button
          onClick={() => setActiveTab("markets")}
          className={`py-4 text-center transition-all duration-300 ease-in-out ${activeTab === "markets" ? "text-green-400 border-b-2 border-green-400" : "text-gray-400"}`}
        >
          Mercados estratégicos
        </button>
        <button
          onClick={() => setActiveTab("deposits")}
          className={`py-4 text-center transition-all duration-300 ease-in-out ${activeTab === "deposits" ? "text-green-400 border-b-2 border-green-400" : "text-gray-400"}`}
        >
          Meus depósitos 7
        </button>
      </div>

      {/* Cards de Depósitos */}
      <div className="flex-1 overflow-auto">
        <DepositCard
          name="Tradovate"
          avatar="/images/tradovate-logo.png"
          date="01/08/2024"
          amount="63,1575"
          dailyGain="+2,046"
          totalGain="+3,1575"
          profitRate="+5,26%"
          href="/tradovate-details"
        />

        <DepositCard
          name="Anne Richards"
          avatar="/images/anne-richards.png"
          date="16/07/2024"
          amount="107,42"
          dailyGain="+2,96"
          totalGain="+7,42"
          profitRate="+7,42%"
        />

        <DepositCard
          name="Anne Richards"
          avatar="/images/anne-richards.png"
          date="15/07/2024"
          amount="221,3"
          dailyGain="+6,1"
          totalGain="+21,3"
          profitRate="+10,65%"
        />

        <DepositCard
          name="Anne Richards"
          avatar="/images/anne-richards.png"
          date="10/07/2024"
          amount="289,45"
          dailyGain="+11,76"
          totalGain="+89,45"
          profitRate="+44,72%"
        />
      </div>

      {/* Rodapé de navegação */}
      <div className="grid grid-cols-4 p-4 border-t border-gray-800 bg-[#111827]/80 backdrop-blur-sm">
        <button className="flex flex-col items-center text-green-400 transition-all duration-300 ease-in-out">
          <Box className="w-6 h-6" />
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-gray-300 transition-all duration-300 ease-in-out">
          <Send className="w-6 h-6" />
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-gray-300 transition-all duration-300 ease-in-out">
          <BarChart3 className="w-6 h-6" />
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-gray-300 transition-all duration-300 ease-in-out">
          <User className="w-6 h-6" />
        </button>
      </div>
      {/* Links para as landing pages */}
      <div className="p-4 border-t border-gray-800 bg-[#111827]/80 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/beefund-institutional"
            className="inline-flex items-center text-[#00FFA0] hover:text-[#00FFA0]/80 transition-colors text-sm"
          >
            🏢 Ver Plano Institucional
          </Link>
        </div>
      </div>
    </div>
  )
}

interface DepositCardProps {
  name: string
  avatar: string
  date: string
  amount: string
  dailyGain: string
  totalGain: string
  profitRate: string
  href?: string
}

function DepositCard({ name, avatar, date, amount, dailyGain, totalGain, profitRate, href }: DepositCardProps) {
  const CardContent = () => (
    <div className="p-4 border-b border-gray-800 hover:bg-gray-800/20 transition-all duration-300 ease-in-out">
      <div className="flex justify-between mb-2">
        <div className="flex items-center">
          <div className="relative w-10 h-10 mr-3 overflow-hidden rounded-full">
            <Image src={avatar || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">{date}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-medium">{amount}</p>
          <p className="text-xs text-gray-400">Valor depositado</p>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-4">
        <div className="text-center">
          <p className="text-green-400 font-medium">{dailyGain}</p>
          <p className="text-xs text-gray-400">Ontem</p>
        </div>
        <div className="text-center">
          <p className="text-green-400 font-medium">{totalGain}</p>
          <p className="text-xs text-gray-400">Total</p>
        </div>
        <div className="text-center">
          <p className="text-green-400 font-medium">{profitRate}</p>
          <p className="text-xs text-gray-400">Taxa de lucro</p>
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block transition-colors duration-300 ease-in-out">
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}
