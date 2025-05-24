"use client"

import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Area, AreaChart, Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { LanguageSelector } from "@/components/language-selector"

// Dados para o gráfico de área (profit rate)
const profitData = [
  { time: "0", value: 0.5 },
  { time: "5", value: 0.8 },
  { time: "10", value: 1.2 },
  { time: "15", value: 1.0 },
  { time: "20", value: 1.5 },
  { time: "25", value: 1.8 },
  { time: "30", value: 2.1 },
  { time: "35", value: 1.9 },
  { time: "40", value: 2.3 },
  { time: "45", value: 2.0 },
  { time: "50", value: 2.5 },
  { time: "55", value: 2.2 },
  { time: "60", value: 2.8 },
]

// Dados para o gráfico de barras
const barData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  value: Math.random() * 100 + 50,
}))

// Dados para o gráfico de pizza
const pieData = [
  { name: "EUR/USD", value: 25, color: "#10B981" },
  { name: "USD/JPY", value: 20, color: "#3B82F6" },
  { name: "BTC/USDT", value: 18, color: "#8B5CF6" },
  { name: "ETH/USDT", value: 15, color: "#F59E0B" },
  { name: "GBP/USD", value: 12, color: "#EF4444" },
  { name: "AUD/USD", value: 10, color: "#06B6D4" },
]

export default function TradovateDetails() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#0f0f1a] to-[#101828]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-[#111827]/80 backdrop-blur-sm">
        <div className="flex items-center">
          <Link href="/" className="mr-4 hover:text-green-400 transition-all duration-300 ease-in-out">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <span className="text-lg font-medium">Strategias</span>
        </div>
        <LanguageSelector />
      </div>

      {/* Logo e informações principais */}
      <div className="p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg shadow-blue-500/20 transition-all duration-300 ease-in-out">
            <Image src="/images/tradovate-logo.png" alt="Tradovate" width={64} height={64} className="object-cover" />
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2 transition-all duration-300 ease-in-out">Tradovate</h1>
        <p className="text-gray-400 mb-6">5% / 30d</p>
      </div>

      {/* Métricas principais */}
      <div className="grid grid-cols-2 gap-4 px-6 mb-8">
        <div className="text-center p-4 rounded-lg hover:bg-gray-800/20 transition-all duration-300 ease-in-out">
          <p className="text-2xl font-bold text-green-400">23.0%</p>
          <p className="text-xs text-gray-400">Total investido</p>
          <p className="text-xs text-gray-500">173205729</p>
        </div>
        <div className="text-center p-4 rounded-lg hover:bg-gray-800/20 transition-all duration-300 ease-in-out">
          <p className="text-2xl font-bold">56.13%</p>
          <p className="text-xs text-gray-400">Retorno estimado</p>
          <p className="text-xs text-gray-500">23.9%</p>
        </div>
        <div className="text-center p-4 rounded-lg hover:bg-gray-800/20 transition-all duration-300 ease-in-out">
          <p className="text-2xl font-bold">47.70%</p>
          <p className="text-xs text-gray-400">Win rate</p>
        </div>
        <div className="text-center p-4 rounded-lg hover:bg-gray-800/20 transition-all duration-300 ease-in-out">
          <p className="text-2xl font-bold">628.90%</p>
          <p className="text-xs text-gray-400">Annual net return</p>
        </div>
      </div>

      {/* Current Negotiation */}
      <div className="px-6 mb-8">
        <div className="bg-[#111827]/80 backdrop-blur-sm rounded-lg p-4 shadow-lg transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Current negotiation</h3>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-2xl font-bold text-green-400">1.05%</p>
                  <p className="text-xs text-gray-400">Taxa de lucro atual</p>
                </div>
                <div>
                  <p className="text-lg font-medium">30 dias</p>
                  <p className="text-xs text-gray-400">Tempo de execução</p>
                </div>
              </div>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg shadow-green-500/20 transition-all duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Gráfico de área - Profit Rate */}
      <div className="px-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Profit Rate</h3>
        <div className="h-48 bg-[#111827]/80 backdrop-blur-sm rounded-lg p-4 shadow-lg transition-all duration-300 ease-in-out">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={profitData}>
              <defs>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 12 }} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#10B981"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorProfit)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gráfico de barras */}
      <div className="px-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Performance</h3>
        <div className="h-48 bg-[#111827]/80 backdrop-blur-sm rounded-lg p-4 shadow-lg transition-all duration-300 ease-in-out">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} barCategoryGap="10%">
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 10 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 12 }} />
              <Bar dataKey="value" fill="#10B981" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gráfico de pizza - Trading Pairs */}
      <div className="px-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Trading Pairs Distribution</h3>
        <div className="h-64 bg-[#111827]/80 backdrop-blur-sm rounded-lg p-4 shadow-lg transition-all duration-300 ease-in-out">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={2} dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Legenda do gráfico de pizza */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {pieData.map((entry, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
                <span className="text-xs text-gray-300">
                  {entry.name} ({entry.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
