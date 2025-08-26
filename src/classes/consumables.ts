export interface IConsumables {
    name: string
    description: string
}

export class Consumables {
    constructor(private props: IConsumables) {}
    get data() { return this.props }
}