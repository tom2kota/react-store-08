import {all, call} from "redux-saga/effects";
import {userSagas} from "./user/userSagas";
import {fetchCollectionsStart} from "./shop/shopSagas";
import {cartSagas} from "./cart/cartSagas";

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSagas),
        call(cartSagas)
    ])
}
