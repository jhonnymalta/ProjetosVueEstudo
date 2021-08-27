const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose")


app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/agendaclinica", { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req, res) => {
    res.send("Hello Third");
})

app.listen("8080", () => {
    console.log("App Rodando!")
})