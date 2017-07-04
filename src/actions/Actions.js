import v4 from 'uuid/v4'

import {
  CHANGE_ITEM,
  SAVE_DATA,
  LOAD_DATA,
  CHANGE_CHANGEABLE_ITEM,
  CHANGE_NEW_ITEM,
  CHANGE_FILTER,
  GET_ITEMS_REQUEST,
  PUT_ITEM_REQUEST,
  POST_ITEM_REQUEST,
  DELETE_ITEM_REQUEST,
} from '../constants/ActionTypes'

export function endEditingItem(item){
  return {
    type: PUT_ITEM_REQUEST,
    item
  }
}

export function getItems(filter){
  return {
    type: GET_ITEMS_REQUEST,
    filter
  }
}

export function changeFilter(value) {
  return {
    type: CHANGE_FILTER,
    value
  }
}

export function addItem(item) {
  return {
    type: POST_ITEM_REQUEST,
    item: {id:v4(), ...item}
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
    type: DELETE_ITEM_REQUEST,
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
    item: item
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
