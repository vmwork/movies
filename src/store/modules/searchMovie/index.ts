import { Module } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { ISearchMovieState } from "../types/movieTypes";
import { RootState } from "../types/rootState";

export const state: ISearchMovieState = {
  movies: undefined,
  error: false,
  genres: {
    Action: 0,
    Adventures: 1,
    Comedy: 2,
    Drama: 3,
    Horror: 4,
    Westerns: 5,
  },
};

const namespaced = true;

export const searchMovie: Module<ISearchMovieState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};
