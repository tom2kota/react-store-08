import {takeLatest, all, call, put} from "redux-saga/effects"
import {FETCH_COLLECTIONS_START} from "./shopTypes";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./shopActions";

export function* fetchCollectionsAsync() {
    yield console.log('........SHOP SAGA........fetchCollectionsAsync()')
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield console.log('........SHOP SAGA........fetchCollectionsStart()')
    yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}
