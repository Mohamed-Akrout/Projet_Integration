const express= require('express');
const app=express();

require ('./src/services/mongoose');

const UserRoute = require('./src/routes/UserRoute');
//Define Models
require('./src/models/index')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', UserRoute)



 module.exports = app;