const arrayToString = (trips) => {
    
    //console.log(Array.isArray(trips));
    
    const tripsArr = trips.map(el => {
        
        let output = `${el.name}; ${el.trip_type}; ${el.duration} days; ${el.cities};`;

        //access details property
        let { details = {} } = el;
        let { hotels = [], flights = [] } = details;

       // access hotels in details prop
        let hotelDetails = hotels.map((hotel) => `${hotel.name} ${hotel.category}*`).join(', ');
        output += ` ${hotelDetails}`;
  
        //access flights in details prop
        let flightDetails = flights.map((flight) => `${flight.departureCity} ${flight.departureTime}`).join(', ');
        output += ` ${flightDetails}`;

      return output;
      
    }).join('\n');

    return tripsArr;
  };

module.exports = arrayToString;