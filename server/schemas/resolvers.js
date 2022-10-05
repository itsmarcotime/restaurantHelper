const { Restaurant, Menu} = require('../models')

const resolvers = {
    Query: {
        restaurants: async (parent, { restaurantName }) => {
            const params = restaurantName ? { restaurantName } : {};
            return Restaurant.find(params).sort({ createdAt: -1 });
        },
        menus: async (parent, { restaurantName }) => {
            const params = restaurantName ? { restaurantName } : {};
            return Menu.find(params).sort({ createdAt: -1 });
        }
    },

    Mutation: {
        updateOrder: async(parent, { id, value }) => {
            return Menu.updateOne({_id:id}, {isOrdered:value}, {new:true})
        }
    }
};

module.exports = resolvers; 