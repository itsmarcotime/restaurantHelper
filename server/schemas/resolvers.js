const { Menu, Restaurant } = require('../models');

const resolvers = {
    Query: {
        menu: async () => {
<<<<<<< HEAD
            return menuText.find().sort({ createdAt: -1 });
        },
        menu: async (parent, { menuID }) => {
            return Menu.findOne({_id: menuID});
        },
=======
            return Menu.find().sort({ createdAt: -1 });
        }
>>>>>>> develop
    }
};

module.exports = resolvers; 