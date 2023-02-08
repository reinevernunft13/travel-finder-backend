const { config } = require('dotenv');
config();
const express = require('express');
const app = express()

const initDB = require('./db/config.js');
const seedData = require('./utils/seedData')

// Connects to database
initDB();
// Mock data seeding
seedData();

//Import route
const travel_routes = require('./routes/travels');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', travel_routes);


// invalid route handling
//app.use((req, res) => res.status(404).json({ status: "error", error: "PAGE NOT FOUND"}));

app.listen(process.env.API_PORT, () => {
    console.log(`server running on port ${process.env.API_PORT}`)
});