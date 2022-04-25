import { ActionTree } from "vuex";
import axios from "axios";
import { IMovie, IMovieState } from "../types/movieTypes";
import api from "@/store/api";
import { RootState } from "../types/rootState";

export const actions: ActionTree<IMovieState, RootState> = {
  async fetchData({ commit }): Promise<void> {
    await axios({
      url: `${api}/movies`,
    }).then(
      (response) => {
        const payload: IMovie = response && response.data.data;
        commit("setAllMovies", payload);
      },
      (error) => {
        console.log(error);
        commit("setAllMoviesError");
      }
    );
  },
};
