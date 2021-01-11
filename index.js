const express = require('express');
const app = express();
const flight = require('./route');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/',flight);

app.get('/welcome',(req,res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));