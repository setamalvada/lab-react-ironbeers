import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.beers.map((beer) => (
          <div class="card">
            <Link to={`/beers/${beer._id}`}>
              <img class="img-thumbnail" src={beer.image_url} alt="Card" />
            </Link>
            <div class="card-body">
              <h5 class="card-title">{beer.name}</h5>
              <p class="card-text">{beer.tagline}</p>

              <p class="card-text">Contributed by {beer.contributed_by}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Beers;


