export const fakeAction = () => ({type: 'FAKE'});

export const getHouseData = (houseData) => {
  return {
    type: 'GET_HOUSE_DATA',
    houseData
  };
};

export const getHouseDataFetch = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/houses')
      .then(response => response.json())
      .then(parsedResponse => {
        // console.log(parsedResponse);
        return (dispatch(getHouseData(parsedResponse)));
      });
  };
};
