const dotenv = require('dotenv');
dotenv.config();
// const MongoClient = require('mongodb').MongoClient;

// // let _db;

// // const initDb = (callback) => {
// //   if (_db) {
// //     console.log('Db is already initialized!');
// //     return callback(null, _db);
// //   }
// //   MongoClient.connect(process.env.DB_URI)
// //     .then((client) => {
// //       _db = client;
// //       callback(null, _db);
// //     })
// //     .catch((err) => {
// //       callback(err);
// //     });
// // };

// // const getDb = () => {
// //   if (!_db) {
// //     throw Error('Db not initialized');
// //   }
// //   return _db;
// // };

// // module.exports = {
// //   initDb,
// //   getDb,
// // };


// // const dotenv = require('dotenv');
// // dotenv.config();
// // const MongoClient = require('mongodb').MongoClient;
// const {
//     ServerApiVersion
// } = require("mongodb");

// const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.w6nle0p.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverApi: ServerApiVersion.v1,
// });

// async function connectDB() {
//     client.connect((err) => {
//         // perform actions on the collection object
//         // const contacts = client.db(process.env.DB_NAME).collection("contacts");
//         // const database = client.db(process.env.DB_NAME);
//         // const contacts = database.collection("contacts");
//         console.log("db connected...")
//         // client.close();
//     });
//     try {
//         return await client.connect();
//         // await listDatabases(client);
//     } catch (e) {
//         console.error(e);

//     } finally {
//         await client.close();
//     }
// }

// async function listDatabases(client) {
//         databasesList = await client.db().admin().listDatabases();
//         console.log("Databases:");
//         databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
//         // const findAll = client.db(process.env.DB_NAME).collection("contacts").find()
//         // findAll.toArray().then((lists) => {
//         //     res.setHeader("Content-Type", "application/json");
//         //     res.status(200).json(lists[0]);
//         // })
//     }
//         module.exports =
//             connectDB;

const { MongoClient, ServerApiVersion } = require("mongodb");


// For memoizing the db
let db;

const initialize = async () => {
  if (db) return db;
  try {
    const client = new MongoClient(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });

    await client.connect();
    console.log("Connected successfully to DB");
    db = client.db('CSE341');

    return db;
  } catch (error) {
    console.error("Error connecting to DB", error);
  }
};

module.exports = initialize;