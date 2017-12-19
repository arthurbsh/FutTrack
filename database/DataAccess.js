"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var DataAccess = (function () {
    function DataAccess() {
        this.url = 'mongodb://localhost:27017/FutTrack';
    }
    DataAccess.prototype.createCollection = function (name) {
        MongoClient.connect(this.url, function (err, db) {
            assert.equal(err, null);
            db.createCollection(name, function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    db.close();
                }
            });
        });
    };
    DataAccess.prototype.add = function (collection, object) {
        MongoClient.connect(this.url, function (err, db) {
            assert.equal(err, null);
            db.collection(collection).insertOne(object, function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(typeof (object) + " added to " + collection);
                    db.close();
                }
            });
        });
    };
    DataAccess.prototype.findAll = function (collection, callback) {
        MongoClient.connect(this.url, function (err, db) {
            assert.equal(err, null);
            db.collection(collection).find({}).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    db.close();
                    callback(result);
                }
            });
        });
    };
    DataAccess.prototype.init = function () {
        this.createCollection("gamemodes");
        this.createCollection("matches");
    };
    return DataAccess;
}());
exports.DataAccess = DataAccess;
