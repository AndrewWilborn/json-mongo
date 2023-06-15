import { MongoClient, ObjectId } from "mongodb"

import mongoURI from "./credentials.js"

const connection = new MongoClient(mongoURI)

await connection.connect() // Connect to database

const c11PracticeDB = connection.db("c11-practice") // Select the collection

//CRUD: Insert
/*
const resultInsert = await c11PracticeDB.collection("grocery-json").insertOne({ // Insert a document
    "id": 6,
    "name": "dorito",
    "price": 1.65,
    "type": "snack",
    "isBought": false
})
console.log(result)
*/

// CRUD: Read
const result2 = await c11PracticeDB.collection("grocery-json").find({}).limit(10).toArray() // read the whole database

const result3 = await c11PracticeDB.collection("grocery-json").find({id: 6}).limit(10).toArray() // read specific document

console.log(result2)

console.log(result3)

// CRUD: Delete
/*
const resultDelete = await c11PracticeDB.collection("grocery-json").deleteOne( {_id: new ObjectId("648b5b7785861e916c5b91c4")} ) // delete object by _id
console.log(resultDelete)
*/


// CRUD: Update
/*
const resultUpdate = await c11PracticeDB.collection("grocery-json").updateOne(
    {_id: new ObjectId('648b5b7785861e916c5b91c2')},
    {$set: {isBought: true}})
console.log(resultUpdate)
*/
connection.close()