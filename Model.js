const mongoose = require('mongoose');
var schema = mongoose.Schema;

const model = schema({
    items: {
        source: String,
        destination: String,
        phone: String,
        date: String
    }
});

module.exports = mongoose.model('Model', model);