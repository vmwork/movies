import { Module } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { IMovieState } from "../types/movieTypes";
import { RootState } from "../types/rootState";

export const state: IMovieState = {
  movies: undefined,
  error: false,
};

const namespaced = true;

export const allMovies: Module<IMovieState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};
