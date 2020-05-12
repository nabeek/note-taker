// Dependencies
const express = require("express");

// Express configuration
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware - sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves static content
app.use(express.static("public"));

// Router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
