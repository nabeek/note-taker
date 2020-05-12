// Load data
const notesData = require("../db/db.json");

// Routing
module.exports = app => {
  app.get("/api/notes", (req, res) => {
    res.json(notesData);
  });

  // Enables navigating to individual notes as JSON objects
  app.get("/api/notes/:id", (req, res) => {
    const noteID = req.params.id;
    const getNote = notesData.find(note => note.id === noteID);

    if (!getNote) {
      res.status(500).send("Note not found.");
    } else {
      res.json(getNote);
    }
  });

  // Pushes a new note to the db array
  app.post("/api/notes", (req, res) => {
    notesData.push(req.body);
    res.json(true);
  });

  // Matches the note object to an existing object in the db array and removes (deletes) it
  app.delete("/api/notes/:id", (req, res) => {
    const noteID = req.params.id;
    const getNote = notesData.find(note => note.id === noteID);
    const noteIndex = notesData.indexOf(getNote);

    notesData.splice(noteIndex, 1);
    res.json({ ok: true });
  });
};
