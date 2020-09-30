import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <div>
    <Link to="/">
      <div class="header">IronBeers</div>
    </Link>
    <Link to="/"></Link>
  </div>
);

export default Header;
