const data = require("./contacts.js");

const index = (_req, res) => {
  if (res.status(200)) {
    res.send(data);
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.json(data)
    
  } else {
    res.send("Server error!");
  }
};

module.exports = 
  index, data
;