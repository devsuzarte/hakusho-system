import { persist } from "zustand/middleware";
import { create } from "zustand"
import { ICharacter } from "../models/character-interface";

interface CharacterState {
    characters: ICharacter[]
    create: (character: ICharacter) => void
    read: (id: string) => ICharacter | undefined
    update: (id: string, data: Partial<ICharacter>) => void
    delete: (id: string) => void
}

export const useCharacter = create<CharacterState>()(
    persist(
        (set, get) => ({
            characters: [],

            create: (char) => set((state) => ({
                characters: [...state.characters, char]
            })),

            read: (id) => get().characters.find((c) => c.id === id),

            update: (id, data) => set((state) => ({
                characters: state.characters.map((c) => c.id === id ? { ...c, ...data } : c)
            })),

            delete: (id) => set((state)  => ({
                characters: state.characters.filter((c) => c.id !== id)
            })) 
        }),
        { name: "character-storage" }
    )
)