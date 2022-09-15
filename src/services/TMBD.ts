import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GenreList, PopularMovies } from "../models/movieModel";

const tmbdApiKey = process.env.REACT_APP_TMBD_KEY;
console.log(process.env, "env");
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
    PopularMovies,
    { genreIdOrCategoryName: string; page: number }
    >({
      query: ({ genreIdOrCategoryName, page }) => {
        // top_rated, upcoming get movies by category
        if (
          genreIdOrCategoryName
          && typeof genreIdOrCategoryName === "string"
        ) {
          console.log("hii----iii");
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmbdApiKey}`;
        }
        // 67,28,16, get movies by Genre
        if (
          genreIdOrCategoryName
          && typeof genreIdOrCategoryName === "number"
        ) {
          console.log("hiiiiii");
          return `discover/movie/?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmbdApiKey}`;
        }
        // Get Popular Movies
        return `movie/popular?page=${page}&api_key=${tmbdApiKey}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmbdApi;
