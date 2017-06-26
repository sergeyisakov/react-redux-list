import {
  changeFilter,
  addItem,
  changeNewItem,
  removeItem,
  changeChangeableItem,
  changeItem,
  saveData,
  loadData
} from '../../actions/Actions';

import {
  ADD_ITEM,
  REMOVE_ITEM,
  CHANGE_ITEM,
  SAVE_DATA,
  LOAD_DATA,
  CHANGE_CHANGEABLE_ITEM,
  CHANGE_NEW_ITEM,
  CHANGE_FILTER
} from '../../constants/ActionTypes'

it('should create an action CHANGE_FILTER', () => {
    const expectedAction = {
      type: CHANGE_FILTER,
      value: 'value'
    }
    expect(changeFilter('value')).toEqual(expectedAction);
})

it('should create an action ADD_ITEM', () => {
    const expectedAction = {
      type: ADD_ITEM
    }
    const item = {name:'name', phone:'phone'};
    expect(addItem(item)).toEqual(expectedAction);
})

it('should create an action CHANGE_NEW_ITEM', () => {
    const expectedAction = {
      type: CHANGE_NEW_ITEM,
      name:'name',
      phone:'phone'
    }
    const item = {name:'name', phone:'phone'};
    expect(changeNewItem(item)).toEqual(expectedAction);
})

it('should create an action REMOVE_ITEM', () => {
    const expectedAction = {
      type: REMOVE_ITEM,
      id: 404
    }
    expect(removeItem(404)).toEqual(expectedAction);
})

it('should create an action CHANGE_CHANGEABLE_ITEM', () => {
    const expectedAction = {
      type: CHANGE_CHANGEABLE_ITEM,
      id: 404
    }
    expect(changeChangeableItem(404)).toEqual(expectedAction);
})

it('should create an action CHANGE_ITEM', () => {
    const expectedAction = {
      type: CHANGE_ITEM,
      id:404,
      name:'name',
      phone:'phone'
    }
    const item = {id:404, name:'name', phone:'phone'};
    expect(changeItem(item)).toEqual(expectedAction);
})



it('should create an action SAVE_DATA', () => {
    const expectedAction = {
      type: SAVE_DATA
    }
    expect(saveData()).toEqual(expectedAction);
})

it('should create an action LOAD_DATA', () => {
    const expectedAction = {
      type: LOAD_DATA
    }
    expect(loadData()).toEqual(expectedAction);
})
