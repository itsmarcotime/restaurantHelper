const { Schema, model } = require('mongoose');


const menuSchema = new Schema(
    {
        menuText: {
            type: String,
            required: true
        },
        menuPrice : {
            type: Number,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Menu = model("Menu", menuSchema) 

module.exports = Menu;