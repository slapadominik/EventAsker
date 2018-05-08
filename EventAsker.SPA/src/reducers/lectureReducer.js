import {SET_LECTURES} from '../actions/actionTypes';

const initialState = {
    lectures: []
}

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_LECTURES:
            return {
                lectures: action.lectures
              }
        default: return state;
    }
}