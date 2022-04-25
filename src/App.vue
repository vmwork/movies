<template>
  <v-app>
    <MainHeader></MainHeader>
    <v-main v-if="!!allMovies.movies">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, State } from "vuex-class";
import MainHeader from "@/components/molecules/mainHeader.vue";
import { IMovieState } from "./store/modules/types/movieTypes";
const namespace = "allMovies";
@Component({
  components: {
    MainHeader,
  },
})
export default class AllMovies extends Vue {
  @State("allMovies") allMovies: IMovieState;
  @Action("fetchData", { namespace }) fetchData: () => void;
  mounted() {
    this.fetchData();
  }
}
</script>
