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
  console.log(store);
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const button = wrapper.find('button');
  button.at(0).simulate('click');
  const errors = wrapper.find('p.form--error');
  for (let i = 0; i < errors.length; i++){
    expect(errors.at(i).text()).not.toBe("");
  }
});
