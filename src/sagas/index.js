import { call, put, take, fork } from 'redux-saga/effects'
import * as actionTypes from '../constants/ActionTypes'
import 'whatwg-fetch'

import * as Api from '../api'

function* getItem(){
  while (true){
    const { filter } = yield take(actionTypes.GET_ITEMS_REQUEST)
    try {
      const response = yield call(Api.getItems, filter);
      yield put ({type:actionTypes.GET_ITEMS_SUCCESS, response});
    } catch (e){
      yield put ({type:actionTypes.GET_ITEMS_FAIL, message:e.message});
    }
  }
}

function* postItem(){
  while (true){
    const { item } = yield take(actionTypes.POST_ITEM_REQUEST)
    try{
      yield call(Api.postItem, item);
      yield put ({type:actionTypes.POST_ITEM_SUCCESS})
    }catch(e){
      yield put ({type:actionTypes.POST_ITEM_FAIL, message:e.message});
    }
  }
}

function* putItem(){
  while (true){
    const { item } = yield take(actionTypes.PUT_ITEM_REQUEST)
    try{
      yield call(Api.putItem, item);
      yield put ({type:actionTypes.PUT_ITEM_SUCCESS})
    }catch(e){
      yield put ({type:actionTypes.PUT_ITEM_FAIL, message:e.message});
    }
  }
}

function* deleteItem(){
  while (true){
    const { id } = yield take(actionTypes.DELETE_ITEM_REQUEST)
    try{
      yield call(Api.deleteItem, id);
      yield put ({type:actionTypes.DELETE_ITEM_SUCCESS})
    }catch(e){
      yield put ({type:actionTypes.DELETE_ITEM_FAIL, message:e.message});
    }
  }
}

export default function* root() {
  yield fork(getItem)
  yield fork(postItem)
  yield fork(putItem)
  yield fork(deleteItem)
}
