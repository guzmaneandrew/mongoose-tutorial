//routes.js defines the endpoints for our app

const express = require('express');
const userModel = require('./models');
const app = express();

//POST endpoint
//Create route /add_user to add new user to the db
app.post("/add_user", async (request, response) => {
    //Parse content to be saved to dbs
    const user = new userModel(request.body);

    //try/catch block to save the object to the db using .save() method
    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

//GET endpoint
//Create route /users to retrieve all the users saved using the /add_user route
app.get("/users", async (request, response) => {
    //Collect the users from the db using the .find() method
    const users = await userModel.find({});

    //try/catch block  to "send" the users to this endpoint
    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

//Export the endpoints
module.exports = app;