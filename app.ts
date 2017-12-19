'use strict';
import {DataAccess} from "./database/DataAccess";
import {WeekendLeague} from "./model/match";

var db = new DataAccess();

db.init()

db.add("gamemodes", new WeekendLeague(10));

console.log("Exit");