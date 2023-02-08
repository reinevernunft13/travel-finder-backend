const mongoose = require('mongoose');
const TravelPackage  = require('../models/TravelPackage.js');

const testData = [{

  name: "Europe Popular Capitals",
  trip_type: 'Land Trip',
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
    trip_type: 'Land Trip',
    duration: 3,
    cities: ['Berlin', 'Madrid'],
    details: {
      hotels: [{
          name: 'Hotel Best Madrid',
          category: 3
      },
      {
          name: 'Hotel Worst Berlin',
          category: 4
      }]
    }
  }, 
  {
    name: 'Infinite Egypt',
    trip_type: 'Air Trip',
    duration: 4,
    cities: ['Madrid', 'القاهرة', 'الأقصر'],
    details: {
        flights: [
            { departureCity: 'Madrid', departureTime: '09:00' },
            { departureCity: 'الأقصر', departureTime: '10:00' },
        ],
    },
  },
  {
    name: 'Incredible China',
    trip_type: 'Air Trip',
    duration: 10,
    cities: ['Barcelona', 'Madrid', '广州市', '北京市'],
    details: {
        flights: [
            { departureCity: 'Madrid', departureTime: '09:00' },
            { departureCity: '北京市', departureTime: '10:00' },
        ]
    },
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
  
