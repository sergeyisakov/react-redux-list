import React from 'react';
import FilterBlock from '../../components/FilterBlock.js';
import { mount } from 'enzyme'


test('Component is rendered incorrectly', () => {
  const fn = jest.fn();
  const wrapper = mount(
    <FilterBlock
      changeFilter={ fn }
      filter={'filter'}/>
  );
  const inputs = wrapper.find('input');
  const labels = wrapper.find('label');
  expect(inputs.length).toBe(1);
  expect(labels.length).toBe(1);
  expect(inputs.at(0).props().value).toBe('filter');
});
