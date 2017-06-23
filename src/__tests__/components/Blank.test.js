import React from 'react';
import { shallow } from 'enzyme'
import Blank from '../../components/Blank.js';
import {state} from '../data'


test('Component is rendered incorrectly', () => {
  const wrapper = shallow(<Blank data={ state }/>);
  const blank = wrapper.text();
  for (var key in state) {
    expect(blank.indexOf(state[key].value)).not.toBe(-1);
  }
});
