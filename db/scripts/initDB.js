#!/usr/bin/env mongo
var db = new Mongo().getDB('rld-core');
if(db){
    db.dropDatabase();

}else {
    new Mongo().getDB();
}
    
db = db.getSiblingDB('rld-core');

db.createCollection('rl_date');

db.createCollection('rl_user');

db.createCollection('rl_event');

