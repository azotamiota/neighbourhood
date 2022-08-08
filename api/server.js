const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors());

const indexRoute = require('./routes/index')
const peopleRoutes = require('./routes/peopleRoutes')
const housesRoutes = require('./routes/housesRoutes')

app.use('/', indexRoute)
app.use('/people', peopleRoutes)
app.use('/houses', housesRoutes)


module.exports = app


