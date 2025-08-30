export interface IWeapon {
    name: string
    description: string
}

export class Weapon {
    constructor(private props: IWeapon) {}
    get data() { return this.props }
}