import type { IArchetype } from "../classes/archetype";

export const INDEXED_DB_NAME = "bh-database"
export const INDEXED_STORE_NAME = "players"
export const INDEXED_VERSION = 1

export const LEVELING_UP_TABLE_VALUES: Record<string, number> = { F: 4, E: 4, D: 4, C: 6, B: 6, A: 8, S: 8, SS: 0 }
export const LEVELING_UP_TABLE_ORDER = ["F","E","D","C","B","A","S","SS"];
export type Rank = typeof LEVELING_UP_TABLE_ORDER[number];

export const ARCHETYPES: IArchetype[] = [
    { name: "PERPETRADOR",  health: 10, energy: 0 },
    { name: "PROJETILISTA", health: 10, energy: 0 },
    { name: "CONJURADOR",   health: 10, energy: 0 },
    { name: "DOMADOR",      health: 10, energy: 0 },
    { name: "INSINUANTE",   health: 5,  energy: 5 },
    { name: "MEDIADOR",     health: 2,  energy: 6 },
    { name: "RESSABIADOR",  health: 6,  energy: 2 },
    { name: "DIFICULTADOR", health: 4,  energy: 5 },
    { name: "SEGURADOR",    health: 6,  energy: 2 },
    { name: "AJUDADOR",     health: 7,  energy: 3 },
]