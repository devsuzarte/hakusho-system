import { Character } from "../classes/character";
import { createContext, useContext, useState, ReactNode } from "react"

interface CharacterContextProps {
    character: Character
    setCharacter: React.Dispatch<React.SetStateAction<Character>>
}

const CharacterContext = createContext<CharacterContextProps | undefined>(undefined)

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [character, setCharacter] = useState<Character>(Character.create({
    name: "Nome do Personagem 02",
    technique: "Nome da Técnica 02"
  }))

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  )
}

export const usePlayer = () => {
  const context = useContext(CharacterContext)
  if (!context) {
    throw new Error("useCharacter deve ser usado dentro de CharacterProvider")
  }
  return context
}