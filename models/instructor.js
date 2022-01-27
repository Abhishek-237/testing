const { DataTypes, Model} = require("sequelize");
// const sequelize = require("../database.js");

module.exports = (sequelize, DataTypes) => {
    
    class Instructor extends Model{}

    Instructor.init({
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        mobile : {
            type : DataTypes.INTEGER,
            allowNull : false,
            unique : true
        },
        passwordHash : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },
    {
        sequelize,
        modelName : "Instructor"
    }
    );

    return Instructor;
}