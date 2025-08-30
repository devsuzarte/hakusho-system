export interface ICharacter {
    name: string
    technique: string
    leveling: {
        rank: string
        level: number
        exp: number
    }
    balance: number
    status: {
        vigor: number
        strength: number
        presence: number
        agility: number
        intelligence: number
    }
    armor: {
        value: number
        modifier: number
    }
    health: {
        value: number
        modifier: number
    }
    energy: {
        value: number
        modifier: number
    }
    achetypes: {
        archetype: string
        health: number
        energy: number
    }[]
    weapons: {}[]
    specialWeapon: {}
    accessory: {}
    consumables: {}[]
    abilities: {}[]
    comment: ""
}