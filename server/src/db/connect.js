
import { MongoClient } from 'mongodb'

export const mongoService = { connect , createCollection }

let dbConn = null

async function createCollection(collectionName) {
    try {
        const db = await connect()
        const collection = db.collection(collectionName)
        return collection
    } catch (err) {
        console.log('Failed to get Mongo collection', err)
        throw err
    }
}

async function connect() {
    console.log('connect...');
    if (dbConn) return dbConn
    try {
        const client = await MongoClient.connect(process.env.MONGO_URI)
        return dbConn = client.db(process.env.DB_NAME)
    } catch (err) {
        console.error('Cannot Connect to DB', err)
        throw err
    }
}