import React from 'react';
import { shallow } from 'enzyme'
import FormSerNum from '../../components/FormSerNum.js';

test('Component is rendered incorrectly', () => {
  const stateSer = {value:'valueSer',err:'errSer'};
  const stateNum = {value:'valueNum',err:'errNum'};
  const changeData = jest.fn();
  const wrapper = shallow(
    <FormSerNum
      label = 'label'
      serName = 'nameSer'
      serData = {stateSer}
      numName = 'nameNum'
      numData = {stateNum}
      changeData = {changeData}/>
  );

  const labels = wrapper.find('label');
  expect(labels.at(0).text()).toBe('label');
  expect(labels.at(0).hasClass('form--label')).toBe(true);

  const inputs = wrapper.find('input');
  expect(inputs.at(0).props().type).toBe('text');
  expect(inputs.at(0).props().value).toBe('valueSer');
  expect(inputs.at(0).props().name).toBe('nameSer');
  expect(inputs.at(0).props().onChange).toBeDefined();
  expect(inputs.at(0).hasClass('form--input')).toBe(true);

  expect(inputs.at(1).props().type).toBe('text');
  expect(inputs.at(1).props().value).toBe('valueNum');
  expect(inputs.at(1).props().name).toBe('nameNum');
  expect(inputs.at(1).props().onChange).toBeDefined();
  expect(inputs.at(1).hasClass('form--input')).toBe(true);

  const err = wrapper.find('p');
  expect(err.text()).toBe('errSer'+'errNum');
  expect(err.hasClass('form--error')).toBe(true);
});
