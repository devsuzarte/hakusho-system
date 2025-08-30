import { openDB } from "idb";
import { INDEXED_DB_NAME, INDEXED_STORE_NAME } from "../utils/constraints";
import type { Character } from "../models/character";

export class Storage {
    async init() {
        return openDB(INDEXED_DB_NAME, 1, {
            upgrade(db) {
                if(!db.objectStoreNames.contains(INDEXED_STORE_NAME)) {
                    db.createObjectStore(INDEXED_STORE_NAME)
                }
            }
        })
    }

    async save(char: Character, slot: string) {
        const db = await this.init()
        await db.put(INDEXED_STORE_NAME, char, slot)
    }

    async load(slot: string) {
        const db = await this.init()
        return db.get(INDEXED_STORE_NAME, slot)
    }

    async list() {
        const db = await this.init()
        return db.getAllKeys(INDEXED_STORE_NAME)
    }

    async delete(slot: string) {
        const db = await this.init()
        return db.delete(INDEXED_STORE_NAME, slot)
    }
}