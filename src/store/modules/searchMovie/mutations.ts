import { MutationTree } from "vuex";
import { IMovie, IMovieState } from "../types/movieTypes";

export const mutations: MutationTree<IMovieState> = {
  setMovies(state, payload: IMovie[]) {
    state.error = false;
    state.movies = payload;
  },
  setMoviesError(state) {
    state.error = true;
    state.movies = undefined;
  },
};
