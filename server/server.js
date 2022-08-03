const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
    // logic here
    res.status(200).send('Welcome message')
})

app.get('/houses', (req, res) => {
    // logic here when there is at least one house in the database
    res.status(200).send('All houses with house ID, ')
    // logic if database empty
    res.status(404).send('No houses in database')
})

app.get('/houses/:id', (req, res) => {
    // logic here when house exist
    res.status(200).send('One house with address and owner, ')
    // logic if house does not exist
    res.status(404).send('No house with this ID in database')
})

app.get('/people', (req, res) => {
    // logic here when people exist
    res.status(200).send('People\'s name in the neighbourhood')
    // logic if house does not exist
    res.status(404).send('No neighbour at all')
})

app.get('/people/:ageFrom/:ageTo', (req, res) => {
    // logic here 
    res.status(200).send('People\'s name within range')
    // logic here
    res.status(404).send('No neighbour within range')
})

app.get('/people/:hHoldFrom/:hHoldTo', (req, res) => {
    // logic here 
    res.status(200).send('People\'s houses only household ')
    // logic here
    res.status(404).send('No neighbour within range')
})

app.post('/people', (req, res) => {
    // logic here 
    res.status(201).send('append the new person to people.csv')
    // logic here
    res.status(400).send('If input data is wrong')
    res.status(500).send('If server failed to append')
})

app.post('/houses', (req, res) => {
    // logic here 
    res.status(201).send('append the new house to houses.csv, append address info to address.csv')
    // logic here
    res.status(400).send('If input data is wrong')
    res.status(500).send('If server failed to append')
})



module.exports = app
