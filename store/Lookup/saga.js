import { takeLatest, put } from "@redux-saga/core/effects";
import * as actions from "./actions";

function* getTest(payload) {
//   console.log('getUser FM telephone: '+JSON.stringify(payload.telephone.tele));
//   console.log("=======getUser========");
//   yield put(actions.setUserRequest());
//   console.log("=======getUser========2");
//   try {
//     const response = yield client.get("user?telephone="+payload.telephone.tele);
//     console.log('getUser response: '+response.data.status)
//     if (response.data.status) {
//       // payload.onSuccess("Sign up Successfully");
//     }
//     console.log("Resposne---getUser", response.data);
//     AsyncStorage.setItem("userData", JSON.stringify(response?.data?.data));
//     // AsyncStorage.getItem("userData").then((res) =  JSON.parse(res));
//     yield put(actions.setUserSuccess(response.data));
//   } catch (error) {
//     console.log('getUser error:  '+error)
//     yield put(actions.setUserError());
//   }
}
//===============WATCHERS===========================
export function* actionTest() {
  yield takeLatest(actions.TEST, getTest);
}
