const { MongoClient } = require("mongodb");

const username = encodeURIComponent("<pamarthiminith244>");
const password = encodeURIComponent("<p5brVjQusaKUpidh>");
const cluster = "<clusterName>";
const authSource = "<authSource>";
const authMechanism = "<authMechanism>";

let uri =
  `mongodb+srv://pamarthiminith244:<p5brVjQusaKUpidh>@cluster0.y7377so.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db("<dbName>"); 
    const ratings = database.collection("<collName>");                                                          

    const cursor = ratings.find();

    await cursor.forEach(doc => console.dir(doc));
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
