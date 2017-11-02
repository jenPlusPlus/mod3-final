import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor() {
    super();
  }

  getFounded() {
    const foundedWhat = this.props.house.founded === ''
      ? 'None'
      : this.props.house.founded;
    return foundedWhat;
  }

  getSeats() {
    const mappedSeats = this.props.house.seats.map((seat, index) => {
      return (
        <li key={index}>{seat}</li>
      );
    })
    return mappedSeats
  }
//name, founded, seats, titles, coatOfArms, ancestralWeapons, words
  render() {
    const { house } = this.props;
    console.log('props: ', house);
    return (
      <div className='card'>
        <h3>{house.name}</h3>
        <p>Founded: {this.getFounded()}</p>
        <ul>Seats:
          {this.getSeats()}
        </ul>
      </div>);
  }
}

Card.propTypes = {
  house: PropTypes.object
};

export default Card;
