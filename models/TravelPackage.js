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
// Pre-save hook (document middleware)
TravelPackageSchema.pre('save', next => {
    //'this' refers to the document; i.e. the particular instance of the Model class that is about to be saved
    const travelpackage = this;

    if(travelpackage.trip_type === 'Land Trip') {
        travelpackage.details = { hotels: travelpackage.details }
    } else if (travelpackage.trip_type === 'Air Trip') {
        travelpackage.details = { flights: travelpackage.details }
    }

    next();
})

const TravelPackage = mongoose.model('TravelPackage', TravelPackageSchema);

module.exports = TravelPackage;