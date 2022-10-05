const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { createHook } = require('async_hooks');

const PORT = process.env.PORT || 3001;
// creating new Apollo server 
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//API here 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    //here  is ok
    app.get('/api', (req, res) => {
        res.json("{foo: BAR}")
    });
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'))
    });
   
    //not here!!!!!!!!!!!!!!!!!!!!
}

// create a new instance of an Apollo server with the GraphQL
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port http://localhost:${PORT}/ !`);
            console.log(`USE GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

// Call the async function to start the server 
startApolloServer(typeDefs, resolvers);

