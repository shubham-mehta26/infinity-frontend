import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "@/store/rootReducer";
import rootSaga from "@/store/rootSaga";

const sagaMiddleware = createSagaMiddleware();

// Logging middleware
const logger = (store: any) => (next: any) => (action: any) => {
  console.group(action.type);
  console.log("Previous state:", store.getState());
  console.log("Action:", action);
  const result = next(action);
  console.log("Next state:", store.getState());
  console.groupEnd();
  return result;
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware, logger),
  // devTools: process.env.NODE_ENV !== "production",
  devTools: true,
});

// Dispatch a test action
store.dispatch({ type: "TEST_ACTION", payload: "Testing Redux logging" });

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
