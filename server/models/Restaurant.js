//this will be a (user)
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const restaurantSchema = new Schema(
    {
        restaurantName: {
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

restaurantSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

const Restaurant= model("Restaurant", restaurantSchema)

module.exports = Restaurant; 