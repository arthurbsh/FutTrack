import {DataAccess} from "../database/DataAccess";
import {Match} from "../model/match";

export class MatchController {

    db: DataAccess;

    constructor() {
        this.db = new DataAccess()
    }

    public getMatches(callback: any) {
        this.db.findAll("matches", callback);
    }

    public addMatch(match: Match) {
        this.db.add("matches", match);
    }

}