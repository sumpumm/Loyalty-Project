const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    business:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'business',
        required: true,
    },
    stampCount: { type: Number, default: 0, min: 0 },
    totalStamps: { type: Number, default: 0 },
    joinedAt: { type: Date, default: Date.now },
},
{ timestamps: true });

const WALLET = mongoose.model('wallet',walletSchema);

module.exports = WALLET;