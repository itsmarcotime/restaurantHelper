const { Restaurant, Menu} = require('../models')

const resolvers = {
    Query: {
        menus: async (parent, { restaurantName }) => {
            const params = restaurantName ? { restaurantName } : {};
            return Menu.find(params).sort({ createdAt: -1 });
        }
    }
};

module.exports = resolvers; 