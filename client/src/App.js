import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Table from './pages/Table'
import Menu from './pages/Menu';
import NoMatch from './pages/NoMatch';
import TableSetUp from './pages/TableSetUp';
import Signup from './pages/Signup';
import Login from './pages/Login';

const httpLink = createHttpLink({
  uri: 'graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Table />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/menu"
            element={<Menu />}
          />
          <Route
            path="*"
            element={<NoMatch />}
          />
          <Route
            path="/tableSetUp"
            element={<TableSetUp />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
