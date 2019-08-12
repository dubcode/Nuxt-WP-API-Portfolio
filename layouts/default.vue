<template>
  <!--container-->
  <div class="container row" :class="{ 'scrolling': isScrollTop }">
    <Header/>
    <nuxt />
  </div>
  <!--container-->
</template>

<script>
import Header from './partials/header';



export default {
  components: {
    Header
  },
  name: 'ScrollTop',
  data() {
    return {
      // Define the default location of the scrollbar
      scrollTop: null,

      // Define the default state of the button
      isScrollTop: false
    }
  },
  props: {
    el: String
  },
  mounted() {
    // Listening for scrolling events
    window.addEventListener('scroll', () => {
      this.scrollTop = document.documentElement.scrollTop ||
                        window.pageYOffset ||
                        document.body.scrollTop ||
                        document.querySelector(this.el).scrollTop;

      // Control the hiding or display of scroll buttons
      if (this.scrollTop > 150) {
        this.isScrollTop = true;
      } else {
        this.isScrollTop = false;
      }
    }, true);
  },
  methods: {
    /**
     * Scroll to the top
     */
    scrollToTop() {
      let $this = this;

      // Return top animation effects
      setTimeout(function animation() {
        if ($this.scrollTop > 0) {
          setTimeout(() => {

            // Stepping speed
            $this.scrollTop = $this.scrollTop - 30;

            // Return to the top
            if(document.documentElement.scrollTop > 0) {
              document.documentElement.scrollTop = $this.scrollTop - 30;
            } else if (window.pageYOffset > 0) {
              window.pageYOffset = $this.scrollTop - 30;
            } else if (document.body.scrollTop > 0) {
              document.body.scrollTop = $this.scrollTop - 30;
            } else if (document.querySelector($this.el).scrollTop) {
              document.querySelector($this.el).scrollTop = $this.scrollTop - 30;
            }

            animation();
          }, 1);
        }
      }, 1);
    }
  }
};
</script>

<style>
.container{
    min-height: 100vh; 
    background-color: #111;}
</style>
