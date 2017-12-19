

import {DataAccess} from "../database/DataAccess";
import {GameMode} from "../model/match";

export class GameModeController {

    db: DataAccess;

    constructor() {
        this.db = new DataAccess()
    }

    public getGameModes(callback: any) {
        this.db.findAll("gamemodes", callback);
    }

    public addGameMode(mode: GameMode) {
        this.db.add("gamemodes", mode);
    }

}