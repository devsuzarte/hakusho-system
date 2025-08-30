import { ICharacter } from "./character-interface"

export interface INewCharacter {
    name: string
    technique: string
}

export class Character {
    private constructor(private props: ICharacter) {}
    get data() { return this.props }


}