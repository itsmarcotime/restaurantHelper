const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        menus: [Menu]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Restaurant {
        _id: ID
        restaurantName: String
    }

    type Menu {
        _id: ID
        menuText: String
        menuPrice: Int
        restaurantName: String
        isOrdered: Boolean
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        restaurants : [Restaurant]
        restraunt(restaurantName: String!): Restaurant
        menus(restaurantName: String): [Menu]
        menu(_id: ID!): Menu
    }
    type Mutation {
        updateOrder(id:ID!, value:Boolean): Menu
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addMenu(menuText: String!, menuPrice: Int!): Menu
    }
`;

module.exports = typeDefs; 