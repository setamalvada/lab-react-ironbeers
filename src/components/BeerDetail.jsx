import React, { Component } from 'react';
import axios from 'axios';

class Beers extends Component {
  state = {
    beer: null,
  };

  getBeer = () => {
    const beerData = this.props.match.params.id;
    console.log('beerData', beerData);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerData}`)
      .then((response) => {
        console.log('response', response.data);
        this.setState({
          beer: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getBeer();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getBeer();
    }
  }

  render() {
    if (!this.state.beer) return <div>This Beer does not exist</div>;
    return (
      <div class="">
        <h1>{this.state.beer.name}</h1>

        <table class="table">
          <thead>
            {' '}
            <img
              class="img-thumbnail"
              src={this.state.beer.image_url}
              alt="Card"
            />
          </thead>
          <tbody>
            <tr>
              <td>{this.state.beer.tagline}</td>
            </tr>
            <tr>
              <td>
                Contributed by: {this.state.beer.contributed_by}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>
                <p>{this.state.beer.description}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Beers;
