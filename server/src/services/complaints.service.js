import 'dotenv/config';
import { mongoService } from "../db/connect.js";
export const complaintService = {
  add,
  query,
};

async function add(complaint) {
  try {
    const collection = await mongoService.createCollection("complaint");

    complaint.createdAt = new Date();

    const result = await collection.insertOne(complaint);

    return {
      _id: result.insertedId,
      ...complaint,
    };
  } catch (err) {
    console.log("Cannot insert complaint", err);
    throw err;
  }
}

async function query() {
  try {
    const collection = await mongoService.createCollection("complaint");

    return await collection.find({}).sort({ createdAt: -1 }).toArray();
  } catch (err) {
    console.log("Cannot get complaints", err);
    throw err;
  }
}
// add({'sdgsdg':'sfdfsdb'})