module.exports = (sequelize, type, user) => sequelize.define('list', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    value: {
        type: type.STRING,
        allowNull: false,
    },
    createdAt: type.DATE,
    updatedAt: type.DATE,
});