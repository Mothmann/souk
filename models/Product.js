'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `modelss/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Product.init({
    ID: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV4
    },

    name: {
        type: sequelize.STRING,
    },

    description: {
        type: sequelize.STRING,
    },
    price: {
        type: sequelize.INTEGER,
    },

    categoryID: {
        type: sequelize.INTEGER,
        references: {
            model: category,
            key: 'id',
        }
    },
    UnitsinStock: {
        type: sequelize.INTEGER,
    },
    PicturePath: {
        type: sequelize.STRING,
        allowNull: true
    },
        sequelize,
        modelName: 'Orders',
    });
    return Product;
};