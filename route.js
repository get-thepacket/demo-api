var router = require('express').Router();
const Flight = require('./Flight');

router.post('/flight', async (req,res) => {
    
    const {flight_id, date_of_flight, image_url, link, price} = req.body;
    
    try{
        const flight = new Flight({
            flight_id: flight_id,
            date_of_flight: date_of_flight,
            image_url: image_url,
            link: link,
            price: price
        });
        
        const data = await flight.save((err) => {
            if(err)
                console.log(err);
        });

        res.json(data);
    }catch(err){
        res.status(403).json({"error":"Bad request"});
    }   
});

router.get('/flight', async(req,res) => {
    try{
        const data = await Flight.find();
        res.json(data);
    }
    catch(err){
        res.status(403).json({"error":"Bad request"});
    }
})

module.exports = router;