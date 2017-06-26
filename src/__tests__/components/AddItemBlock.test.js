import React from 'react';
import { shallow } from 'enzyme'
import AddItemBlock from '../../components/AddItemBlock.js';
import {state} from '../data'


test('Component is rendered incorrectly', () => {
  const fn = jest.fn();
  const item = state.items[0];
  const wrapper = shallow(
    <AddItemBlock
      addItem={ fn }
      changeNewItem={fn}
      newItem={item}
      saveData = {fn}/>);
  const inputs = wrapper.find('input');
  const buttons = wrapper.find('button');
  expect(inputs.length).toBe(2);
  expect(buttons.length).toBe(1);
  expect(inputs.at(0).props().value).toBe(item.name);
  expect(inputs.at(1).props().value).toBe(item.phone);
});
