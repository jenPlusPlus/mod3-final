import houseData from '../reducers/GetDataReducer';
import * as actions from '../actions/index';

describe('getData reducer tests', () => {
  it('should return our initial state', () => {
    const expectation = [];

    expect(houseData(undefined, {})).toEqual(expectation);
  });

  // this test is failing because i'm getting an object back;
  // i don't know why i'm getting an object back
  // when houseData is an array with one object in it
  it('should populate state with house data', () => {
    const action = {
      type: 'GET_HOUSE_DATA',
      houseData: [
        {
          name: "House Corbray of Heart's Home",
          founded: '',
          seats: ["Heart's Home"],
          titles: ["Lord of Heart's Home", "King of the Fingers (historical)"],
          coatOfArms: 'Three black ravens in flight, ' +
          'holding three red hearts, on a white field' +
          '(Argent, three ravens volant sable, ' +
          'each clutching in their claws a heart gules)',
          ancestralWeapons: ["Lady Forlorn"],
          words: ''
        }
      ]
    };

    const expectation = [action.houseData];

    expect(houseData(undefined, action)).toEqual(expectation);
  });
});
