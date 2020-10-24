import {all, takeLatest, call, put} from 'redux-saga/effects'
import {SIGN_OUT_SUCCESS} from "../user/userTypes";
import {clearCart} from "./cartActions";

export function* clearCartOnSignOut() {
    yield console.log('........USER SAGA........clearCartOnSignOut()')
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield console.log('........USER SAGA........onSignOutSuccess()')
    yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}
