import reducer, { initialState } from '../../reducers'

import {
  CHANGE_DATA,
  VALIDATE_DATA
} from '../../constants/ActionTypes'

it('should return the initial state', () => {
  expect(
    reducer(undefined, {})
  ).toEqual(initialState)
})

it('should handle CHANGE_DATA', () => {
  const nextState = reducer([], {
    type: CHANGE_DATA,
    field: 'place',
    value: 'value'
  })
  expect(nextState['place'].value).toBe('value');
})

it('should handle VALIDATE_DATA', () => {
  const nextState = reducer(initialState, {
    type: VALIDATE_DATA
  })

  for (var key in nextState) {
    expect(nextState[key].err).not.toBe('');
  }
})
