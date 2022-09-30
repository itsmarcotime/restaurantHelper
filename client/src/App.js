import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Table from './pages/Table'
import Menu from './pages/Menu';
import NoMatch from './pages/NoMatch';

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
        <div>
          <Header />
          <div>
            <Routes>
              <Route
                path="/"
                element={<Table />}
              />
              <Route
                path="/Menu"
                element={<Menu />}
              />
              <Route
                path="*"
                element={<NoMatch />}
              />

            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>


  );
}

export default App;
