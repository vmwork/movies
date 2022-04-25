<template>
  <v-card
    class="d-flex flex-wrap justify-space-between mt-10"
    flat
    height="100"
    tile
  >
    <v-card
      v-cloak
      v-for="movies in movies"
      :key="movies.id"
      class="pa-2 mb-10"
      width="49%"
    >
      <h1 v-html="$sanitize(movies.name)"></h1>
      <div class="d-flex align-start">
        <v-img
          class="mr-10"
          max-width="150"
          width="150"
          contain
          :src="movies.image"
          alt=""
        />
        <p v-html="$sanitize(movies.description)"></p>
      </div>
      <p></p>
      <p v-html="$sanitize(movies.additional)"></p>
    </v-card>
  </v-card>
</template>
<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";

import Component from "vue-class-component";
import { IMovie } from "@/store/modules/types/movieTypes";

@Component
export default class extends Vue {
  @Prop() movies: IMovie;
}
</script>
