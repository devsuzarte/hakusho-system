export interface IArchetype {
    name: string
    health: number
    energy: number
}

export class Archetype {
    constructor(private props: IArchetype) {}
    get data() { return this.props }
}