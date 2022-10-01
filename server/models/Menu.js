const { Schema } = require('mongoose');

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

module.exports = menuSchema;