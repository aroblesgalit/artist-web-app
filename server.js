const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const session = require("express-session");
const passport = require("./config/passport");
const path = require("path");
const PORT = process.env.PORT || 3001;

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Use sessions to keep track of user's login status
app.use(session({ secret: "johndoe", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Add routes
app.use(routes);

// Serving static files
app.get("*", (req, res) => {
    let url = path.join(__dirname, '../client/build', 'index.html');
    if (!url.startsWith('/app/')) // since we're on local windows
      url = url.substring(1);
    res.sendFile(url);
  });

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/johndoe", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});