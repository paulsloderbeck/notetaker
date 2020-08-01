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

//post path to receive new note 
app.post("/api/notes", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            throw err
        }
        let notesArray = JSON.parse(data);
        const newId = Object.keys(notesArray).length + 1;
        let newNote = req.body;
        newNote.id = newId;
        notesArray.push(newNote);
        //add unique ID to note
        let newArray = JSON.stringify(notesArray);
        fs.writeFile(dataPath, newArray, "utf8", (err) => {
            if (err) {
                throw err;
            } res.status(200).send("new note added: " + JSON.stringify(newNote));
        })
    })
})

// path to delete note with specific id
app.delete("/api/notes/:id", (req, res) => {
    //use data.find to get array index with id
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});