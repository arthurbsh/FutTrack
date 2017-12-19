"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tag = (function () {
    function Tag() {
    }
    return Tag;
}());
var Mode;
(function (Mode) {
    Mode[Mode["Custom"] = 0] = "Custom";
    Mode[Mode["WeekendLeague"] = 1] = "WeekendLeague";
    Mode[Mode["OnlineDivision"] = 2] = "OnlineDivision";
    Mode[Mode["DailyKnockout"] = 3] = "DailyKnockout";
    Mode[Mode["SquadBattle"] = 4] = "SquadBattle";
})(Mode || (Mode = {}));
var WeekendLeague = (function () {
    function WeekendLeague(week) {
        this.week = week;
        this.mode = Mode.WeekendLeague;
    }
    return WeekendLeague;
}());
exports.WeekendLeague = WeekendLeague;
var OnlineDivision = (function () {
    function OnlineDivision(division) {
        this.division = division;
        this.mode = Mode.OnlineDivision;
    }
    return OnlineDivision;
}());
var Result;
(function (Result) {
    Result[Result["Loss"] = -1] = "Loss";
    Result[Result["Win"] = 1] = "Win";
    Result[Result["Draw"] = 0] = "Draw";
})(Result || (Result = {}));
var Match = (function () {
    function Match() {
        this.tags = [];
        this.scoreAway = this.scoreHome = 0;
        this.winProbability = 0;
    }
    Match.prototype.score = function (match) {
        this.scoreHome++;
    };
    Match.prototype.concede = function (match) {
        this.scoreAway++;
    };
    Match.prototype.setWinProbability = function (probability) {
        if (0 <= probability && probability <= 100) {
            this.winProbability = probability;
        }
    };
    Match.prototype.setComment = function (comment) {
        this.comment = comment;
    };
    Match.prototype.addTag = function (tag) {
        this.tags.concat(tag);
    };
    Match.prototype.setGameMode = function (mode) {
        this.gameMode = mode;
    };
    Match.prototype.setResult = function (result) {
        this.result = result;
    };
    return Match;
}());
exports.Match = Match;
