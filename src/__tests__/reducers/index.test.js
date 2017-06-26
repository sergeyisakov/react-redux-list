import reducer, { initialState } from '../../reducers'
import {state} from '../data'

import {
  ADD_ITEM,
  CHANGE_ITEM,
  REMOVE_ITEM,
  SAVE_DATA,
  LOAD_DATA,
  CHANGE_CHANGEABLE_ITEM,
  CHANGE_NEW_ITEM,
  CHANGE_FILTER
} from '../../constants/ActionTypes'

it('should return the initial state', () => {
  expect(
    reducer(undefined, {})
  ).toEqual(initialState)
})

it('should handle CHANGE_FILTER', () => {
  const nextState = reducer(state, {
    type: CHANGE_FILTER,
    value: 'filter'
  })
  expect(nextState.filter).toBe('filter');
})

it('should handle ADD_ITEM', () => {
  state.newItem={
    name:'name',
    phone:'phone'
  }
  const nextState = reducer(state, {
    type: ADD_ITEM
  })
  expect(nextState.items[3]).toEqual({id:3, name:'name', phone:'phone'});
})

it('should handle CHANGE_NEW_ITEM', () => {
  const nextState = reducer(state, {
    type: CHANGE_NEW_ITEM,
    name:'name',
    phone:'phone'
  })
  expect(nextState.newItem).toEqual({name:'name', phone:'phone'});
})

it('should handle REMOVE_ITEM', () => {
  const nextState = reducer(state, {
    type: REMOVE_ITEM,
    id: 2
  })
  expect(nextState.items.length).toBe(2);
})

it('should handle CHANGE_CHANGEABLE_ITEM', () => {
  const nextState = reducer(initialState, {
    type: CHANGE_CHANGEABLE_ITEM,
    id: 2
  })
  expect(nextState.сhangeableItem).toBe(2);
})

it('should handle CHANGE_ITEM', () => {
  const nextState = reducer(state, {
    type: CHANGE_ITEM,
    id:0,
    name:'name',
    phone:'phone'
  })
  expect(nextState.items[0]).toEqual({
    id:0,
    name:'name',
    phone:'phone'});
})
