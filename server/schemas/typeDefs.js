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
        menu: [Menu]!
        price(priceId: ID!): Price
    }
`;

module.exports = typeDefs; 