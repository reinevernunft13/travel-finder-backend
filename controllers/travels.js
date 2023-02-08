const  TravelPackage  = require('../models/TravelPackage.js');
const formatToString = require('../utils/formatToString')

const getTravels = async (req, res) => {

    let cityName = req.body.city_name;
    
    //validations
    cityName = cityName.trim();
    
    if(!cityName || cityName === null || cityName.length < 3) {
                res.status(400).json({ 
                    status: 'error',
                    error: 'invalid input. Please, enter at least 3 letters'
                 })
            } 
        
    const city = cityName.toLowerCase();
    //console.log('this is lowercase ' + city);
    
    try {

    /*let data = await TravelPackage.find({ cities: { $regex: new RegExp(city, 'i')}}).select('-__v');
    let trips = JSON.stringify(data);
    console.log('json string: ', trips);*/
    let trips = await TravelPackage.find({ cities: { $regex: new RegExp(city, 'i')}}).select('-__v');
    //let trips = await TravelPackage.find();

    //console.log('logging all trips that match the regex: ', trips);
    //console.log('type of trips =>', typeof trips);

    if(!trips || trips.length === 0) {
        return res.status(400).json({
            status: 'error',
            error: 'Sorry, no travel packages were found'
        })
    } else {
        let formattedTrips = formatToString(trips);
        console.log('response formatted: ' + formattedTrips);
        return res.status(200).json(formattedTrips);
    }

    } catch(err) {
        res.status(500).json({
            status: 'error',
            error: err.message
        })
    }
    
}

module.exports =  getTravels;