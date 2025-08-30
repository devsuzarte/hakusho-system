import { Character } from "../models/character";

interface CharacterState {
    character: Character[]
    activeId: string | null
    addCharacter: (character: Character) => void
    setActive: (id: string) => void

}