import { ActionTree } from "vuex";
import axios from "axios";
import { IMovie, ISearchMovieState } from "../types/movieTypes";
import api from "@/store/api";

import { RootState } from "../types/rootState";

export const actions: ActionTree<ISearchMovieState, RootState> = {
  async searchByGenre({ commit }, searchByGenre): Promise<void> {
    await axios({
      url: `${api}/movies?genres=${searchByGenre}`,
    }).then(
      (response) => {
        const payload: IMovie = response && response.data.data;
        commit("setMovies", payload);
      },
      (error) => {
        console.log(error);
        commit("setMoviesError");
      }
    );
  },
  async searchByName({ commit }, movieName): Promise<void> {
    await axios({
      url: `${api}/movies?name=${movieName}`,
    }).then(
      (response) => {
        const payload: IMovie = response && response.data.data;
        commit("setMovies", payload);
      },
      (error) => {
        console.log(error);
        commit("setMoviesError");
      }
    );
  },
};
