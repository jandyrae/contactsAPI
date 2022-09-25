
const mongodb = require('../model/connect');
const ObjectId = require('mongodb').ObjectId;

const getOne = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    // const database = client.db(process.env.DB_NAME);
    const contacts = database.collection("contacts");
    const result = await mongodb
        .getDb()
        .db(process.env.DB_NAME)
        .collection(contacts)
        .find();
        console.log(result);
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);

    });
};

const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db(process.env.DB_NAME).collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

module.exports = {
    getOne,
    getAll
}