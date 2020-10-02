import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (
  <div>
    <Link to="/beers" class="myButton">
      Beer list
    </Link>
    <Link to={`/beers/random`} class="myButton">
      RandomBeer
    </Link>
    <Link to={`/new_beer`} class="myButton">
      Add Beer
    </Link>
  </div>
);

export default Home;
