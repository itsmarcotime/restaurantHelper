const { Schema } = require('mongoose');

const menuSchema = new Schema(
    {
        menuBody: {
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