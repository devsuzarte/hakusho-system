import { LEVELING_UP_TABLE_VALUES, LEVELING_UP_TABLE_ORDER, type Rank } from "../utils/constraints"

export interface ILeveling {
    rank: Rank
    level: number
    exp: number
    points: number
}

export class Leveling {
    private constructor(private props: ILeveling) {}
    get data() { return this.props }

    static create() {
        return new Leveling({ rank: "F", level: 1, exp: 0, points: 0 })
    }

    up(exp: number) {
        if (exp <= 0) return
        this.props.exp += exp

        if (this.props.exp >= 10) {
        const gained = Math.floor(this.props.exp / 10)
        this.props.exp = this.props.exp % 10
        this.props.points += gained                    
        this.updateRankAndLevel()
        }
    }

    setPoints(points: number) {
        this.props.points = Math.max(0, Math.floor(points))
        this.updateRankAndLevel()
    }


    private updateRankAndLevel() {
        const r = this.resolveFromPoints(this.props.points)
        this.props.rank = r.rank
        this.props.level = r.level
    }

    resolveFromPoints(totalPoints: number) {
        const points = Math.max(0, Math.floor(totalPoints))
        let acc = 0

        for (let i = 0; i < LEVELING_UP_TABLE_ORDER.length; i++) {
            const rank = LEVELING_UP_TABLE_ORDER[i] as Rank
            const need = LEVELING_UP_TABLE_VALUES[rank]
            const isLast = i === LEVELING_UP_TABLE_ORDER.length - 1 || need === 0

            if (isLast) {
            return {
                rank,
                level: 1,
                progressInRank: 0,
                levelCap: 0,
                pointsToNextRank: Infinity,
            }
            }

            if (points < acc + need) {
            const progressed = points - acc 
            return {
                rank,
                level: progressed + 1,        
                progressInRank: progressed,   
                levelCap: need,               
                pointsToNextRank: need - progressed + 1,
            }
            }

            acc += need
        }

        return {
            rank: "SS" as Rank,
            level: 1,
            progressInRank: 0,
            levelCap: 0,
            pointsToNextRank: Infinity,
        }
    }
}