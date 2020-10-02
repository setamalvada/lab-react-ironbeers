import React, { Component } from 'react';
import './App.css';
import Beers from './components/Beers';
import Header from './components/Header';
import Home from './components/Home';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:id" component={BeerDetail} />
          <Route exact path="/beers/random" component={RandomBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
