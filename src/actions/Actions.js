import {
  ADD_ITEM,
  REMOVE_ITEM,
  CHANGE_ITEM,
  SAVE_DATA,
  LOAD_DATA,
  CHANGE_CHANGEABLE_ITEM,
  CHANGE_NEW_ITEM,
  CHANGE_FILTER
} from '../constants/ActionTypes'

export function changeFilter(value) {
  return {
    type: CHANGE_FILTER,
    value
  }
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    name:item.name,
    phone:item.phone
  }
}

export function changeNewItem(item) {
  return {
    type: CHANGE_NEW_ITEM,
    name:item.name,
    phone:item.phone
  }
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id
  }
}

export function changeChangeableItem(id) {
  return {
    type: CHANGE_CHANGEABLE_ITEM,
    id
  }
}

export function changeItem(item) {
  return {
    type: CHANGE_ITEM,
    id:item.id,
    name:item.name,
    phone:item.phone
  }
}

export function saveData(){
  return {
    type: SAVE_DATA
  }
}

export function loadData(){
  return {
    type: LOAD_DATA
  }
}
