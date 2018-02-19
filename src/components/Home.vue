<template>
  <div>
    <!-- Intro -->
    <section class="hero is-fullheight is-intro">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title has-text-white is-size-1">Stay Connected
                <br> with Ta'lim</h1>
              <p class="has-text-white is-size-5">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
              <br>
              <article class="media">
                <figure class="media-left">
                  <a @click="openModal" class="button is-circle">
                    <i class="fa fa-play has-text-green"></i>
                  </a>
                </figure>
                <div class="media-content">
                  <div class="content">
                     <h2 class="subtitle has-text-white">Watch Intro</h2>
                  </div>
                </div>
              </article>
            </div>
            <div class="column" style="display: flex; justify-content: center;">
              <img src="../assets/devices.png">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of Intro -->
    <!-- Features -->
    <section class="hero is-medium is-feature">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-green is-size-2">Ngajikuy! Features</h1>
          <div class="columns is-multiline">
            <div class="column is-6">
              <div class="box">
                <article class="media">
                  <figure class="media-left">
                    <p class="image is-32x32">
                      <img src="../assets/jam.svg">
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p class="subtitle">Lorem, ipsum dolor.</p>
                      <p>
                        Memberikan informasi terkini mengenai kajian yang ada
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div class="column is-6">
              <div class="box">
                <article class="media">
                  <figure class="media-left">
                    <p class="image is-32x32">
                      <img src="../assets/map.svg">
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p class="subtitle">Lorem, ipsum dolor.</p>
                      <p>
                        Memberikan informasi terkini mengenai kajian yang ada
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div class="column is-6">
              <div class="box">
                <article class="media">
                  <figure class="media-left">
                    <p class="image is-32x32">
                      <img src="../assets/search.svg">
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p class="subtitle">Lorem, ipsum dolor.</p>
                      <p>
                        Memberikan informasi terkini mengenai kajian yang ada
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div class="column is-6">
              <div class="box">
                <article class="media">
                  <figure class="media-left">
                    <p class="image is-32x32">
                      <img src="../assets/salaman.svg">
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p class="subtitle">Lorem, ipsum dolor.</p>
                      <p>
                        Memberikan informasi terkini mengenai kajian yang ada
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of Features -->
    <!-- Testimonials -->
    <section class="hero is-grey is-medium is-testimonial">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered has-text-green is-size-2">Apa kata mereka?</h1>
          <div class="columns">
            <div class="column is-10 is-offset-1 has-text-centered">
              <app-testimonial></app-testimonial>
              <br>
              <img src="../assets/testimonials.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of Testimonials -->
    <!-- Download -->
    <section class="hero is-fullheight is-download">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column" style="display: flex; justify-content: center;">
              <img src="../assets/mockup.png">
            </div>
            <div class="column">
              <h1 class="title has-text-white is-size-2">Download</h1>
              <p class="has-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <br>
              <a href="#">
                <img src="../assets/download-google.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of Download -->
    <!-- Donation -->
    <section class="hero is-grey is-medium is-donation">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered has-text-green is-size-2">Donasi</h1>
          <div class="columns">
            <div class="column has-text-centered">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of Donation -->
    <!-- Media -->
    <section class="hero is-medium is-media">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered has-text-green is-size-2">Telah Diliput Oleh</h1>
          <div class="columns">
            <div class="column has-text-centered">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h2 class="subtitle">Watch Intro</h2>
            </div>
          </div>
        </div>
      </div>>
    </section>
    <!-- Media -->
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <iframe width="560" height="315" :src="urlVideo" frameborder="0" allowfullscreen></iframe>
      </div>
      <button @click="closeVideo" class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>

<script>
  import Testimonial from "./Testimonial.vue";
  import ModalVideo from "./ModalVideo.vue";

  export default {
    name: "Home",
    components: {
      "app-testimonial": Testimonial,
      "modal-video": ModalVideo
    },
    data() {
      return {
        isActive: false,
        urlVideo: ""
      };
    },
    methods: {
      openModal: function () {
        this.isActive = !this.isActive;
        this.urlVideo = "https://www.youtube.com/embed/q48Ea45Nl20?autoplay=1";
      },
      closeVideo: function () {
        this.isActive = !this.isActive;
        this.urlVideo = "";
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  // Intro
  .is-intro {
    background-color: #49dd73;
    background: linear-gradient( 135deg,
    rgba(73, 221, 115, 1),
    rgba(55, 182, 171, 1));
    transform: skewY(-12deg);
    transform-origin: 0;
    .hero-body {
      transform: skewY(12deg);
      transform-origin: 0;
      a {
        &.button {
          border-color: white;
          &:hover {
            border-color: white;
          }
          &.is-circle {
            border-radius: 100%;
            width: 50px;
            height: 50px;
            line-height: 50px;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
            &:hover {
              transition: box-shadow .25s;
              box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
          }
        }
      }
      img {
        top: -150px;
        right: -350px;
        position: absolute;
        transform: rotate(-12deg);
      }
      .subtitle {
        padding-top: 9.25px;
        padding-bottom: 9.25px;
        margin-bottom: 0;
      }
    }
  } // End of Intro
  // Features
  .is-feature {
    transform: skewY(-5deg);
    transform-origin: 0;
    .hero-body {
      transform: skewY(5deg);
    }
  } // End of Features
  // Testimonials
  .is-testimonial {
    transform: skewY(-5deg);
    transform-origin: 0;
    .hero-body {
      transform: skewY(5deg);
    }
  } // End of Testimonials
  // Download
  .is-download {
    background-color: #49dd73;
    background: linear-gradient( 135deg,
    rgba(73, 221, 115, 1),
    rgba(55, 182, 171, 1));
    transform: skewY(-5deg);
    transform-origin: 0;
    .hero-body {
      transform: skewY(5deg);
      img {
        height: 500px;
      }
      a {
        img {
          height: auto;
          width: 20%;
        }
      }
    }
  } // End of Download
  // Donation
  .is-donation {
    transform: skewY(-5deg);
    transform-origin: 0;
    .hero-body {
      transform: skewY(5deg);
    }
  }

  // End of Donation
  // Media
  // End of Media

</style>
