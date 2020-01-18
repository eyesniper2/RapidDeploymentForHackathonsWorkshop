const { List } = require('../config/sequelize');

module.exports = (app) => {
    app.get('/list',
        function(req, res) {
            List.findAll().then(datapoints => {
                res.json(datapoints);
            });
        }
    );
};