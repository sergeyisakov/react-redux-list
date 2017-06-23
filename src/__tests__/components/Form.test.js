import React from 'react';
import Form from '../../components/Form.js';
import { mount } from 'enzyme'
import {state} from '../data'


test('Component is rendered incorrectly', () => {
  const func = jest.fn();
  const wrapper = mount(
    <Form
      data={ state }
      changeData={func}
      validateData={func}/>
  );
  const inputs = wrapper.find('input');
  expect(inputs.length).toBe(28);
});
