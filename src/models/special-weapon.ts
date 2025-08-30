
export interface ISpecialWeapon {
    name: string
    description: string
}

export class SpecialWeapon {
    constructor(private props: ISpecialWeapon) {}
    get data() { return this.props }
}