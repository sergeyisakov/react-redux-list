import React from 'react';
import { shallow } from 'enzyme'
import ItemsBlock from '../../components/ItemsBlock.js';
import {state} from '../data'

test('Component is rendered incorrectly', () => {
  const fn = jest.fn();
  const items = state.items;
  const item = items[0];
  let wrapper = shallow(
    <ItemsBlock
      items={ items }
      changeableItem={-1}
      changeItem={ fn }
      removeItem={ fn }
      changeChangeableItem={ fn }
      saveData = {fn}
      filter={item.name}
    />
  );
  let labels = wrapper.find('label');
  expect(labels.length).toBe(2);
  expect(labels.at(0).text()).toBe(item.name);
  expect(labels.at(1).text()).toBe(item.phone);

  wrapper = shallow(
    <ItemsBlock
      items={ items }
      changeableItem={0}
      changeItem={ fn }
      removeItem={ fn }
      changeChangeableItem={ fn }
      saveData = {fn}
      filter={''}
    />
  );
  const div = wrapper.find('div').at(0);
  const inputs = div.find('input');
  expect(inputs.length).toBe(2);
  expect(inputs.at(0).props().value).toBe(item.name);
  expect(inputs.at(1).props().value).toBe(item.phone);
});
