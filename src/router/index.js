import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import Contact from '@/components/Contact'
// import Blog from '@/components/Blog'
// import SingleBlog from '@/components/SingleBlog'

// code splitting
const Home = () => import(/* webpackChunkName: "home" */ '@/components/Home.vue');
const Contact = () => import(/* webpackChunkName: "contact" */ '@/components/Contact.vue');
const Blog = () => import(/* webpackChunkName: "blog" */ '@/components/Blog.vue');
const SingleBlog = () => import(/* webpackChunkName: "singleBlog" */ '@/components/SingleBlog.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/:id',
      name: 'SingleBlog',
      component: SingleBlog
    },
  ]
})
