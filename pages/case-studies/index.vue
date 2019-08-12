<template>
    <div class="top-pad-row">
      <Cases/>
    </div>
</template>

<script>
import axios from 'axios';
import Cases from '~/layouts/partials/case-studies';
export default {
    components: {
    Cases
    },
  head(){
    return{
      title: 'Web Design & Development Case Studies',
      bodyAttrs: {class: 'category'},
      meta: [
          {hid: 'og:title', name: 'og:title', content: 'Web Design & Development Case Studies'},
          {hid: 'description', name: 'description', content: 'A closer look at some of my web design and development projects.'},
          {hid: 'og:description', name: 'og:description', content: 'A closer look at some of my web design and development projects.'},
          {name: 'keywords', content: 'web designer, web developer, cheshire, front end, javascript, php, WordPress'}
      ]
    }
  }
}

</script>

<style>

</style>
