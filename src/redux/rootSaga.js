import {all, call} from "redux-saga/effects";
import {userSagas} from "./user/userSagas";
import {shopSagas} from "./shop/shopSagas";
import {cartSagas} from "./cart/cartSagas";

export default function* rootSaga() {
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ])
}
