import { call, put, take, fork } from 'redux-saga/effects'
import * as actionTypes from '../constants/ActionTypes'
import 'whatwg-fetch'

import * as Api from '../api'

function* getItem(){
  while (true){
    const { filter } = yield take(actionTypes.GET_ITEMS_REQUEST)
    try {
      const data = yield call(Api.getItems, filter);
      yield put ({type:actionTypes.GET_ITEMS_SUCCESS, data});
    } catch (e){
      yield put ({type:actionTypes.GET_ITEMS_FAIL, message:e.message});
    }
  }
}

function* postItem(){
  while (true){
    try{
      const { item } = yield take(actionTypes.POST_ITEM_REQUEST)
      yield call(Api.postItem, item);
    }catch(e){
      yield put ({type:actionTypes.POST_ITEM_FAIL, message:e.message});
    }
  }
}

function* putItem(){
  while (true){
    try{
      const { item } = yield take(actionTypes.PUT_ITEM_REQUEST)
      yield call(Api.putItem, item);
    }catch(e){
      yield put ({type:actionTypes.PUT_ITEM_FAIL, message:e.message});
    }
  }
}

function* deleteItem(){
  while (true){
    try{
      const { id } = yield take(actionTypes.DELETE_ITEM_REQUEST)
      yield call(Api.deleteItem, id);
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
