const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const sql = require("mysql2");

const app = express();

// this two are middleware
app.use(cors());
app.use(body_parser.json());

// connect to mysql server
const config = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "infi info",
  database: "room_data",
});

// this for checking if it was connect
config.connect(() => {
  console.log(`connected`);
});

// this is only for getting responec data from database not for posting
app.get("/chats", (req, res) => {
  let select = "select * from admin";
  config.query(select, (err, result) => {
    console.log(`there was no err ${err}`);
    res.json(result);
  });
});

// this code for posting item. come from front end and send to DB
app.post("/chats", (req, res) => {
  const { adminName, adminAge, adminSex } = req.body;
  const values = [adminName, adminAge, adminSex];
  const inserting = `insert
   into admin(adminName, adminAge, adminSex) values (?,?,?)`;
  config.query(inserting, values, (err, result) => {
      // if result come. send to frint end in json
    res.json(result);
  });
});

// this app.lieten for setting port number
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`opening in port number ${PORT}`);
});
