export interface IAbility {
    name: string
    description: string
}

export class Ability {
    constructor(private props: IAbility) {}
    get data() { return this.props }
}