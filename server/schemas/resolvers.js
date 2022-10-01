const { Menu, Restaurant } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const menuText = Menu.obj.menuText
console.log(menuText)

const resolvers = {
    
    Query: {
        menu: async () => {
            return menuText.find().sort({ createdAt: -1 });
        }
    }
};

module.exports = resolvers; 