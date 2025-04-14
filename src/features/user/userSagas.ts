import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "./userSlice";
import { API_ENDPOINTS } from "../../constants/api";

interface LoginResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

// This is a placeholder for your actual API call
const loginApi = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await fetch(API_ENDPOINTS.LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};

function* loginSaga(
  action: ReturnType<typeof loginRequest>
): Generator<unknown, void, LoginResponse> {
  try {
    const { email, password } = action.payload;
    const response = yield call(loginApi, email, password);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(
      loginFailure(error instanceof Error ? error.message : "Login failed")
    );
  }
}

export function* userSagas(): Generator<unknown, void, unknown> {
  yield takeLatest(loginRequest.type, loginSaga);
}
