import {
  ADD_ITEM,
  CHANGE_ITEM,
  REMOVE_ITEM,
  SAVE_DATA,
  LOAD_DATA,
  CHANGE_CHANGEABLE_ITEM,
  CHANGE_NEW_ITEM,
  CHANGE_FILTER
} from '../constants/ActionTypes'

export const initialState = {
  items:[],
  nextId:0,
  сhangeableItem:-1,
  newItem:{
    name:'',
    phone:''
  },
  filter:''
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
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
    case ADD_ITEM:
    if (state.newItem.name==='' || state.newItem.phone===''){
        return state;
      } else {
        const newItem = state.newItem;
        return {
          ...state,
          items:[
            ...state.items,
            {
              id: state.nextId,
              ...newItem
            }
          ],
          newItem:{
            name:'',
            phone:''
          },
          nextId: state.nextId+1
        }
      }
    case CHANGE_ITEM:
      return {
        ...state,
        items:state.items.map(item =>
          (item.id === action.id) ? {
              id:action.id,
              name:action.name,
              phone:action.phone
            }: item
        )
      }
    case REMOVE_ITEM:
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
    case LOAD_DATA:
      var save = localStorage.getItem('save');
      if (save==null){
        return state;
      }
      return JSON.parse(save);
    default:
      return state;
}

}
