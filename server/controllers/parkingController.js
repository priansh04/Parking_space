const Parking = require('../models/Parking');

exports.addParking = async (req, res) => {
    try {
        const { vehicleNumber, ownerName, parkingSpot, entryTime } = req.body;
        const parking = new Parking({ vehicleNumber, ownerName, parkingSpot, entryTime, cost: 0 });
        await parking.save();
        res.status(201).json({ message: 'Parking record added', parking });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.calculateCost = async (req, res) => {
    try {
        const { id, exitTime } = req.body;
        const parking = await Parking.findById(id);
        if (!parking) return res.status(404).json({ message: 'Record not found' });

        parking.exitTime = exitTime;
        const duration = (new Date(exitTime) - new Date(parking.entryTime)) / (1000 * 60); // in minutes
        parking.cost = duration * 2; // Assume 2 units per minute
        await parking.save();
        res.status(200).json({ message: 'Cost calculated', parking });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
