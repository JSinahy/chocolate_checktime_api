const registerTimeService = require("../services/CheckTimeService");

const registerTimeController = (req, res) => {

    const username  = req.body.username;
    const nip      = req.body.nip;
    const direction = req.body.direction;


    /*if (!username || !nip || !direction) {
        res.status(200).send(
            {
                status: 400,
                message: "Parameters '" + username + "', '" + nip + "' or '" + direction + "' can not be empty" ,
            }
        );
    }*/

    const userObject = {
        "username": username,
        "nip": nip,
        "direction": direction
    }

    registerTimeService.registerTimeService(userObject, (results) => {
        try {
            res.status(200).send({ status: results.status, message: results.message });
        } catch (error) {
            res.status(400).send({
                code: 400,
                data: null,
                message: "An error has ocurred!: " + error,
            });
        }
    });
};

module.exports = { registerTimeController };