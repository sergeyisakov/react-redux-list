import React from 'react';
import { shallow } from 'enzyme'
import FormInput from '../../components/FormInput.js';

test('Component is rendered incorrectly', () => {
  const state = {value:'value',err:'err'};
  const changeData = jest.fn();
  const wrapper = shallow(
    <FormInput
      label = 'label'
      name = 'name'
      data = {state}
      changeData = {changeData}/>
  );

  const label = wrapper.find('label');
  expect(label.text()).toBe('label');
  expect(label.hasClass('form--label')).toBe(true);

  const input = wrapper.find('input');
  expect(input.props().type).toBe('text');
  expect(input.props().value).toBe('value');
  expect(input.props().name).toBe('name');
  expect(input.props().onChange).toBeDefined();
  expect(input.hasClass('form--input')).toBe(true);

  const err = wrapper.find('p');
  expect(err.text()).toBe('err');
  expect(err.hasClass('form--error')).toBe(true);
});
