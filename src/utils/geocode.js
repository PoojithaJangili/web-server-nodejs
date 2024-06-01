const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=ab677e734cd443d2a52121725240805&q=' + encodeURIComponent(address) + '&aqi=yes'

    // request({ url: url, json: true}, (error, response) => {
//        if(error){
//         callback('Unable to connect to location services!', undefined)
//        } else if(response.body.error){
//         callback('Unable to find location. Try another search', undefined)
//        } else {
//         callback(undefined, {
//             latitude: response.body.location.lat,
//             longitude: response.body.location.lon,
//             location: response.body.location.name
//         })
//        }
//     })
// }

//Using destructuring property
    request({ url, json: true}, (error, {body}) => {
       if(error){
        callback('Unable to connect to location services!', undefined)
       } else if(body.error){
        callback('Unable to find location. Try another search', undefined)
       } else {
        callback(undefined, {
            latitude: body.location.lat,
            longitude: body.location.lon,
            location: body.location.name,
            forecast: body.current.condition.text
        })
       }
    })
}

module.exports = geocode