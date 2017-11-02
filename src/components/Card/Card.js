import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
  }
//name, founded, seats, titles, coatOfArms, ancestralWeapons, words
  render() {
    const { house } = this.props;
    console.log('props: ', house);
    return (
      <div className='card'>
        <h3>{house.name}</h3>
      </div>);
  }
}

export default Card;
