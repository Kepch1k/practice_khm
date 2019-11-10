const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                notEmpty: true,
            },
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        isBaned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        emailConfirmed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    User.associate = function (models) {
        User.hasMany(models.RefreshToken, {foreignKey: 'userId', targetKey: 'id'});
        User.hasMany(models.Contest, {foreignKey: 'userId', targetKey: 'id'});
        User.hasMany(models.Entry, {foreignKey: 'userId', targetKey: 'id'});
    };
    return User;
};
