require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Conectando ao banco de dados MongoDB
mongoose.connect('mongodb+srv://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PASSWORD + '@' + process.env.MONGODB_CLUSTER + '.mongodb.net/', {
    retryWrites: true,
    w: 'majority',
    appName: process.env.MONGODB_APPNAME
});


app.use('/api', foodRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
