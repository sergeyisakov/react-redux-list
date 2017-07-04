import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
  PUT_ITEM_REQUEST,
  PUT_ITEM_SUCCESS,
  PUT_ITEM_FAIL,
  POST_ITEM_REQUEST,
  POST_ITEM_SUCCESS,
  POST_ITEM_FAIL,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAIL
} from '../constants/ActionTypes'

import { URL } from '../constants/Urls'

export const request = store => next => action => {
  const xhr = new XMLHttpRequest();
  let item={};
  let data = ''
  switch (action.type) {
    case GET_ITEMS_REQUEST:
      xhr.open('GET', URL+'?name_like='+action.filter, true);
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
          return null;
        }
        if (xhr.status !== 200) {
          return store.dispatch({type:GET_ITEMS_FAIL});
        } else {
          return store.dispatch({
            type: GET_ITEMS_SUCCESS,
            data: JSON.parse(xhr.responseText)}
          );
        }
      }
      break;
    case POST_ITEM_REQUEST:
      item = action.item;
      if (item.name==='' || item.phone===''){
        return;
      }
      data = JSON.stringify(item);
      xhr.open('POST', URL, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(data);
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
          return null;
        }
        if (xhr.status === 200 || xhr.status === 201) {
          return store.dispatch({type: POST_ITEM_SUCCESS});
        } else {
          return store.dispatch({type:POST_ITEM_FAIL});
        }
      }
      break;
    case PUT_ITEM_REQUEST:
      item = action.item;
      if (item.name==='' || item.phone===''){
        return;
      }
      data = JSON.stringify(item);
      xhr.open('PUT', URL+item.id, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(data);
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
          return null;
        }
        if (xhr.status === 200 || xhr.status === 201) {
          return store.dispatch({type: PUT_ITEM_SUCCESS});
        } else {
          return store.dispatch({type:PUT_ITEM_FAIL});
        }
      }
      break;
    case DELETE_ITEM_REQUEST:
      xhr.open('DELETE', URL+action.id, true);
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
          return null;
        }
        if (xhr.status === 200 || xhr.status === 201) {
          return store.dispatch({type: DELETE_ITEM_SUCCESS});
        } else {
          return store.dispatch({type:DELETE_ITEM_FAIL});
        }
      }
      break;
    default:
  }
  return next(action);
}
