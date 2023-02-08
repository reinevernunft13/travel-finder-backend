/*const formatToString = (trips) => {

    let result = trips.map(el => {
        
        let formattedResponse = `${el.name}; ${el.trip_type}; ${el.duration} days; ${el.cities}; ${el.details}`;
        return formattedResponse;

        /*let formattedResponse = `${el.name}; ${el.trip_type}; ${el.duration} days; ${el.cities}; `;
        if(el.details === 'land trip') {
            let res = `${el.details.hotels}`
        }
        let fullres = formattedResponse + 
        return formattedResponse
    })
    
    //console.log('respuesta formateada en utils ' + result);
    return result.join('\n');
}

module.exports = formatToString;*/

/*
const formatResponse = (tripsResponse) => {
    return tripsResponse.map((response) => {
      let formattedResponse = `${response.name}; ${response.type}; ${response.duration} days;`;
      let { details = {} } = response;
      let { land = [], air = [] } = details;
  
      // handle cities
      if (Array.isArray(response.cities)) {
        formattedResponse += ` ${response.cities.join(', ')};`;
      }
  
      // handle land details
      if (Array.isArray(land)) {
        let hotelInfo = land.map((hotel) => `${hotel.name} ${hotel.category}*`).join(', ');
        formattedResponse += ` ${hotelInfo}`;
      }
  
      // handle air details
      if (Array.isArray(air)) {
        let flightInfo = air.map((flight) => `${flight.departureCity} ${flight.departureTime}`).join(', ');
        formattedResponse += ` ${flightInfo}`;
      }
  
      return formattedResponse;
      
    }).join('\n');
  };

*/
/*
const formatToString = (trips) => {
    
        return trips.map(el => {
        
            let formattedResponse = `${el.name}; ${el.trip_type}; ${el.duration} days; ${el.cities};`;
            let { details = {} } = el;
            let { hotels = [], flights = [] } = details;

            // handle cities
      if (Array.isArray(el.cities)) {
        formattedResponse += ` ${el.cities.join(', ')};`;
      }
       // handle hotels details
       if (Array.isArray(hotels)) {
        let hotelInfo = hotels.map((hotel) => `${hotel.name} ${hotel.category}*`).join(', ');
        formattedResponse += ` ${hotelInfo}`;
      }
  
      // handle air details
      if (Array.isArray(flights)) {
        let flightInfo = flights.map((flight) => `${flight.departureCity} ${flight.departureTime}`).join(', ');
        formattedResponse += ` ${flightInfo}`;
      }

      return formattedResponse;
      
    }).join('\n');
  };

module.exports = formatToString;*/


const formatToString = (trips) => {
    
        const tripsArr = trips.map(el => {
        
            let output = `${el.name}; ${el.trip_type}; ${el.duration} days; ${el.cities};`;
            let { details = {} } = el;
            let { hotels = [], flights = [] } = details;

       // handle hotels details
       if(Array.isArray(hotels)) {
        let hotelDetails = hotels.map((hotel) => `${hotel.name} ${hotel.category}*`).join(', ');
        output += ` ${hotelDetails}`;
      }
  
      // handle air details
      if(Array.isArray(flights)) {
        let flightDetails = flights.map((flight) => `${flight.departureCity} ${flight.departureTime}`).join(', ');
        output += ` ${flightDetails}`;
      }

      return output;
      
    }).join('\n');

    return tripsArr;
  };

module.exports = formatToString;