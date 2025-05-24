"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface Language {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "https://flagcdn.com/16x12/gb.png" },
  { code: "pt-BR", name: "Brazilian", flag: "https://flagcdn.com/16x12/br.png" },
  { code: "id", name: "Indonesia", flag: "https://flagcdn.com/16x12/id.png" },
]

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language)
    setIsOpen(false)
  }

  // Fechar o dropdown quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center text-white bg-black px-3 py-2 rounded-md hover:bg-gray-800"
      >
        <img src={selectedLanguage.flag || "/placeholder.svg"} className="w-4 h-3 mr-2" alt={selectedLanguage.name} />
        {selectedLanguage.name}
        <ChevronDown className="ml-2 w-4 h-4 text-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50">
          <ul className="py-1 text-white text-sm">
            {languages.map((language) => (
              <li
                key={language.code}
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => selectLanguage(language)}
              >
                <img src={language.flag || "/placeholder.svg"} className="w-4 h-3 mr-2" alt={language.name} />
                {language.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
