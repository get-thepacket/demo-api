var router = require('express').Router();
const Model = require('./Model');

router.get('/flight-details/:status', (req,res) => {
    // console.log(req.params);
    const status = req.params.status;
    if (status == 400){
        const response = {
            "error": "Bad request"
        }
        res.status(400).json(response);
    }
    else if (status == 404){
        const response = {
            "error":"404 not found"
        }
        res.status(404).json(response);
    }
    else if(status == 200){
        const response = {
            "error" : "None",
            "items":[{
                "flight_id":"AR4658",
                "image_url":"https://miro.medium.com/max/6054/0*kp8rJzqHjagMj22J",
                "price":7000,
                "date_of_flight":"10/01/2021",
                "link":"https://www.ixigo.com"
            },{
                "flight_id":"BD4572",
                "image_url":"https://www.rd.com/wp-content/uploads/2020/01/GettyImages-1131335393-e1580493890249-scaled.jpg",
                "price":9122,
                "date_of_flight":"14/01/2021",
                "link":"https://paytm.com/flights"
            },{
                "flight_id":"BN4598",
                "image_url":"https://scx2.b-cdn.net/gfx/news/2019/toomanyairpl.jpg",
                "price":8564,
                "date_of_flight":"09/01/2021",
                "link":"https://www.makemytrip.com/flights/"
            }]
        }
        res.status(200).json(response);
    }
});

router.post('/book-flight', async (req,res) => {
    const source = req.body.source,
        destination = req.body.destination,
        phone = req.body.phone,
        date = req.body.date,
        flight_id= req.body.flight_id;

    try{
        const entry = new Model({
            source : source,
            destination: destination,
            phone: phone,
            date: date,
            flight_id: flight_id
        });
        
        const data = await entry.save(err => {
            if(err)
                console.log(err);
        });
        res.json({"status":"True"});

    }catch(err){
        res.json(err);
    }
    
});

router.get('/all-flights', async (req,res) => {
    try{
        const data = await Model.find();
        res.json(data);
    }catch(err){
        res.json(err)
    }
})

module.exports = router;
