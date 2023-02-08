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

// Import routes
const travel_routes = require('./routes/travels');

// Global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', travel_routes);

// invalid route handling
app.use((req, res) => res.status(404).json({ status: "error", error: "Not Found"}));

// starts server
app.listen(process.env.API_PORT, () => {
    console.log(`server running on port ${process.env.API_PORT}`)
});