const express = require('express')

// Storing 'express' application
const app = express()

// rendering 'HTML' on web page
app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

//  rendering 'JSON' by passing some object/array
app.get('/help', (req, res) => {
    res.send([{
        name: 'Poo',
        age: 99
    }, {
        name: 'boo',
        age: 66
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>This is the about page!</h1>')
})

app.get('/weather', (req, res) => {
    res.send([{
        forecast: {temp: '50 Celsius'}
    },{
        location: 'Kharagpur'
    }])
})

// Starting the 'app' on server using 'listen'
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})



// Routes...
//app.com
//app.com/help
// app.com/about

// app.get('', (req, res) =>{
//     res.send('Hello Express!')
// })

// app.get('/help', (req, res) => {
//     res.send('Help Page!!')
// })

// // Challenge

// app.get('/about', (req, res) => {
//     res.send('This is the about page!')
// })

// app.get('/weather', (req, res) => {
//     res.send('View Weather')
// })