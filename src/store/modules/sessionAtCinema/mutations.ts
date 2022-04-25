import { MutationTree } from "vuex";
import { IMovieShowsState } from "../types/movieTypes";
import { ITimeTable } from "../types/movieTypes";

export const mutations: MutationTree<IMovieShowsState> = {
  setMovieShows(state, payload: ITimeTable[]) {
    state.sessionsCinema = payload;
  },
  setMovieFreePlaces(state, payload) {
    state.movieFreePlaces = payload;
  },
  setBookedTicket(state, payload) {
    state.bookedTicket = payload;
  },
};
