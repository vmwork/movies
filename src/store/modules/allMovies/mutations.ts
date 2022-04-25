import { MutationTree } from "vuex";
import { IMovie, IMovieState } from "../types/movieTypes";

export const mutations: MutationTree<IMovieState> = {
  setAllMovies(state, payload: IMovie[]) {
    state.error = false;
    state.movies = payload;
  },
  setAllMoviesError(state) {
    state.error = true;
    state.movies = undefined;
  },
};
