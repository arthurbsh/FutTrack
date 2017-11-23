"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataAccess_1 = require("../database/DataAccess");
var GameModeController = (function () {
    function GameModeController() {
        this.db = new DataAccess_1.DataAccess();
    }
    GameModeController.prototype.getGameModes = function (callback) {
        this.db.findAll("gamemodes", callback);
    };
    GameModeController.prototype.addGameMode = function (mode) {
        this.db.add("gamemodes", mode);
    };
    return GameModeController;
}());
exports.GameModeController = GameModeController;
