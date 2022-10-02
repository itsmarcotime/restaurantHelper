//this will be a (user)
const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema(
    {
        restaurantName: {
            type: String,
            required: true,
            unique: true
        },
        menus: [{
            type: Schema.Types.ObjectId,
            ref: "Menu",
        }
        ]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Restaurant= model("Restaurant", restaurantSchema)

module.exports = Restaurant; 