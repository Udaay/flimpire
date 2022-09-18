import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GenreList, MoviesResult } from "../models/movieModel";

const tmbdApiKey = process.env.REACT_APP_TMBD_KEY;
const tmbdBaseURL = "https://api.themoviedb.org/3/";

export const tmbdApi = createApi({
  reducerPath: "tmbdAPi",
  baseQuery: fetchBaseQuery({ baseUrl: tmbdBaseURL }),
  endpoints: (builder) => ({
    //* Get Genre
    getGenres: builder.query<GenreList, void>({
      query: () => `genre/movie/list?language=en&api_key=${tmbdApiKey}`,
    }),

    //* Get movies by [type]
    getMovies: builder.query<
    MoviesResult,
    { genreIdOrCategoryName: string; page: number; searchQuery?: string }
    >({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmbdApiKey}`;
        }

        // top_rated, upcoming get movies by category
        if (
          genreIdOrCategoryName
          && typeof genreIdOrCategoryName === "string"
        ) {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmbdApiKey}`;
        }
        // 67,28,16, get movies by Genre
        if (
          genreIdOrCategoryName
          && typeof genreIdOrCategoryName === "number"
        ) {
          return `discover/movie/?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmbdApiKey}`;
        }
        // Get Popular Movies
        return `movie/popular?page=${page}&api_key=${tmbdApiKey}`;
      },
    }),

    getWatchList: builder.query<
    MoviesResult,
    { accountId?: number; sessionId: string }
    >({
      query: ({ accountId, sessionId }) => `/account/${accountId}/watchlist/movies?session_id=${sessionId}&api_key=${tmbdApiKey}`,
    }),

    getFavouriteList: builder.query<
    MoviesResult,
    { accountId?: number; sessionId: string }
    >({
      query: ({ accountId, sessionId }) => `/account/${accountId}/favorite/movies?session_id=${sessionId}&api_key=${tmbdApiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetWatchListQuery,
  useGetFavouriteListQuery,
} = tmbdApi;
