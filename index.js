const express = require('express');
const userRoute = require('./Route/user');
const app = express();
require('dotenv').config()
app.use(express.json())

app.use('/api',userRoute)
app.listen(8080)