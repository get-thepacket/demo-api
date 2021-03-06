const mongoose = require('mongoose');
var schema = mongoose.Schema;

const model = schema({
    flight_id:{
        type:String,
        validate:{
            validator: function(v){
                return /[A-Z]{2}\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid flight_id`
        },
        required: [true, 'flight_id required']
    },
    source: String,
    destination: String,
    phone: {
        type: String,
        validate:{
            validator: function(v){
                return /\d{10}/.test(v);
            },
            message: props=> `${props.value} is not a valid number`
        }
    },
    date: { 
        type:String,
        validate:{
            validator: function(v){
                return /\d{2}\/\d{2}\/\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid date of flight`
        },
        required: [true, 'flight date required']
    }
});

module.exports = mongoose.model('model', model);