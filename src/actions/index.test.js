import * as actions from './index.js';

describe('actions testing', () => {

  let house =   {
    name: "House Corbray of Heart's Home",
    founded: '',
    seats: ["Heart's Home"],
    titles: ["Lord of Heart's Home", "King of the Fingers (historical)"],
    coatOfArms: 'Three black ravens in flight, holding three red hearts, on a white field(Argent, three ravens volant sable, each clutching in their claws a heart gules)',
    ancestralWeapons: ["Lady Forlorn"],
    words: ''
  }

  it(`should create a getHouseData action`, () => {

    const expectation = actions.getHouseData(house);

    expect(expectation.type).toEqual('GET_HOUSE_DATA');
    expect(expectation.houseData.name).toEqual("House Corbray of Heart's Home");
    expect(expectation.houseData.founded).toEqual('');
    expect(expectation.houseData.seats).toEqual(["Heart's Home"]);
    expect(expectation.houseData.titles).toEqual(["Lord of Heart's Home", "King of the Fingers (historical)"]);
    expect(expectation.houseData.coatOfArms).toEqual('Three black ravens in flight, holding three red hearts, on a white field(Argent, three ravens volant sable, each clutching in their claws a heart gules)');
    expect(expectation.houseData.ancestralWeapons).toEqual(["Lady Forlorn"]);
    expect(expectation.houseData.words).toEqual('');
  });
});
