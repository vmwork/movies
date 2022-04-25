<template v-cloak>
  <v-container>
    <MovieCard :movies="allMovies.movies"></MovieCard>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { State } from "vuex-class";
import Component from "vue-class-component";
import { IMovieState } from "@/store/modules/types/movieTypes";
import MovieCard from "@/components/atoms/movieCard.vue";
@Component({
  components: {
    MovieCard,
  },
})
export default class AllMovies extends Vue {
  @State("allMovies") allMovies: IMovieState;
}
</script>
