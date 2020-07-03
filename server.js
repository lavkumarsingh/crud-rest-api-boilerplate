
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();
require('dotenv/config');

 
// IMPORT ROUTES
const postRoute = require('./router/posts');

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/posts', postRoute)

  
// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB Connected! :)');
    
});

app.listen(port, () => {
    console.log('Server running on port 3000');
});