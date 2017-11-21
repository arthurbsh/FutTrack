class Tag {
    tag: string;
}

enum Mode {
    Custom = 0,
    WeekendLeague,
    OnlineDivision,
    DailyKnockout,
    SquadBattle
}

interface GameMode {
    mode: Mode;
}

class WeekendLeague implements GameMode {
    week: number;
    mode: Mode;

    constructor(week: number) {
        this.week = week;
        this.mode = Mode.WeekendLeague;
    }
}

class OnlineDivision implements GameMode {
    mode: Mode;
    division: number;

    constructor(division: number) {
        this.division =  division;
        this.mode = Mode.OnlineDivision;
    }
}

enum Result {
    Loss = -1,
    Win = 1,
    Draw = 0
}

export class Match {
    result: Result;
    scoreHome: number;
    scoreAway: number;
    comment: string;
    tags: Tag[];
    gameMode: GameMode;
    winProbability: number;

    constructor() {
        this.tags = [];
        this.scoreAway = this.scoreHome = 0;
        this.winProbability = 0;
    }

    score(match: Match) {
        this.scoreHome++;
    }

    concede(match: Match) {
        this.scoreAway++;
    }

    setWinProbability(probability: number) {
        if (0 <= probability && probability <= 100 ) {
            this.winProbability = probability;
        }
    }

    setComment(comment: string) {
        this.comment = comment;
    }

    addTag(tag: Tag | Tag[]) {
        this.tags.concat(tag);
    }

    setGameMode(mode: GameMode) {
        this.gameMode = mode;
    }

    setResult(result: Result) {
        this.result = result;
    }

}