import {GOOGLE_SIGN_IN_FAILURE, GOOGLE_SIGN_IN_START, GOOGLE_SIGN_IN_SUCCESS, SET_CURRENT_USER} from "./userTypes";

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = () => ({
    type: GOOGLE_SIGN_IN_START
})

export const googleSignInSuccess = user => ({
    type: GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

export const googleSignInFailure = error => ({
    type: GOOGLE_SIGN_IN_FAILURE,
    payload: error
})
