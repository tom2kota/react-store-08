import {takeLatest, call, put, all} from "redux-saga/effects"
import {EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START} from "./userTypes";
import {auth, createUserProfileDocument, googleProvider} from "../../firebase/firebase.utils";
import {googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure} from "./userActions";

export function* signInWithGoogle() {
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

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get()
        yield put(emailSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        yield put(emailSignInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield console.log('........USER SAGA........')
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield console.log('........USER SAGA........')
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ])
}
