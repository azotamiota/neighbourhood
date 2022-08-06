const express = require('express');
const app = express();
const cors = require('cors');

const indexRoute = require('./routes/index')
const peopleRoutes = require('./routes/peopleRoutes')
const housesRoutes = require('./routes/housesRoutes')

app.use('/', indexRoute)
app.use('/people', peopleRoutes)
app.use('/houses', housesRoutes)

app.use(cors());
app.use(express.json())

module.exports = app


