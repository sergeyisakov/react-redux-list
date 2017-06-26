import {Provider} from 'react-redux';
import React from 'react';
import App from '../../containers/App';
import {state} from '../data'
import { mount } from 'enzyme'
import configureStore from '../../store/configureStore'

const store = configureStore()

var localStorageMock = (function() {
    var store = {};

    return {
        getItem: function(key) {
            return null;
        },
        setItem: function(key, value) {
            store[key] = value.toString();
        },
        clear: function() {
            store = {};
        }
    };

})();

Object.defineProperty(window, 'localStorage', {
     value: localStorageMock
});

test('Component is rendered incorrectly', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const addDiv = wrapper.find('.addItem');
  addItem(addDiv, 'David', '89043456556');
  let itemsDiv = wrapper.find('.items');
  let labels = itemsDiv.find('label');
  expect(labels.length).toBe(2);
  expect(labels.at(0).text()).toBe('David');
  expect(labels.at(1).text()).toBe('89043456556');

  addItem(addDiv, 'Mihail', '89043456556');
  addItem(addDiv, 'Alexey', '89043456556');
  const filterDiv = wrapper.find('.filter');
  const filter = filterDiv.find('input');
  filter.simulate('change', {target: {value: 'dav'}});
  itemsDiv = wrapper.find('.items');
  labels = itemsDiv.find('label');
  expect(labels.length).toBe(2);
  expect(labels.at(0).text()).toBe('David');
  expect(labels.at(1).text()).toBe('89043456556');

  itemsDiv.find('button').simulate('click');
  filter.simulate('change', {target: {value: ''}});
  let items = itemsDiv.find('.item');
  expect(items.length).toBe(2);

  items.at(0).simulate('click');
  items = itemsDiv.find('.item');
  let inputs = items.find('input');
  expect(inputs.length).toBe(2);
  inputs.at(0).simulate('change', {target: {value: 'George'}});
  inputs.at(0).simulate('blur');
  filter.simulate('blur');
  items = itemsDiv.find('.item');
  expect(items.length).toBe(2);
  labels = items.at(0).find('label');
  expect(labels.length).toBe(2);
  expect(labels.at(0).text()).toBe('George');
});

function addItem(addDiv, name, phone){
  const inputs = addDiv.find('input');
  inputs.at(0).simulate('change', {target: {value: name}});
  inputs.at(1).simulate('change', {target: {value: phone}});
  addDiv.find('button').simulate('click');
}
