<template>
  <v-overlay class="absolute">
    <v-card
      v-if="!sessionAtCinema.bookedTicket"
      width="1280"
      height="600"
      class="pa-10"
    >
      <h2 class="mb-10 mt-10 d-flex justify-center">Choose row and place</h2>

      <div class="d-flex justify-space-between">
        <div
          v-for="(row, i) in sessionAtCinema.movieFreePlaces"
          :key="row[0].row"
        >
          <v-btn
            :color="chosenRow - 1 === i ? 'red' : ''"
            @click="pickOnRow(row[0].row)"
            class="ml-5"
            >{{ row[0].row }}</v-btn
          >
        </div>
      </div>
      <div class="d-flex" v-if="chosenRow !== null">
        <div
          v-for="seats in sessionAtCinema.movieFreePlaces[chosenRow]"
          :key="seats.row"
        >
          <div class="d-flex flex-wrap mt-10 justify-center">
            <div class="" v-for="(seat, i) in seats" :key="seat.seat">
              <v-btn
                @click="$emit('pickOnSeat', seat.seat)"
                :color="chosenSeat - 1 === i ? 'red' : ''"
                class="ma-2"
                v-if="seat.is_free"
                >{{ seat.seat }}
              </v-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex mt-10 justify-center">
        <v-btn @click="$emit('cancel')">Cancel </v-btn>

        <v-btn
          class="ml-10"
          :disabled="!(!!chosenRow && !!chosenSeat)"
          @click="$emit('getTicket')"
        >
          Get ticket</v-btn
        >
      </div>
    </v-card>
    <v-card v-else class="pa-10 d-flex flex-column justify-center">
      <!-- {{ sessionAtCinema.bookedTicket }} -->
      <h1>
        Hi! you ticket is - "{{ sessionAtCinema.bookedTicket.ticketkey }}"
      </h1>
      <v-btn class="mt-10" @click="$emit('finishBooking')">Close </v-btn>
    </v-card>
  </v-overlay>
</template>
<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";

import Component from "vue-class-component";

import {
  IMovieShowsState,
  IBookedTicket,
} from "@/store/modules/types/movieTypes";
@Component
export default class extends Vue {
  @Prop() chosenRow: null | number;
  @Prop() chosenSeat: null | number;
  @Prop() sessionAtCinema: IMovieShowsState;
  @Prop() bookingTicket: IBookedTicket;

  pickOnRow(row: number) {
    if (!this.sessionAtCinema.movieFreePlaces[row]) {
      this.$emit("pickOnSeat", null);
    }
    this.$emit("pickOnRow", row);
  }
}
</script>
