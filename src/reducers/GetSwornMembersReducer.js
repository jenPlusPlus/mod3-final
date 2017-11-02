const swornMembers = (state = [], action) => {
  switch (action.type) {
  case "GET_SWORN_MEMBERS":
    return action.swornMembers;
  default:
    return state;
  }
};


export default swornMembers;
