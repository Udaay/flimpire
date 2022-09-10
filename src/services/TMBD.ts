import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PopularMovies } from "../models/movieModel";

const tmbdApiKey = process.env.REACT_APP_TMBD_KEY;
console.log(process.env, "env");
const tmbdBaseURL = "https://api.themoviedb.org/3/";
const page = 1;

export const tmbdApi = createApi({
  reducerPath: "tmbdAPi",
  baseQuery: fetchBaseQuery({ baseUrl: tmbdBaseURL }),
  endpoints: (builder) => ({
    //* Get movies by [type]
    getMovies: builder.query<PopularMovies, void>({
      query: () => `movie/popular?page=${page}&api_key=${tmbdApiKey}`,
    }),
  }),
});

export const { useGetMoviesQuery } = tmbdApi;
