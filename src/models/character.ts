import { Ability } from "./ability";
import { Accessory } from "./accessory";
import { Archetype } from "./archetype";
import { Clothe } from "./clothe";
import { Consumables } from "./consumables";
import { Leveling } from "./leveling";
import { SpecialWeapon } from "./special-weapon";
import { Status } from "./status";
import { Weapon } from "./weapon";

export interface ICharacter {
    name: string
    technique: string
    leveling: Leveling
    balance: number
    status: Status
    armor: { value: number, modifier: number },
    health: { value: number, modifier: number},
    energy: { value: number, modifier: number},
    archetypes: Archetype[],
    weapons: Weapon[],
    special_weapon: SpecialWeapon | null,
    clothes: Clothe[],
    accessory: Accessory | null,
    consumables: Consumables[],
    abilities: Ability[],
    comment: string
}

export interface INewCharacter {
    name: string
    technique: string
}

export class Character {
    private constructor(private props: ICharacter) {}
    get data() { return this.props }

    static create(props: INewCharacter) {
        const { ...data } = props
        return new Character({
            ...data,
            leveling: Leveling.create(),
            balance: 500.0,
            status: Status.create(),
            armor: {
                value: 6,
                modifier: 0
            },
            health: {
                value: 36,
                modifier: 0
            },
            energy: {
                value: 25,
                modifier: 0
            },
            archetypes: [],
            weapons: [],
            special_weapon: null,
            clothes: [],
            accessory: null,
            consumables: [],
            abilities: [],
            comment: ""
        })
    }

    load() {
        this.health()
        this.energy()
    }

    health() {
        const { status, leveling, archetypes } = this.props

        let achetypesSum = 0
        archetypes.map(arc => {
            achetypesSum += arc.data.health
        })

        this.props.health.value = status.data.vigor * 5 + leveling.data.points + achetypesSum + this.props.health.modifier
    }

    energy() {
        const { status, leveling, archetypes } = this.props

        let achetypesSum = 0
        archetypes.map(arc => {
            achetypesSum += arc.data.energy
        })

        this.props.energy.value = status.data.presence * 4 + leveling.data.points + achetypesSum + this.props.energy.modifier
    }

    armor() {
        const { status } = this.props
        this.props.armor.value = status.data.intelligence + this.props.armor.modifier
    }

    money(value: number) {
        this.props.balance += value
    }
}