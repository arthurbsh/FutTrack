'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var DataAccess_1 = require("./database/DataAccess");
var match_1 = require("./model/match");
var db = new DataAccess_1.DataAccess();
db.init();
db.add("gamemodes", new match_1.WeekendLeague(10));
console.log("Exit");
