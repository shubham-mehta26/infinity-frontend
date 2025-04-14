import { all } from "redux-saga/effects";
import { userSagas } from "@/features/user/userSagas";

export default function* rootSaga() {
  yield all([userSagas()]);
}
