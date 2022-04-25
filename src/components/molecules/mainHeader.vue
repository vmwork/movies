<template>
  <v-app-bar app color="green" elevation="5">
    <v-btn exact class="ml-5" :to="{ name: 'home' }"> All movies </v-btn>
    <v-btn class="ml-5" :to="{ name: 'sessionsAtCinema' }">
      Sessions at the cinema
    </v-btn>
    <v-btn class="ml-5 ml-auto" :to="{ name: 'searchMovie' }">
      Search Movie
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class MainHeader extends Vue {}
</script>
