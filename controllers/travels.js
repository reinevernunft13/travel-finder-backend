const  TravelPackage  = require('../models/TravelPackage.js');
const arrayToString = require('../utils/formatToString')

const getTravels = async (req, res) => {

    let cityName = req.body.city_name;
    
    //format input
    cityName = cityName.trim();
    //input is not empty 
    if(!cityName || cityName === null || cityName === '') {
        return res.status(400).json({ 
            status: 'error',
            error: 'Bad Request - No input provided'
            });
    }
    //input is at least three-letter long
    if(cityName.length < 3) {
        return res.status(400).json({ 
            status: 'error',
            error: 'Bad Request - Please, enter at least 3 letters'
         });
    }
        
    const city = cityName.toLowerCase();
    
    try {
        //'i' for parameter case insensitive
        const trips = await TravelPackage.find({ cities: { $regex: new RegExp(city, 'i')}}).select('-__v');
        if(!trips || trips.length === 0) {
            return res.status(400).json({
                status: 'error',
                error: 'Sorry, no travel packages were found'
            });
        } else {
           
            let result = arrayToString(trips);
            return res.status(200).send(result);
        }
    } catch(err) {
        return res.status(500).json({
            status: 'error',
            error: err.message
        });
    }
    
};

module.exports =  getTravels;