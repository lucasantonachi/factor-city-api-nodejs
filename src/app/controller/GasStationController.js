const GasStation = require("../model/GasStation");

class GasStationController {

    async createGasStation(req, res) {
        const data = await GasStation.create(req.body);

        return res.json(data);
    }

    async findGasStation(req, res) {
        const data = await GasStation.find({});

        return res.json(data);
    }

    async existById(id) {

        try{
            await GasStation.findById(id);
            return true;
        }catch(e){
            return false;
        }
    }
}

module.exports = new GasStationController();