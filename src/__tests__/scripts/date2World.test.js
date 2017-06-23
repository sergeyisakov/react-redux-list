import d2w from '../../scripts/date2Words.js';

test('should return тридцатое мая две тысячи семнадцатого года for argument 30.05.2017', () => {
  expect(d2w('30.05.2017')).toBe('тридцатое мая две тысячи семнадцатого года');
});
