import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (
  <Link to="/beers" class="myButton">
    Beer list
  </Link>
);

export default Home;
