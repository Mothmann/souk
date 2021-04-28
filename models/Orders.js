'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Orders extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `modelss/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Category.init({
        ID: {
            type: sequelize.UUID,
            defaultValue: sequelize.UUIDV4
        },
        ProductID: {
            type: sequelize.INTEGER,
            references: {
                model: products,
                key: 'id',
            }
        },
        userID: {
            type: sequelize.INTEGER,
            references: {
                model: user,
                key: 'id',
            }
        },
        Shipping_Address: {
            type: sequelize.STRING,
        },
        Shipping_Date: {
            type: sequelize.DATEONLY
        },
        sequelize,
        modelName: 'Orders',
    });
    return Orders;
};