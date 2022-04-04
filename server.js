//server.js starts an express server 
//mongoose is used to establish connectino with MongoDB Atlas

const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes');

const app = express();

app.use(express.json());

const username = "user1";
const password = "iZhdSR8mNgjBzch2";
const cluster = "cluster0.bouzi";
const dbname = "myFirstDatabase";

//Create a connection to MongoDB Atas
mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//Check that connection was successful
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
    console.log("Connected successfully!");
});

//Set the app to listen to port 3000
app.use(Router);

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
