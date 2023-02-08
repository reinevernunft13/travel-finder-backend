const mongoose = require('mongoose');
const TravelPackage  = require('../models/TravelPackage.js');

const testData = [
  {
  name: "Europe Popular Capitals",
  trip_type: 'land trip',
  duration: 3,
  cities: ['Madrid', 'Paris', 'London'],
  details: {
    hotels: [{
        name: 'Hotel Best Madrid',
        category: '3'
    },
    {
        name: 'Hotel Worst Paris',
        category: '4'
    }]
  }
  },
  {
    name: "Europe Whatever",
    trip_type: 'land trip',
    duration: 3,
    cities: ['Madrid', 'Paris', 'London'],
    details: {
      hotels: [{
          name: 'Hotel Best Madrid',
          category: '3'
      },
      {
          name: 'Hotel Worst Berlin',
          category: '4'
      }]
    }
  }
];

const seedData = async () => {

  try {

    await TravelPackage.deleteMany({});
    await TravelPackage.insertMany(testData);

} catch (err) {
  console.error(err);
}
console.log("Mock data just seeded from seed script.");

}


module.exports = seedData
  
