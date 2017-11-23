var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

export class DataAccess {
    // Connection URL
    private url: string;

    constructor(){
        this.url = 'mongodb://localhost:27017/FutTrack';
    }

    createCollection(name: string) {
        MongoClient.connect(this.url, function(err, db) {
            assert.equal(err, null);

            db.createCollection(name, function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    db.close();
                }
            });
        });
    }

    add(collection: string, object: any) {
        MongoClient.connect(this.url, function(err, db) {
            assert.equal(err, null);

            db.collection(collection).insertOne(object, function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(typeof(object) + " added to " + collection);
                    db.close();
                }
            });
        });
    }

    findAll(collection: string, callback) {
        MongoClient.connect(this.url, function(err, db) {
            assert.equal(err, null);

            db.collection(collection).find({}).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    db.close();
                    callback(result);
                }
            });
        });
    }

    init() {
        this.createCollection("gamemodes");
        this.createCollection("matches");
    }
}

