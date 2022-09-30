//this will be a (user)
const { Schema } = require('mongoose');

const restaurantSchema = new Schema(
    {
        restaurantBody: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = restaurantSchema; 