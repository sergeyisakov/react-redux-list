import { call, put, take, takeEvery, fork } from 'redux-saga/effects'
import * as actionTypes from '../constants/ActionTypes'
import 'whatwg-fetch'

import * as Api from '../api'

function* getItem(action){
  try {
    const response = yield call(Api.getItems, action.filter);
    yield put ({type:actionTypes.GET_ITEMS_SUCCESS, response});
  } catch (e){
    yield put ({type:actionTypes.GET_ITEMS_FAIL, message:e.message});
  }
}

function* postItem(action){
  try{
    yield call(Api.postItem, action.item);
    yield put ({type:actionTypes.POST_ITEM_SUCCESS})
  }catch(e){
    yield put ({type:actionTypes.POST_ITEM_FAIL, message:e.message});
  }
}

function* putItem(action){
  try{
    yield call(Api.putItem, action.item);
    yield put ({type:actionTypes.PUT_ITEM_SUCCESS})
  }catch(e){
    yield put ({type:actionTypes.PUT_ITEM_FAIL, message:e.message});
  }
}

function* deleteItem(action){
  try{
    yield call(Api.deleteItem, action.id);
    yield put ({type:actionTypes.DELETE_ITEM_SUCCESS})
  }catch(e){
    yield put ({type:actionTypes.DELETE_ITEM_FAIL, message:e.message});
  }
}

export default function* root() {
  yield takeEvery(actionTypes.GET_ITEMS_REQUEST, getItem)
  yield takeEvery(actionTypes.POST_ITEM_REQUEST, postItem)
  yield takeEvery(actionTypes.PUT_ITEM_REQUEST, putItem)
  yield takeEvery(actionTypes.DELETE_ITEM_REQUEST, deleteItem)
}
