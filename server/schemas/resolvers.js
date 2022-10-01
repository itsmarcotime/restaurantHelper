const { Menu, Restaurant } = require('../models');

const menuText = Menu.obj.menuText
console.log(menuText)

const resolvers = {
    Query: {
        menu: async () => {
            return menuText.find().sort({ createdAt: -1 });
        },
        menu: async (parent, { menuID }) => {
            return Menu.findOne({_id: menuID});
        },
    }
};

module.exports = resolvers; 