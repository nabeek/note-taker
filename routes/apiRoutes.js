const notesData = require("../db/db.json");

module.exports = app => {
  app.get("/api/notes", (req, res) => {
    res.json(notesData);
  });

  app.get("/api/notes/:id", (req, res) => {
    const noteID = req.params.id;
    const getNote = notesData.find(note => note.id === noteID);

    if (!getNote) {
      res.status(500).send("Note not found.");
    } else {
      res.json(getNote);
    }
  });

  app.post("/api/notes", (req, res) => {
    notesData.push(req.body);
    res.json(true);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const noteID = req.params.id;
    const getNote = notesData.find(note => note.id === noteID);
    const noteIndex = notesData.indexOf(getNote);

    notesData.splice(noteIndex, 1);
    res.json({ ok: true });
  });
};
