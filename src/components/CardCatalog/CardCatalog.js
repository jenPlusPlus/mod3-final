import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './../Card/Card';

class CardCatalog extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getHouseData();
  }


  render() {
    const mapped = this.props.houseData.map( (house, index) => {
      return (<Card
        house={house}
        key={index + Date.now()}/>
      ) ;
    });
    return (
      <div className='card-catalog'>{mapped}</div>
    );
  }
}

CardCatalog.propTypes = {
  getHouseData: PropTypes.func,
  houseData: PropTypes.object
};

export default CardCatalog;
