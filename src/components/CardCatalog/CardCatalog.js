import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardCatalog extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getHouseData();
  }


  render() {
    return (
      <div className='card-catalog'>Card Catalog</div>
    );
  }
}

CardCatalog.propTypes = {
  getHouseData: PropTypes.func
};

export default CardCatalog;
