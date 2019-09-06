const express = require("express");
const app = express();
const massive = require('massive');
require("dotenv").config();

app.use(express.json());

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
    console.log("Database is connected")
})


// app.post()









app.listen(3000, () => {
    console.log("the port is listening on 3000!")
})