<template>
  <div>
    <!-- Contact intro -->
    <section class="hero is-fullheight is-contact">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title has-text-white is-size-1">Contact</h1>
              <p class="has-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="column" style="display: flex; justify-content: center;">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of  Contact intro -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Contact"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Intro
.is-contact {
  background-color: #49dd73;
  background: linear-gradient(
    135deg,
    rgba(73, 221, 115, 1),
    rgba(55, 182, 171, 1)
  );
  transform: skewY(-12deg);
  transform-origin: 0;
  .hero-body {
    transform: skewY(12deg);
    transform-origin: 0;
  }
} // End of Intro
</style>

