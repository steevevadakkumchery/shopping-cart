import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/shopping-cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
