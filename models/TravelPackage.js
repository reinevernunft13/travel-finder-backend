const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accomodationSchema = new Schema({
    name: String,
    category: Number
})

const flightSchema = new Schema({
    departureCity: String,
    departureTime: String
})

const TravelPackageSchema = new Schema({
    name: String,
    trip_type: { 
        type: String,
        enum: ['Land Trip', 'Air Trip'],
        required: true
    },
    duration: Number,
    cities: [ String ],
    details: {
        hotels: [accomodationSchema],
        flights: [flightSchema]
    },
})

TravelPackageSchema.pre('save', (next) => {
    const travelpackage = this;

    if(travelpackage.trip_type === 'land trip') {
        travelpackage.details = { hotels: travelpackage.details }
    } else if (travelpackage.trip_type === 'air trip') {
        travelpackage.details = { flights: travelpackage.details }
    }

    next();
})

const TravelPackage = mongoose.model('TravelPackage', TravelPackageSchema);

module.exports = TravelPackage;