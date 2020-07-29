const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 3000;
const dataPath = "./db/db.json";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//basic routes to send user to first page or notes page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

// get path to read db and return saved notes
app.get("/api/notes", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            throw err
        }
        res.send(JSON.parse(data));
    });
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});