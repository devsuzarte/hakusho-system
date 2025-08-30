export interface IClothe {
    name: string
    description: string
}

export class Clothe {
    constructor(private props: IClothe) {}
    get data() { return this.props }
}