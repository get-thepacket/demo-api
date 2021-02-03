const express = require('express');
const app = express();
const flight = require('./router');
const route = require('./route');
const mongoose = require('mongoose');
require('dotenv/config');
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true , useUnifiedTopology: true }, () => console.log(`database online!`));

app.use(express.json());
app.use('/',flight);
app.use('/api', route);

app.get('/welcome',(req,res) => {
    res.send('Hello World!');
});


app.listen(PORT, () => console.log(`listening on port ${PORT}`));