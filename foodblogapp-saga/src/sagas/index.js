import { put, takeLatest, all, call } from 'redux-saga/effects';
import { setFoods, selectedFood } from '../actions/index.js';
import axios from 'axios';

const loadFoodApi = async () => {
  return axios.get("http://localhost:4001/foods");
}

function* getFoodItems() {
  try {
    //   const { data } = yield call(axios.get, 'http://localhost:4001/foods')
    const { data } = yield call(loadFoodApi)
    //   yield put({ type: setMovies, payload: { foods: data } })
    yield put({ type: setFoods, payload: { foods: [data] } })
  } catch (e) {
    console.log(e.message)
  }
}

function* getSelectedFood(id) {
  try {
      const { item } = yield call(axios.get, `http://localhost:4001/foods?id=${id}`)
    yield put({ type: selectedFood, payload: { food: [item] } })
  } catch (e) {
    console.log(e.message)
  }
}

function* actionWatcher() {
  yield takeLatest('SET_FOODS', getFoodItems)
  yield takeLatest('SELECTED_FOOD', getSelectedFood)
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ])
}
