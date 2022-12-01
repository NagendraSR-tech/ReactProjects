import { ActionTypes } from "./action_types"

export function setFoods(foods) {
    return {
        type: ActionTypes.SET_FOODS,
        payload: foods
    }
}

export function selectedFood(food) {
    return {
        type: ActionTypes.SELECTED_FOOD,
        payload: food
    }
}

