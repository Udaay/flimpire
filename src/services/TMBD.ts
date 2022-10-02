import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MovieDetails } from "../models/movieDetails";
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
        // Get Movies by Search
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

    // Get Watchlisted Movies
    getList: builder.query<
    MoviesResult,
    { accountId?: number; sessionId: string; list: string }
    >({
      query: ({ accountId, sessionId, list }) => `/account/${accountId}/${list}/movies?session_id=${sessionId}&api_key=${tmbdApiKey}`,
    }),

    // Get Watchlisted Movies
    getWatchList: builder.query<
    MoviesResult,
    { accountId?: number; sessionId: string }
    >({
      query: ({ accountId, sessionId }) => `/account/${accountId}/watchlist/movies?session_id=${sessionId}&api_key=${tmbdApiKey}`,
    }),

    // Get Favorite Movies
    getFavouriteList: builder.query<
    MoviesResult,
    { accountId?: number; sessionId: string }
    >({
      query: ({ accountId, sessionId }) => `/account/${accountId}/favorite/movies?session_id=${sessionId}&api_key=${tmbdApiKey}`,
    }),

    // Get Movie Details
    getMovieDetails: builder.query<MovieDetails, { id: string | undefined }>({
      query: ({ id }) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmbdApiKey}`,
    }),

    // Get Recommendations
    getRecommendedMovies: builder.query<
    MoviesResult,
    { id: string | undefined }
    >({
      query: ({ id }) => `/movie/${id}/recommendations?api_key=${tmbdApiKey}`,
    }),

    // Get Actor
    getActor: builder.query({
      query: (id) => `person/${id}?api_key=${tmbdApiKey}`,
    }),

    // Get Movies by Actor
    getMoviesByActorId: builder.query({
      query: ({ id, page }) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmbdApiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetWatchListQuery,
  useGetFavouriteListQuery,
  useGetListQuery,
  useGetMovieDetailsQuery,
  useGetRecommendedMoviesQuery,
  useGetActorQuery,
  useGetMoviesByActorIdQuery,
} = tmbdApi;
