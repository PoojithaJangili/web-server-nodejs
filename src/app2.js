const path = require('path')
const express = require('express');
// const { title } = require('process');
const hbs = require('hbs');
const { title } = require('process');

// console.log(__dirname)
// // console.log(__filename)
// console.log(path.join(__dirname, '../public'))
 
const app = express()

// Define paths for Express configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Serving up the static directory
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Poojitha'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Pooji'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is the help page..',
        title: 'Help', 
        name: 'Pojo'
    })
})

// app.get('/help/*', (req, res) => {
//     res.send('Help article not found!')
// })

// // for "wrong" incoming routes which doesn't match, it shoul be in the last after all routes declared
// // "WILDCARD character"
// app.get('*', (req, res) => {
//     res.send('My 404 page')
// })

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help 404 page',
        message: 'Help article not found',
        name: 'pooju'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 page',
        message: 'Page not found',
        name: 'poo'
    })
})

// app.use(express.static(publicDirectoryPathAbout))

app.listen(3001, () => {
    console.log('Server is running on the port 3001.')
})