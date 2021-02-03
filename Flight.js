const mongoose = require('mongoose');
var schema = mongoose.Schema;

const flightSchema = schema({
    flight_id: {
        type:String,
        validate:{
            validator: function(v){
                return /[A-Z]{2}\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid flight_id`
        },
        required: [true, 'flight_id required']
    },
    image_url : String,
    price: Number,
    date_of_flight:{
        type:String,
        validate:{
            validator: function(v){
                return /\d{2}\/\d{2}\/\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid date of flight`
        },
        required: [true, 'flight date required']
    },
    link: String
});

module.exports = mongoose.model('flight', flightSchema);