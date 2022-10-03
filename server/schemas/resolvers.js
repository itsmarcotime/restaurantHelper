const { Menu, Restaurant } = require('../models');

const resolvers = {
    Query: {
        menu: async () => {
            return Menu.find().sort({ createdAt: -1 });
        }
    }
};

module.exports = resolvers; 