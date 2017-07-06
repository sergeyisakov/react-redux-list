import v4 from 'uuid/v4'
import * as api from '../api';

import * as actionTypes from '../constants/ActionTypes'

export const putItem = (item)=>(dispatch)=>{
  dispatch({type: actionTypes.PUT_ITEM_REQUEST, item});
  return api.putItem(item).then(response => {
    dispatch({type: actionTypes.PUT_ITEM_SUCCESS});
  });
}

export const getItems = (filter) => (dispatch) =>{
  dispatch({type: actionTypes.GET_ITEMS_REQUEST,filter});
  return api.getItems(filter).then(response => {
    dispatch({type: actionTypes.GET_ITEMS_SUCCESS, response});
  });
}

export function changeFilter(value) {
  return {
    type: actionTypes.CHANGE_FILTER,
    value
  }
}

export const addItem = (item) => (dispatch) => {
  const itemWithId = {id:v4(), ...item}
  dispatch({type: actionTypes.POST_ITEM_REQUEST, item:itemWithId});
  return api.postItem(itemWithId).then(response => {
    dispatch({type: actionTypes.POST_ITEM_SUCCESS});
  });
}

export function changeNewItem(item) {
  return {
    type: actionTypes.CHANGE_NEW_ITEM,
    name:item.name,
    phone:item.phone
  }
}

export const removeItem =(id)=>(dispatch)=> {
  dispatch({type: actionTypes.DELETE_ITEM_REQUEST,id});
  return api.deleteItem(id).then(response => {
    dispatch({type: actionTypes.DELETE_ITEM_SUCCESS, response});
  });
}

export function changeChangeableItem(id) {
  return {
    type: actionTypes.CHANGE_CHANGEABLE_ITEM,
    id
  }
}

export function changeItem(item) {
  return {
    type: actionTypes.CHANGE_ITEM,
    item: item
  }
}
