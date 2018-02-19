<template>
  <div>
    <!-- Intro -->
    <!-- <section class="hero is-fullheight is-blog">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title has-text-white is-size-1">Blog</h1>
              <p class="has-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="column" style="display: flex; justify-content: center;">
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <section class="hero is-blog-post">
      <div class="hero-body">
        <div class="container">
          <br>
          <h1 class="title has-text-centered">Blog</h1>
          <div class="columns">
            <!-- <div class="column">
              <a href="" class="button is-info is-outlined is-rounded is-success">Fashion</a>
            </div> -->
          </div>
          <div class="columns is-multiline">
            <div v-for="blog in blogs" v-bind:key="blog.id" class="column is-4">
              <!-- <div v-for="category in blog.categories">
                <div v-if="category==5">
                {{category}}
                </div>
              </div> -->

              <div class="card">
                <div class="card-image">
                  <figure
                    v-if="!blog.better_featured_image"
                    class="image is-4by3"
                  >
                    <img
                      src="../assets/testimonials.png"
                    >
                  </figure>
                  <figure
                    v-else
                    class="image is-4by3"
                  >
                    <img
                      class="tes"
                      :src="blog.better_featured_image.source_url"
                    >
                  </figure>
                </div>
                <div class="card-content">
                    <p class="subtitle">
                      <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title.rendered }}</h2></router-link>
                    </p>
                  <div class="content">
                    <small> {{blog.date | formatDate}}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of Intro -->
  </div>
</template>

<script>
  import axios from "axios";
  import moment from "moment"
  import 'moment/locale/id';

  export default {
    name: "Blogs",
    data() {
      return {
        blogs: [],
        errors: []
      }
    },
    created() {
      axios
        .get("http://blog.dakwahcerdas.com/wp-json/wp/v2/posts/")
        .then(response => {
          this.blogs = response.data;
          console.log(this.blogs);
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    filters: {
      formatDate: function (date) {
        return moment(date).format('LL')
      }
    }
  };

</script>

<style lang="scss" scoped>
  // Intro
  .is-blog-post {

    .hero-body {

      .card {
        .card-image {
          .image {
            &.is-4by3 {
              padding-top: 50%;
              img {
                object-fit: cover !important;
              }
            }
          }
        }
      }
    }
  } // End of Intro

</style>
