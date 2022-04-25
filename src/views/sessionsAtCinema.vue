<template>
  <v-container>
    <BookingModal
      v-if="sessionAtCinema.movieFreePlaces"
      :sessionAtCinema="sessionAtCinema"
      :chosenRow="chosenRow"
      :chosenSeat="chosenSeat"
      @finishBooking="finishBooking"
      @pickOnRow="pickOnRow"
      @pickOnSeat="pickOnSeat"
      @cancel="cancel"
      @getTicket="getTicket"
    ></BookingModal>
    {{ sessionAtCinema.bookingTicket }}
    <movieCardSessions
      :sessionsCinema="sessionAtCinema.sessionsCinema"
      @bookTicket="bookTicket"
    ></movieCardSessions>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { State, Action } from "vuex-class";
import Component from "vue-class-component";
import {
  IMovieState,
  IMovieShowsState,
  ISession,
} from "@/store/modules/types/movieTypes";
import MovieCardSessions from "@/components/molecules/movieCardSessions.vue";
import BookingModal from "@/components/molecules/bookingModal.vue";

const namespace = "sessionAtCinema";
@Component({
  components: {
    MovieCardSessions,
    BookingModal,
  },
})
export default class SessionsAtCinema extends Vue {
  @State("sessionAtCinema") sessionAtCinema: IMovieShowsState;
  @State("allMovies") allMovies: IMovieState;
  @Action("getMovieShows", { namespace }) getMovieShows: () => void;
  @Action("getFreePlaces", { namespace }) getFreePlaces: (
    session: ISession
  ) => void;
  @Action("removeFreePlacesData", { namespace })
  removeFreePlacesData: () => void;
  @Action("removeBookedTicket", { namespace }) removeBookedTicket: () => void;
  @Action("bookPlace", { namespace }) bookPlace: (session: ISession) => void;
  chosenRow: null | number = null;
  chosenSeat: null | number = null;
  chosenSession: ISession;
  bookTicket(session: ISession) {
    this.chosenSession = session;
    this.getFreePlaces(session);
  }
  pickOnRow(row: number) {
    this.chosenRow = row;
  }
  cancel() {
    this.removeFreePlacesData();
    this.chosenRow = null;
    this.chosenSeat = null;
  }
  getTicket() {
    this.chosenSession.row = this.chosenRow;
    this.chosenSession.seat = this.chosenSeat;
    this.bookPlace(this.chosenSession);
  }
  pickOnSeat(seat: number) {
    this.chosenSeat = seat;
  }
  finishBooking() {
    this.cancel();
    this.removeBookedTicket();
  }
  mounted() {
    this.getMovieShows();
  }
}
</script>
