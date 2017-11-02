import configureStore from 'redux-mock-store';
import { shallow, mount, configure } from 'enzyme';
// Enzyme Internal Error: unknown composite type undefined
// import CardCatalogContainer from './CardCatalogContainer';
// TypeError: Cannot read property 'prototype' of undefined
import { CardCatalogContainer } from './CardCatalogContainer';
import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import fetchMock from 'fetch-mock';
import * as actions from './../actions/index';

configure({ adapter: new Adapter() })

describe('CardCatalogContainer tests', () => {

  it('should have default state', () => {

    const mockData = [{
      name:"House Corbray of Heart's Home",
      coatOfArms:"Three black ravens in flight",
      words:"",
      titles:[
        "Lord of Heart's Home",
        "King of the Fingers (historical)"
      ],
      founded:"",
      ancestralWeapons:[
        "Lady Forlorn"
      ]
    }];
    fetchMock.get('http://localhost:3001/api/v1/houses', {
      status: 200,
      body: mockData
    });

    const mockStore = configureStore();
    const initialState = { houseData: [] };
    const store = mockStore(initialState);

    const mockFunc = jest.fn();
    const wrapper = shallow(<CardCatalogContainer
      store={store}
      houseData={[]}
      getHouseData={mockFunc}
                            />);

    expect(wrapper.instance().props.houseData).toEqual({ houseData: [] });
  });

});
