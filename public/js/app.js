// console.log('Client side javascript file is loaded!!')

fetch('https://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

// fetch('http://localhost:3001/weather?address=boston').then((response) => {
//     response.json().then((body) => {
//         if(body.error){
//             console.log(body.error)
//         }
//         else{
//             console.log(body.location)
//             console.log(body.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = searchElement.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    // console.log(location)
    fetch('http://localhost:3001/weather?address=' + location).then((response) => {
        response.json().then((body) => {
            if(body.error){
                // console.log(body.error)
                messageOne.textContent = body.error
            }
            else{
                messageOne.textContent = body.location
                messageTwo.textContent = body.forecast
                // console.log(body.location)
                // console.log(body.forecast)
            }
        })
    })


})