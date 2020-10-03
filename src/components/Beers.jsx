import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beers extends Component {
  state = {
    beers: [],
    query: '',
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/search?q=')
      .then((response) => {
        this.setState({ beers: response.data });
      });
  }

  handleOnChange = (event) => {
    let query = event.target.value;
    this.setState({
      [event.target.name]: query,
    });
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((response) => {
        console.log('Response:');
        console.log(response.data);
        this.setState({
          beers: response.data,
        });
      });
  };

  render() {
    // const filteredBeers = this.state.beers.filter((beer) =>
    //   beer.name.includes(this.state.search)
    // );

    return (
      <div>
        <form>
          <input
            type="text"
            className="input search-bar"
            name="query"
            value={this.state.query}
            placeholder="search for beers!!"
            onChange={this.handleOnChange}
          />
        </form>

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
