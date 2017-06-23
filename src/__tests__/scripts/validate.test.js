import {valEmpty, valMask, valDate} from '../../scripts/validate.js';

test('should return err for valEmpty(value:"")', () => {
  const state = {value:'',err:''};
  expect(valEmpty(state).err).not.toBe('');
});

test('should return err for valMask(value:34k3 ,/\d\d\d\d/, 4, err)', () => {
  const state = {value:'34k3',err:''};
  expect(valMask(state, /\d\d\d\d/, 4, 'err').err).toBe('err');
});

test('should return err for valMask(value:34333 ,/\d\d\d\d/, 4, err)', () => {
  const state = {value:'34333',err:''};
  expect(valMask(state, /\d\d\d\d/, 4, 'err').err).toBe('err');
});

test('should return err for valMask(value: 30/05.2017)', () => {
  const state = {value:'30/05.2017',err:''};
  expect(valDate(state).err).not.toBe('');
});

test('should return err for argument value: 32.05.2017', () => {
  const state = {value:'32.05.2017',err:''};
  expect(valDate(state).err).not.toBe('');
});

test('should return err for argument value: 30.13.2017', () => {
  const state = {value:'30.13.2017',err:''};
  expect(valDate(state).err).not.toBe('');
});

test('should return err for argument value: 30.05.3017', () => {
  const state = {value:'30.05.3017',err:''};
  expect(valDate(state).err).not.toBe('');
});
