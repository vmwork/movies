import { ActionTree } from "vuex";
import axios from "axios";
import { IMovieShowsState, ITimeTable, IMovie } from "../types/movieTypes";
import api from "@/store/api";

import { RootState } from "../types/rootState";

export const actions: ActionTree<IMovieShowsState, RootState> = {
  async getMovieShows({ commit }): Promise<void> {
    await axios({
      url: `${api}/movieShows`,
    }).then(
      (response) => {
        let payload = response.data.data;
        if (typeof payload === "object") {
          const id = "id";
          const sessions = "sessions";

          payload = Object.entries(payload).map((e) => ({
            [id]: +e[0],
            [sessions]: e[1],
          }));
        }
        payload.forEach((item: ITimeTable) => {
          const movie = this.state.allMovies.movies?.find(
            (movie: IMovie) => movie.id === item.id
          );
          if (movie) {
            item.movie = movie;
          }
        });

        commit("setMovieShows", payload);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  async getFreePlaces({ commit }, { movie_id, showDate, daytime }) {
    await axios({
      url: `${api}/showPlaces?movie_id=${movie_id}&daytime=${daytime}&showdate=${showDate}`,
    }).then(
      (response) => {
        const payload = response.data.data;
        commit("setMovieFreePlaces", payload);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  async bookPlace({ commit }, chosenSession) {
    await axios({
      method: "POST",
      url: `${api}/bookPlace`,
      data: chosenSession,
    }).then(
      (response) => {
        const payload = response.data.data;
        commit("setBookedTicket", payload);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  removeFreePlacesData({ commit }) {
    commit("setMovieFreePlaces", undefined);
  },
  removeBookedTicket({ commit }) {
    commit("setBookedTicket", undefined);
  },
};
