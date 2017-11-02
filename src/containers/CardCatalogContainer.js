import { connect } from 'react-redux';
import { getHouseDataFetch } from './../actions/index.js';
import CardCatalog from './../components/CardCatalog/CardCatalog';

const mapStateToProps = (store) => ({
  houseData: store.houseData
});

const mapDispatchToProps = (dispatch) => ({
  getHouseData: (houseData) => {
    dispatch(getHouseDataFetch(houseData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardCatalog);
