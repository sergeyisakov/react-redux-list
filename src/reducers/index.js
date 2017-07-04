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
      return {
        ...state,
        items: action.data,
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
        items:[
          ...state.items,
          item
        ],
        newItem:{
          name:'',
          phone:''
        }
      }
    case CHANGE_ITEM:
      return {
        ...state,
        items:state.items.map(item =>
          (item.id === action.item.id) ? action.item: item
        )
      }
    case DELETE_ITEM_REQUEST:
      let index = state.items.findIndex((item) => item.id === action.id);
      return {
        ...state,
        items:[
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1)
        ]
      }
    case CHANGE_CHANGEABLE_ITEM:
      return {
        ...state,
        сhangeableItem:action.id
      }
    case SAVE_DATA:
      var date = new Date();
      date.setDate(date.getDate() + 30);
      localStorage.setItem('save', JSON.stringify(state));
      return state;
    default:
      return state;
  }
}
