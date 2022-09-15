import { configureStore } from "@reduxjs/toolkit";
import { tmbdApi } from "./services/TMBD";
import genreOrCategoryReducer from "./features/currentGenreOrCategory";

const store = configureStore({
  reducer: {
    [tmbdApi.reducerPath]: tmbdApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
