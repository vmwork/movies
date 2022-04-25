<template>
  <v-container>
    <div width="9%" class="ml-5 ml-auto d-flex align-center">
      <v-text-field v-model="movieName" placeholder="Search"></v-text-field>
      <v-btn class="ml-5" elevation="2" small @click="searchMovieByName">
        Search Movie</v-btn
      >
    </div>
    <div class="">
      <p>Search by genre</p>
      <v-btn
        v-for="(genre, key) in searchMovieState.genres"
        :key="genre"
        class="ml-5"
        elevation="2"
        small
        @click="searchMovieByGenre(genre)"
      >
        {{ key }}</v-btn
      >
    </div>

    <MovieCard :movies="searchMovieState.movies"></MovieCard>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { State, Action } from "vuex-class";
import Component from "vue-class-component";
import MovieCard from "@/components/atoms/movieCard.vue";

import { ISearchMovieState } from "@/store/modules/types/movieTypes";
const namespace = "searchMovie";
@Component({
  components: {
    MovieCard,
  },
})
export default class SearchMovie extends Vue {
  movieName = "";
  @State("searchMovie") searchMovieState: ISearchMovieState;
  @Action("searchByGenre", { namespace }) searchByGenre: (
    genre: number
  ) => void;
  @Action("searchByName", { namespace }) searchByName: (name: string) => void;

  searchMovieByGenre(genre: number) {
    this.searchByGenre(genre);
  }
  searchMovieByName() {
    this.searchByName(this.movieName.trim());
  }
}
</script>
