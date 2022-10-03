//this will be a (user)
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const restaurantSchema = new Schema(
    {
        restaurantName: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true
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

restaurantSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

const Restaurant= model("Restaurant", restaurantSchema)

module.exports = Restaurant; 