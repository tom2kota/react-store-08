import {takeLatest, call, put, all} from "redux-saga/effects"
import {GOOGLE_SIGN_IN_START} from "./userTypes";
import {auth, createUserProfileDocument, googleProvider} from "../../firebase/firebase.utils";
import {googleSignInFailure, googleSignInSuccess} from "./userActions";

export function* SignInWithGoogle() {
    try {
        yield console.log('........USER SAGA........SignInWithGoogle()')
        const {user} = yield auth.signInWithPopup(googleProvider)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get()
        yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        yield put(googleSignInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield console.log('........USER SAGA........')
    yield takeLatest(GOOGLE_SIGN_IN_START, SignInWithGoogle)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart)
    ])
}
