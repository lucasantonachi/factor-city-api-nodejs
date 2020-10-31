const User = require("../model/User");

class UserController {

    async createUser(req, res) {
        const data = await User.create(req.body);

        return res.json(data);
    }

    async findUser(req, res) {
        const data = await User.find({});

        return res.json(data);
    }

    async existById(id) {

        try{
            await User.findById(id);
            return true;
        }catch(e){
            return false;
        }
    }
}

module.exports = new UserController();