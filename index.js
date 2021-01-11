const express = require('express');
const app = express();
const flight = require('./router');
const mongoose = require('mongoose');
require('dotenv/config');
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => console.log(`database online!`));

app.use(express.json());
app.use('/',flight);

app.get('/welcome',(req,res) => {
    res.send('Hello World!');
});


app.listen(PORT, () => console.log(`listening on port ${PORT}`));