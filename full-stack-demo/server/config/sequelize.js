const Sequelize = require('sequelize');
const ListModel = require('../models/list');

var env = process.env.NODE_ENV || 'dev';

// https://stackoverflow.com/questions/27687546/cant-connect-to-heroku-postgresql-database-from-local-node-app-with-sequelize
const sequelize = (() => {
    if (env == 'dev')
        return new Sequelize('sqlite:dev.db')
    else
        return new Sequelize(process.env.DATABASE_URL, {
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
                ssl: true
            }
        });
})();

const List = ListModel(sequelize, Sequelize);

sequelize.sync().then(() => {
    console.log('Tables updated');
});

module.exports = {
    List: List
};
