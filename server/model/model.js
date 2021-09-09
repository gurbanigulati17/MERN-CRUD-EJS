const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Date : {
        type : String,
        required: true
    },
    DeliveredBottles : {
        type: Number,
        required: true,
    },
   EmptyReceive : {
    type: Number,
    required: true,
    
   },
   BalanceBottles : {
    type: Number,
    required: true,
    
   },
   Payment : {
    type: Number,
    required: true,
   },
   PaymentBalance : {
    type: Number,
    required: true,
    
   },
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;