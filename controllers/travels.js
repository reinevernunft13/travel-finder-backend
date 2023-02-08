const  TravelPackage  = require('../models/TravelPackage.js');
const formatToString = require('../utils/formatToString')

const getTravels = async (req, res) => {

    let cityName = req.body.city_name;
    
    //validations
    cityName = cityName.trim();
    
    if(!cityName || cityName === null || cityName === '') {
        return res.status(400).json({ 
            status: 'error',
            error: 'Bad Request - No input provided'
            })
    }
    if(cityName.length < 3) {
        return res.status(400).json({ 
            status: 'error',
            error: 'Please, enter at least 3 letters'
         })

    }
        
    const city = cityName.toLowerCase();
    
    try {
    let trips = await TravelPackage.find({ cities: { $regex: new RegExp(city, 'i')}}).select('-__v');

    if(!trips || trips.length === 0) {
        return res.status(400).json({
            status: 'error',
            error: 'Sorry, no travel packages were found'
        })
    } else {
        let result = formatToString(trips);
        console.log('response formatted: ' + result);
        return res.status(200).json(result);
    }

    } catch(err) {
        return res.status(500).json({
            status: 'error',
            error: err.message
        })
    }
    
}

module.exports =  getTravels;