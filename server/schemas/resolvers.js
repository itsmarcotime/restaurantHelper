const { Menu, Restaurant } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    
    Query: {
        menu: async () => {
            return Menu.find().sort({ createdAt: -1 });
        }
    }
};

module.exports = resolvers; 