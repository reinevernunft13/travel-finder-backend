const formatToString = (trips) => {

    let result = trips.map(el => {
        
        let formattedResponse = `${el.name}; ${el.trip_type}; ${el.duration} days; ${el.cities}; ${el.details}`;
        return formattedResponse;

        /*let formattedResponse = `${el.name}; ${el.trip_type}; ${el.duration} days; ${el.cities}; `;
        if(el.details === 'land trip') {
            let res = `${el.details.hotels}`
        }
        let fullres = formattedResponse + 
        return formattedResponse*/
    })
    
    //console.log('respuesta formateada en utils ' + result);
    return result.join('\n');
}

module.exports = formatToString;