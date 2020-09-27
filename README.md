# notetaker
This is a note taker app to save those simple notes you need to remember. The notes are stored in a json object. The server uses express to create the api paths to save new notes, return saved notes, and delete notes. Each newly created note receives an id. The delete path passes an id parameter and findIndex locates the matching note on the JSON array and splices it. The read, post, and delete paths use fs readFile and writeFile to write to the JSON database, using parse and stringify to access the notes between these operations.

Check it out at https://rocky-crag-02131.herokuapp.com/

![screenshot](https://github.com/paulsloderbeck/notetaker/blob/master/screenshot.png)
