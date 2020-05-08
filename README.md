# Note Taker - An Express Application

This application lets users write, save, recall, and delete simple text-based notes.

## Motivation

This application continues to build on our Node foundation, using an Express backend and saving and retrieving note data from a JSON file. The assignment also presents our first opportunity to utilize Heroku for deploying an application that serves static files and stores data.

## Installation and Usage

The deployed application can be found at: [Note Taker](https://nabeek-note-taker.herokuapp.com/)

If interested in running the app locally or deploying your own version, clone or fork the repo from [GitHub](https://github.com/nabeek/note-taker). For local versions run `npm install` and then start the server with `node server.js`. Navigate to http://localhost:8080/ or the port of your choosing if editing the server.js file.

## Screenshot

![Note Taker gif](https://user-images.githubusercontent.com/4752937/81430991-a49c3080-911d-11ea-8c78-fb81634e39f8.gif)

## Tech Used

[Bootswatch](https://bootswatch.com/)\
[Node](https://nodejs.org/en/)\
[Express](https://expressjs.com/)

## Code Example

The homework readme indicated that the `fs` module should be utilized for deleting notes, the logic of which I assume is something like: read the db.json file, match the note to delete with a note that currently exists, and then write the file (writing-over) without the note to be deleted.

That being said, as I was thinking through the above process I thought since the notes are just objects within an array, why not just identify the object to be deleted and splice it out?

```js
app.delete("/api/notes/:id", (req, res) => {
  const noteID = req.params.id;
  const getNote = notesData.find(note => note.id === noteID);
  const noteIndex = notesData.indexOf(getNote);

  notesData.splice(noteIndex, 1);
  res.json({ ok: true });
});
```

This is possible because the provided event listeners complete an ajax call to the "database" whenever a note is saved _or_ deleted.

```js
var getAndRenderNotes = function () {
  return getNotes().then(function (data) {
    renderNoteList(data);
  });
};

var getNotes = function () {
  return $.ajax({
    url: "/api/notes",
    method: "GET",
  });
};
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Roadmap

Editing notes is a logical progression for the application.

## License

MIT © [nabeek](https://github.com/nabeek)
