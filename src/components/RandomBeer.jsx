import React, { Component } from 'react';
import axios from 'axios';

class RandomBeer extends Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    const random = Math.floor(Math.random() * this.state.beer.length);
    console.log(random);
    return (
      <div class="">
        <h1>{random.name}</h1>

        <table class="table">
          <thead>
            {' '}
            <img class="img-thumbnail" src={random.image_url} alt="Card" />
          </thead>
          <tbody>
            <tr>
              <td>{random.tagline}</td>
            </tr>
            <tr>
              <td>
                Contributed by: {random.contributed_by}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>
                <p>{random.description}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default RandomBeer;
