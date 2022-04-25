import { Module } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { IMovieShowsState } from "../types/movieTypes";
import { RootState } from "../types/rootState";

export const state: IMovieShowsState = {
  sessionsCinema: undefined,
  movieFreePlaces: undefined,
  bookedTicket: undefined,
};

const namespaced = true;

export const sessionAtCinema: Module<IMovieShowsState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};
