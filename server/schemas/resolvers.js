const { UserInputError } = require('apollo-server-express');
const { Restaurant, Menu, User } = require('../models')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('menus');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },

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

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        addMenu: async (parent, args, context) => {

            if (context.user) {
                const menu = await Menu.create({ menuText: String, menuPrice: Int });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { thoughts: thought._id } },
                    { new: true }
                );

                return menu;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },

        updateOrder: async (parent, { id, value }) => {
            return Menu.updateOne({ _id: id }, { isOrdered: value }, { new: true })
        }
    }
};

module.exports = resolvers; 