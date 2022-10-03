const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Menu {
        _id: ID
        menuText: String
        menuPrice: Int
        restaurantName: String
    }

    type Query {
        menus(restaurantName: String): [Menu]
    }
`;

module.exports = typeDefs; 