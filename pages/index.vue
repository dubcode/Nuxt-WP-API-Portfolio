<template>
  <div class="row">
    <Hero/>
    <Envelope/>
    <Grid/>
    <Blog/>
  </div>
</template>

<script>
import Hero from '../layouts/partials/hero';
import Envelope from '../layouts/partials/envelope';
import Grid from '../layouts/partials/grid';
import Blog from '../layouts/partials/blog';
export default {
  components: {
    Hero,
    Envelope,
    Grid,
    Blog,
  },
  head(){
    return{
      title: 'This is Ultra | Web Design & Web Development | Congleton, Cheshire',
      bodyAttrs: {class: 'home'},
      meta: [
          {hid: 'og:title', name: 'og:title', content: 'This is Ultra'},
          {hid: 'description', name: 'description', content: 'Web Designer & Website Developer Cheshire | ultr4.co.uk'},
          {hid: 'og:description', name: 'og:description', content: 'Web Designer & Website Developer Cheshire | ultr4.co.uk'},
          {name: 'keywords', content: 'web designer, web developer, cheshire, front end, javascript, php, WordPress'}
      ]
    }
  }
}

</script>

<style>

</style>
