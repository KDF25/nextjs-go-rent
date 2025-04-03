import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@shared/api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import globalReducer from "./slice";

const rootReducer = combineReducers({
  global: globalReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
