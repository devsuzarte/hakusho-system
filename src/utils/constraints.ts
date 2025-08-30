import type { IArchetype } from "../models/archetype";

export const INDEXED_DB_NAME = "bh-database"
export const INDEXED_STORE_NAME = "charaters"
export const INDEXED_VERSION = 1

export const LEVELING_UP_TABLE_VALUES: Record<string, number> = { F: 4, E: 4, D: 4, C: 6, B: 6, A: 8, S: 8, SS: 0 }
export const LEVELING_UP_TABLE_ORDER = ["F","E","D","C","B","A","S","SS"];
export type Rank = typeof LEVELING_UP_TABLE_ORDER[number];

export const ARCHETYPES: IArchetype[] = [
    { name: "perpetrador",  health: 10, energy: 0 },
    { name: "projetilista", health: 10, energy: 0 },
    { name: "conjurador",   health: 10, energy: 0 },
    { name: "domador",      health: 10, energy: 0 },
    { name: "insinuante",   health: 5,  energy: 5 },
    { name: "mediador",     health: 2,  energy: 6 },
    { name: "ressabiador",  health: 6,  energy: 2 },
    { name: "dificultador", health: 4,  energy: 5 },
    { name: "segurador",    health: 6,  energy: 2 },
    { name: "ajudador",     health: 7,  energy: 3 },
]