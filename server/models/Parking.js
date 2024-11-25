const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
    vehicleNumber: String,
    ownerName: String,
    parkingSpot: String,
    cost: Number,
    entryTime: Date,
    exitTime: Date
});

module.exports = mongoose.model('Parking', parkingSchema);
