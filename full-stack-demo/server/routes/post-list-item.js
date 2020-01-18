const { List } = require('../config/sequelize');

module.exports = (app) => {
    app.post('/list',
        function(req, res) {
            if (req.body.value !== undefined){
                List.create({
                    value: req.body.value
                }).then(datapoints => {
                    res.json(datapoints);
                });
            } else {
                res.status(400).send("API Error");
            }
        }
    );
};