const mongoose = require("mongoose")
const express = require("express");
const path = require ("path");
const apiRoutes = require('./routes/api-routes')
const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cryptouniversity")

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serving static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}

// API routes
app.use(apiRoutes)

app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
});