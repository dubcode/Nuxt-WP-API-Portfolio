<template>
    <div class="row">
      <GridP/>
    </div>
</template>

<script>
import axios from 'axios';
import GridP from '~/layouts/partials/grid-paginated';
export default {
    components: {
    GridP
    },
  head(){
    return{
      title: 'Web Design & Development Congleton, Cheshire',
      bodyAttrs: {class: 'category'},
      meta: [
          {hid: 'og:title', name: 'og:title', content: 'Web Design & Development Congleton, Cheshire'},
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
