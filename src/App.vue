<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    "app-header": Header,
    "app-footer": Footer
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/functions";
@import "node_modules/bulma/sass/utilities/derived-variables.sass";
@import url('https://fonts.googleapis.com/css?family=Quicksand');

// Custom font
$family-serif: 'Quicksand', sans-serif;
$family-primary: $family-serif;

// Custom color
$green: #49dd9b;
$green-invert: findColorInvert($green);
$grey: #fafafa;
$grey-invert: findColorInvert($grey);

// Add new color variables to the color map.
$addColors: (
  "green":($green, $green-invert),
  "grey":($grey,$grey-invert)
);
$colors: map-merge($colors, $addColors);

@import "~bulma";
</style>
