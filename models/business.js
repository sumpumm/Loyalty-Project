const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    businessName:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
      type: String,
      required: true, 
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
},{
    timestamps:true
});

const BUSINESS = mongoose.model('business',businessSchema);

module.exports = BUSINESS;