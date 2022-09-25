const express = require('express');
const router = express.Router();
// const jsonRes = require("../middleware/jsonRes.js");
// const openCors = require("../middleware/opencors.js");
// const { getAll, getOne } = require("../controllers/contacts.js");
// const { index } = require("../controllers/index");

// const allData = (show) => {
//     show.use([jsonRes, openCors]);
//     show.use("/contacts", getAll);
//     return show;
// };
// show.use("/professional", index);
// router.use("/professional", (req, res) => {
//     res.json(display)
// })


const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/one', contactsController.getOne);

module.exports = router;