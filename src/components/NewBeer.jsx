import React, { Component } from 'react';
import Button from './Button';
import axios from 'axios';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: null,
    contributed_by: '',
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    console.log(this.state);

    e.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));

    // this.props.onSubmit(this.state);
  };

  render() {
    const isFormValid = Object.values(this.state).every((field) => field);

    return (
      <form
        onSubmit={this.handleSubmit}
        action="https://ih-beers-api2.herokuapp.com/beers/new"
        method="POST"
      >
        <input
          name="name"
          placeholder="Beer name"
          onChange={this.handleOnChange}
        />

        <input
          name="tagline"
          placeholder="Tag line"
          onChange={this.handleOnChange}
        />

        <label>
          Description:
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleOnChange}
          />
        </label>
        {/* <input
          name="description"
          placeholder="description"
          onChange={this.handleOnChange}
        /> */}

        <input
          name="first_brewed"
          placeholder="First brewed"
          onChange={this.handleOnChange}
        />

        <input
          name="brewers_tips"
          placeholder="Brewer's tips"
          onChange={this.handleOnChange}
        />

        <input
          type="number"
          min={0}
          name="attenuation_level"
          placeholder="Attenuation level"
          onChange={this.handleOnChange}
        />
        <input
          name="contributed_by"
          placeholder="Contributed by"
          onChange={this.handleOnChange}
        />

        <Button disabled={!isFormValid}>Add beer</Button>
      </form>
    );
  }
}

export default NewBeer;
