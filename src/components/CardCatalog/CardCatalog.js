import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './../Card/Card';
import wolf from './../../wolf.gif';

class CardCatalog extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    await this.props.getHouseData();
  }

  displayHouses() {
    const mapped = this.props.houseData.map( (house, index) => {
      return (<Card
        house={house}
        key={index + Date.now()}
        getSwornMembers={this.props.getSwornMembers}/>
      ) ;
    });
    if (mapped.length > 0) {
      return (
        <div className='card-catalog'>{mapped}</div>
      );
    } else {
      return ( <img id='wolf' src={wolf}/>);
    }
  }


  render() {
    return <div className='card-catalog'>{this.displayHouses()}</div>;
  }
}

CardCatalog.propTypes = {
  getHouseData: PropTypes.func,
  houseData: PropTypes.array,
  getSwornMembers: PropTypes.func
};

export default CardCatalog;
