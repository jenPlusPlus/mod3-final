import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor() {
    super();
  }

  // the next three functions could be refactored into one, taking in the array as an arg.
  getSeats() {
    let mappedSeats;
    if (this.props.house.seats.length > 0) {
      mappedSeats = this.props.house.seats.map((seat, index) => {
        return (
          <li key={index}>{seat}</li>
        );
      });
    } else {
      mappedSeats = <li key='1'>None</li>;
    }
    return mappedSeats;
  }

  getTitles() {
    let mappedTitles;
    if (this.props.house.titles.length > 0){
      mappedTitles = this.props.house.titles.map((title, index) => {
        return (
          <li key={index}>{title}</li>
        );
      });
    } else {
      mappedTitles = <li key='1'>None</li>;
    }
    return mappedTitles;
  }

  getWeapons() {
    let mappedWeapons;
    if (this.props.house.ancestralWeapons.length > 0){
      mappedWeapons = this.props.house.ancestralWeapons.map((weapon, index) => {
        return (
          <li key={index}>{weapon}</li>
        );
      });
    } else {
      mappedWeapons = <li key='1'>None</li>;
    }
    return mappedWeapons;
  }

  // the next two functions could be refactored into one
  getFounded() {
    const foundedWhat = this.props.house.founded === ''
      ? 'None'
      : this.props.house.founded;
    return foundedWhat;
  }

  getWords() {
    const words = this.props.house.words === ''
      ? 'None'
      : this.props.house.words;
    return words;
  }

  render() {
    const { house } = this.props;
    return (
      <div className='card'>
        <h3>{house.name}</h3>
        <p>Founded: {this.getFounded()}</p>
        <ul>Seats:
          {this.getSeats()}
        </ul>
        <ul>Titles:
          {this.getTitles()}
        </ul>
        <p>Coat of Arms: {house.coatOfArms}</p>
        <ul>Ancestral Weapons:
          {this.getWeapons()}
        </ul>
        <p>Words: {this.getWords()}</p>
      </div>);
  }
}

Card.propTypes = {
  house: PropTypes.object
};

export default Card;
