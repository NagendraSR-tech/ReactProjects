import { ActionTypes } from "../actions/action_types";

const initialState = {
    foods: []
}
export const foodReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_FOODS:
            return {...state, foods:payload};

        default:
            return state;
    }
}

export const selectedFoodReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_FOOD:
            return {...state, ...payload}
    
        default:
            return state;
    }
}
