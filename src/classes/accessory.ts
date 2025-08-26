
export interface IAccessory {
    name: string
    description: string
}

export class Accessory {
    constructor(private props: IAccessory) {}
    get data() { return this.props }
}