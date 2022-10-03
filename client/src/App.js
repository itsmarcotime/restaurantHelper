/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactSwitch from 'react-switch';


import Header from './components/Header';
import Table from './pages/Table';
import Menu from './pages/Menu';
import NoMatch from './pages/NoMatch';
import TableSetUp from './pages/TableSetUp';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';



const httpLink = createHttpLink({
  uri: 'graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light' ));
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <ThemeContext.Provider value= {{ theme, setTheme }}>
        <div className="App" id={theme}> 
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
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
          </div>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
          </ThemeContext.Provider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
