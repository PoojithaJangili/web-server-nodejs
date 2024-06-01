const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Poojitha'
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    // else{
        // 'request' object contains 'query' property on them
        console.log(req.query.search)
        res.send({
            products: []
        })
    // }

})

// Challenge question

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide address to forecast weather!!'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location, forecast} = {}) => {
        if(error){
            return res.send({ error })
        }

        res.send({
            forecast,
            location,
            latitude,
            longitude,
            address: req.query.address
        })

    })
})


// app.get('/weather', (req, res) => {
//     if(!req.query.address) {
//         return res.send({
//             error: 'You must provide address to forecast weather!!'
//         })
//     }
//     console.log(req.query.address)

//     res.send({
//         forecast: 'It is burning',
//         location: 'Philadelphia',
//         address: req.query.address
//     })
// })

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})