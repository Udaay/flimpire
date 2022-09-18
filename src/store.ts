import { configureStore } from "@reduxjs/toolkit";
import { tmbdApi } from "./services/TMBD";
import genreOrCategoryReducer from "./features/currentGenreOrCategory";
import useReducer from "./features/auth";

const store = configureStore({
  reducer: {
    [tmbdApi.reducerPath]: tmbdApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: useReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
