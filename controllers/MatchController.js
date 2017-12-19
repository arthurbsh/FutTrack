"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataAccess_1 = require("../database/DataAccess");
var MatchController = (function () {
    function MatchController() {
        this.db = new DataAccess_1.DataAccess();
    }
    MatchController.prototype.getMatches = function (callback) {
        this.db.findAll("matches", callback);
    };
    MatchController.prototype.addMatch = function (match) {
        this.db.add("matches", match);
    };
    return MatchController;
}());
exports.MatchController = MatchController;
