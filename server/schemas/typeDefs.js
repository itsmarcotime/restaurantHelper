const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Menu {
        _id: ID
        menuText: String
    }
    type Price {
        _id: ID
        menuPrice: Int
    }

    type Query {
        menu(menuId: ID!): Menu
        price(priceId: ID!): Price
    }

    type Mutation {
        addMenu(menuText: String!, restaurantName: String!): Menu
        addPrice(menuId: ID!, priceId: Int!): Menu 
        removeMenu(menuId: ID!): Menu
        removePrice(menuId: ID!, priceId: ID!): Menu
    }
`;

module.exports = typeDefs; 