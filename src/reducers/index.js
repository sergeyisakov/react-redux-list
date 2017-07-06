import { normalize } from 'normalizr'
import * as schema from '../schema'
import { omit } from 'lodash'

import {
  CHANGE_ITEM,
  SAVE_DATA,
  CHANGE_CHANGEABLE_ITEM,
  CHANGE_NEW_ITEM,
  CHANGE_FILTER,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
  POST_ITEM_REQUEST,
  DELETE_ITEM_REQUEST
} from '../constants/ActionTypes'

export const initialState = {
  items:[],
  сhangeableItem:-1,
  newItem:{
    name:'',
    phone:''
  },
  filter:'',
  loading: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_ITEMS_SUCCESS:
      const items = normalize(action.response, schema.arrayOfItems).entities.items;
      return {
        ...state,
        items: items ? items : {},
        loading: false
      }
    case GET_ITEMS_FAIL:
      return {
        ...state,
        loading: 'error'
      }
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.value
      }
    case CHANGE_NEW_ITEM:
      return {
        ...state,
        newItem: {
          name: action.name,
          phone: action.phone
        }
      }
    case POST_ITEM_REQUEST:
      const item = action.item;
      return {
        ...state,
        items:{
          ...state.items,
          ...normalize(action.item, schema.items).entities.items
        },
        newItem:{
          name:'',
          phone:''
        }
      }
    case CHANGE_ITEM:
      return {
        ...state,
        items:{
          ...state.items,
          ...normalize(action.item, schema.items).entities.items
        }
      }
    case DELETE_ITEM_REQUEST:
      return {
        ...state,
        items: omit(state.items, action.id)
      }
    case CHANGE_CHANGEABLE_ITEM:
      return {
        ...state,
        сhangeableItem:action.id
      }
    default:
      return state;
  }
}
