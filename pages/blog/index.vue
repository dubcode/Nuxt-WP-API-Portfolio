<template>
    <div class="top-pad-row">
      <Blog/>
    </div>
</template>

<script>
import axios from 'axios';
import Blog from '~/layouts/partials/blog';
export default {
    components: {
    Blog
    },
  head(){
    return{
      title: 'Web Design & Development Blog & Tutorials',
      bodyAttrs: {class: 'category'},
      meta: [
          {hid: 'og:title', name: 'og:title', content: 'Web Design & Development Blog & Tutorials'},
          {hid: 'description', name: 'description', content: 'Front end web development tutorials ad other fun stuff.'},
          {hid: 'og:description', name: 'og:description', content: 'Front end web development tutorials ad other fun stuff.'},
          {name: 'keywords', content: 'web designer, web developer, cheshire, front end, javascript, php, WordPress'}
      ]
    }
  }
}

</script>

<style>

</style>
