const express = require("express");
const path = require ("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serving static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}

// API routes

app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
});