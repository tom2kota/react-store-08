import {
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS,
    SIGN_OUT_FAILURE, SIGN_OUT_SUCCESS
} from "./userTypes";

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case SIGN_OUT_FAILURE:
        case SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
