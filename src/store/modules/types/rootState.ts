import {
  IMovieShowsState,
  IMovieState,
  ISearchMovieState,
} from "../types/movieTypes";

export interface RootState {
  allMovies: IMovieState;
  searchMovie: ISearchMovieState;
  sessionAtCinema: IMovieShowsState;
}
