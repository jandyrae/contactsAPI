const express = require("express");
const config = require("./config/index");
const bodyParser = require('body-parser');
const app = express();
const {
  routes
} = require("./routes/index");
const port = config.PORT || 8080;
const connectDB = require('./model/connect')
// const {
//     getOne,
//     getAll
// } = require("./controllers/contacts")
// const { allData } = require("./routes/contacts");

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('Time: ', Date.now())
    next();
  })
  .use('/', require('./routes'));
// app.use(bodyParser.json())
//     app.use("/", (req, res, next) => {
//         res.setHeader("Access-Control-Allow-Origin", "*");
//         res.json(allData)
//         res.status(200)
//         next();
//     }).use('/', require('./routes/index'));

// const {
//   mongodb,
//   initDb
// } = require("./model/connect");

// const {
//     jsonRes
// } = require("./middleware/jsonRes");
// const { data } = require("./controllers");


app.route("/", routes);

app.listen(port, () => {
  console.log(`Application listening on http://localhost:8080/contacts  or ${port}`);
});

connectDB().catch(console.error);

