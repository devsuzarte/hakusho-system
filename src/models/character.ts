import { v4 as uuidv4 } from "uuid"
import { ICharacter } from "./character-interface"
import { ARCHETYPES, IArchetype, LEVELING_UP_TABLE_ORDER, LEVELING_UP_TABLE_VALUES } from "../utils/constraints"

export interface INewCharacter {
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
    archetypes: {
        archetype: string
        health: number
        energy: number
    }[]
}

export class Character {
    constructor(private props: ICharacter) {}
    get data() { return this.props }

    static new(props: INewCharacter) {
        const { leveling, status, archetypes } = props

        const points = this.getPoints(leveling.rank, leveling.level)

        const archetypesHealth = this.getHealthFromArchetypes(archetypes)
        const archetypesEnergy = this.getEnergyFromArchetypes(archetypes)

        const healthValue = this.getHealth(status.vigor, points, archetypesHealth)
        const energyValue = this.getEnergy(status.presence, points, archetypesEnergy)

        return new Character({
            ...props,
            id: uuidv4(),
            armor: {
                value: status.intelligence,
                modifier: 0
            },
            points,
            health: {
                value: healthValue,
                modifier: 0
            },
            energy: {
                value: energyValue,
                modifier: 0
            },
            weapons: [],
            specialWeapon: {},
            accessory: {},
            consumables: [],
            abilities: [],
            comment: ""
        })
    }

    private update() {
        const { leveling, status, archetypes, ...data } = this.props

        const points = Character.getPoints(leveling.rank, leveling.level)

        const archetypesHealth = Character.getHealthFromArchetypes(archetypes)
        const archetypesEnergy = Character.getEnergyFromArchetypes(archetypes)

        const healthValue = Character.getHealth(status.vigor, points, archetypesHealth)
        const energyValue = Character.getEnergy(status.presence, points, archetypesEnergy)

        this.props = {
            ...data,
            leveling,
            status,
            archetypes,
            points,
            health: {
                ...data.health,
                value: healthValue,
            },
            energy: {
                ...data.energy,
                value: energyValue
            }
        }
    }

    static getHealth(vigor: number, points: number, archetypesSum: number) {
        return vigor * 5 + points + archetypesSum
    }

    static getHealthFromArchetypes(archetypes: IArchetype[]) {
        let health = 0
        archetypes.map(a => health += a.health)
        return health
    }

    static getEnergy(presence: number, points: number, archetypesSum: number) {
        return presence * 4 + points + archetypesSum
    }

    static getEnergyFromArchetypes(archetypes: IArchetype[]) {
        let energy = 0
        archetypes.map(a => energy += a.energy)
        return energy
    }

    static getPoints(rank: string, level: number) {
        let total = 0;
        for (const r of LEVELING_UP_TABLE_ORDER) {
            if (r === rank) {
                total += level;
                break;
            }

            total += LEVELING_UP_TABLE_VALUES[r];
        }

        return total;
    }

    setName(name: string) {
        this.props.name = name
    }

    setTechniqueName(technique: string) {
        this.props.technique = technique
    }

    setComment(comment: string) {
        this.props.comment = comment
    }

    setArchetypes(archetypesNames: string[]) {
        if(this.props.archetypes.length + archetypesNames.length >= 4) return

        archetypesNames.map((name) => {
            const archetype = ARCHETYPES.find(a => a.archetype === name)
            if (!archetype) return

            this.props.archetypes.push(archetype)
        })

        this.update()
    }

    up(exp: number) {
        const { leveling } = this.props
        leveling.exp += exp;

        while (leveling.exp >= 10) {
            leveling.exp -= 10;
            leveling.level += 1;

            const rankValue = LEVELING_UP_TABLE_VALUES[leveling.rank];
            if (leveling.level > rankValue) {
                const currentIndex = LEVELING_UP_TABLE_ORDER.indexOf(leveling.rank);
                const nextRank = LEVELING_UP_TABLE_ORDER[currentIndex + 1] || "SS";
                leveling.rank = nextRank;
                leveling.level = 1;
            }
        }

        this.props.leveling = leveling
        this.update()
    }
}