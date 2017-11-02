const houseData = (state = [], action) => {
  switch (action.type) {
  case "GET_HOUSE_DATA":
    return action.houseData;
  default:
    return state;
  }
};


export default houseData;
