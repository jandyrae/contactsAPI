const express = require('express');
const router = express.Router();


// router.use('/contacts', require('./contacts'))
const index = (_req, res) => {
    if (res.status(200)) {
        res.setHeader("Access-Control-Allow-Origin", "*")
        // res.json(data);
        res.json({
                "contact1": {
                    "firstName": "Trevor",
                    "lastName": "Kiger",
                    "email": "trevorkiger@gmail.com",
                    "favColor": "red",
                    "birthDay": "05/05/2005"
                }
            })
        }
    }
    router.use('/contacts', index)

module.exports = router;