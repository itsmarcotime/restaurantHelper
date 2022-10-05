const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Restaurant {
        _id: ID
        restaurantName: String
    }

    type Menu {
        _id: ID
        menuText: String
        menuPrice: Int
        restaurantName: String
    }

    type Query {
        restaurants : [Restaurant]
        restraunt(restaurantName: String!): Restaurant
        menus(restaurantName: String): [Menu]
        menu(_id: ID!): Menu
    }
`;

module.exports = typeDefs; 