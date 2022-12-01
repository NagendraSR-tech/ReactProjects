import {combineReducers} from 'redux'
import { foodReducer, selectedFoodReducer } from './food_reducer'

const reducers = combineReducers({
    allFoods: foodReducer,
    food: selectedFoodReducer
}) 

export default reducers;