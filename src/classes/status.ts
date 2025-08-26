export interface IStatus {
    vigor: number
    strength: number
    presence: number
    agility: number
    intelligence: number
}

export class Status {
    constructor(private props: IStatus) {}
    get data() { return this.props }

    static create() {
        return new Status({ vigor: 6, strength: 6, presence: 6, agility: 6, intelligence: 6 })
    }
}