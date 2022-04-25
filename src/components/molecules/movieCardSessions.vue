<template>
  <v-card
    class="d-flex flex-wrap justify-space-between mt-10"
    flat
    height="100"
    tile
  >
    <v-card
      v-cloak
      v-for="sessionCinema in sessionsCinema"
      :key="sessionCinema.id"
      class="pa-2 mb-10"
      width="49%"
    >
      <h1 v-html="$sanitize(sessionCinema.movie.name)"></h1>
      <div class="d-flex align-start">
        <v-img
          class="mr-10"
          max-width="150"
          width="150"
          contain
          :src="sessionCinema.movie.image"
          alt=""
        />
        <div class="sessionCard">
          <div
            class="d-flex flex-column"
            v-for="session in sessionCinema.sessions"
            :key="session.showdate"
          >
            <h3>{{ session.showdate }}</h3>
            <div class="d-flex flex-row flex-wrap mb-5">
              <div v-for="daytime in session.daytime.split(';')" :key="daytime">
                <v-btn
                  class="ma-1"
                  @click="
                    $emit('bookTicket', {
                      movie_id: sessionCinema.id,
                      showdate: session.showdate,
                      daytime,
                    })
                  "
                  >{{ daytime }}</v-btn
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-card>
</template>
<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";

import Component from "vue-class-component";
import { IMovieShowsState } from "@/store/modules/types/movieTypes";

@Component
export default class extends Vue {
  @Prop() sessionsCinema: IMovieShowsState;
}
</script>
