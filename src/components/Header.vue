<template>
  <nav class="navbar is-transparent is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="../assets/logo.png" alt="">
      </router-link>
      <div
        v-bind:class="{ 'is-active': showNavbar }"
        v-on:click="showNavbar = !showNavbar"
        class="navbar-burger burger"
        data-target="navbarExampleTransparentExample"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navbarExampleTransparentExample" class="navbar-menu" v-bind:class="{ 'is-active': showNavbar }">
      <div class="navbar-end">
        <router-link to="/" v-on:click.native="showNavbar = !showNavbar" class="navbar-item">Home</router-link>
        <router-link to="/contact" v-on:click.native="showNavbar = !showNavbar" class="navbar-item">Contact</router-link>
        <router-link to="/blog" v-on:click.native="showNavbar = !showNavbar" class="navbar-item">Blog</router-link>
        <div class="navbar-item"><a class="button is-rounded is-green has-text-white">Download</a></div>
      </div>
    </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        showNavbar: false
      }
    }
  };

</script>

<style lang="scss" scoped>
  .navbar {
    border-bottom: 1px solid #fafafa;
    a {
      &.navbar-item {
        &:hover {
          color: #49dd9b !important;
        }
      }
    }
  }
</style>
