<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-8 is-offset-2">
            <br>
            <h2 class="title">{{ blog.title.rendered }}</h2>
            <p
              v-if="blog.date"
            >
              {{blog.date | formatDate}}
            </p>
          </div>
          <div  v-if="blog.better_featured_image" class="column is-12 has-text-centered">
            <img
              :src="blog.better_featured_image.source_url"
            >
          </div>
          <div class="column is-8 is-offset-2">
            <article v-html="blog.content.rendered"></article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from "axios";
  import moment from "moment"
  import 'moment/locale/id';


  export default {
    data() {
      return {
        id: this.$route.params.id,
        blog: {
          title: '',
          content: '',
          better_featured_image: ''
        }
      };
    },
    created() {
      axios
        .get("http://blog.dakwahcerdas.com/wp-json/wp/v2/posts/" + this.id)
        .then(response => {
          this.blog = response.data;
          console.log(this.blog);
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

<style>


</style>
