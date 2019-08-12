<template>
<div class="envelopes">

    <div class="envelopes__envelope" v-for="post in displayedPosts.slice().reverse()" :key="post.id">
        <div class="envelope__thumb">
            <img :src="post.images.medium" :alt="post.title.rendered" :title="post.title.rendered" class="envelope__image"/>
        </div>
        <div class="envelope__excerpt">
            <h2 class="envelope__title" v-html="post.title.rendered"></h2> 
            <div v-html="post.excerpt.rendered" class="envelope__excerpt__p"></div>
            <router-link :to="{path: '/posts/'+ post.id +'/' + post.slug}" class="envelope__button">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 137 39" enable-background="new 0 0 137 39" xml:space="preserve">
                <rect class="envelope__button__overlay" y="1" fill="#000000" width="136" height="38"/>
                <rect class="envelope__button__bdr1" x="0.5" y="0.5" fill="none" stroke="#000000" stroke-miterlimit="10" width="136" height="38"/>
                <rect class="envelope__button__bdr2" x="0.5" y="0.5" fill="none" stroke="#000000" stroke-miterlimit="10" width="136" height="38"/>
                </svg>
                <span class="envelope__button__span">Explore</span>
            </router-link>
        </div>
        <div class="envelope__hr">
            <svg version="1.1" class="hr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1920 46.303" enable-background="new 0 0 1920 46.303" xml:space="preserve"><line fill="none" stroke="#999" stroke-width="1" stroke-miterlimit="10" x1="1920" y1="26.768" x2="0" y2="26.768"/><polygon fill="none" stroke="#999" stroke-width="1" stroke-miterlimit="10" points="984.552,1 959.552,44.303 934.552,1 "/></svg>
        </div>
    </div>

</div>
</template>

<script>
import axios from 'axios'

export default {
data() {
    return {
      posts: [],
      //global variable set for consistent URL in main js
      page: 1,
      perPage: 2,
      pages: []
    }
  },

  //initial state methods
  methods: {

    //get posts
    getPosts() {
      axios
        .get(process.env.baseUrl + '?categories=14')
        .then(response => {
          this.posts = response.data;
        })
        .catch(response => {
          console.log(response);
        });
    },


    //set pages
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },

    //paginate
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    }
  },

  //created
  created() {
    this.getPosts();
  },

  //watch
  watch: {
    posts() {
      this.setPages();
    }
  },

  //computed
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
    }
  }
  

}
</script>

<style scoped>
.envelopes{background: #fff; color: #111111; display: block; float: left; padding: 1em 0; width: 100%;}
.envelopes:after {content: '';display: block;clear: both;}
.envelopes__envelope{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: ". excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt ." ". thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb ." ". hr hr hr hr hr hr hr hr hr hr hr hr hr .";
    grid-template-rows: minmax(max-content, min-content);
    grid-gap: 1em;
    padding: 1em 0;
}
.envelope__thumb {position: relative; overflow: hidden; grid-area: thumb;}
.envelope__image{height: auto; width: 100%;}
.envelope__excerpt { grid-area: excerpt;}
.envelope__title {
    text-align: left;
    font-size: 2em;
    line-height: 1.2em;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    margin: 0 0 0.5em 0;
}
.envelope__hr{display: block; padding: 2em 0; width: 100%; grid-area: hr;}
.envelope__excerpt__p{color: #111; font-weight: 400; font-size: 1.2em; line-height: 1.7em; display: block;}
p a{color: #111;}


.envelope__button{position: relative; display: block; height: auto; margin: 2em 0; width: 140px; }
.envelope__button__bdr1{stroke-dasharray: 350; stroke-dashoffset: 0; transition: all ease 0.5s;}
.envelope__button__bdr2{stroke-dasharray: 350; stroke-dashoffset: 350; transition: all ease 0.5s; transition-delay: 0.5s;}
.envelope__button__overlay{transform: translateX(-100%); transition: all ease 0.5s; transition-delay: 0.25s;}
.envelope__button__span{color: #000; font-size: 1em; font-weight: 400; text-transform: uppercase; position: absolute; top: 0; left: 0; height: 100%; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center;}
.envelope__button:hover{cursor: pointer;}
.envelope__button:hover .envelope__button__bdr1{stroke-dashoffset: 350; transition: all ease 0.5s;}
.envelope__button:hover .envelope__button__bdr2{stroke-dashoffset: 0; transition: all ease 0.5s; transition-delay: 0.5s;}
.envelope__button:hover .envelope__button__overlay{transform: translateX(100%); transition: all ease 0.5s; transition-delay: 0.25s; }


@media only screen and (min-width : 768px) {
    .envelope__title {font-size: 2.5em;}
}

@media only screen and (min-width : 1024px) {
    .envelopes__envelope{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas: ". thumb thumb thumb thumb thumb excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt ." ". hr hr hr hr hr hr hr hr hr hr hr hr hr .";
        grid-gap: 4em;
        padding: 2em 0;
    }
    .envelopes__envelope:nth-child(even){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas: ". excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt thumb thumb thumb thumb thumb ." ". hr hr hr hr hr hr hr hr hr hr hr hr hr .";
    }
    .envelope__thumb {align-self: center; justify-self: left;}
    .envelope__excerpt {align-self: center; justify-self: left;}
    .envelope__title {font-size: 3em;}
    .envelope__hr{padding: 0;}
    .envelope__button{margin: 2em 0 0 0;}
}

@media only screen and (min-width : 1140px) {
    .envelopes__envelope{
        grid-template-areas: ". . thumb thumb thumb thumb excerpt excerpt excerpt excerpt excerpt excerpt excerpt . ." ". . hr hr hr hr hr hr hr hr hr hr hr . .";
    }
    .envelopes__envelope:nth-child(even){
        grid-template-areas: ". . excerpt excerpt excerpt excerpt excerpt excerpt excerpt thumb thumb thumb thumb . ." ". . hr hr hr hr hr hr hr hr hr hr hr . .";
    }
}
</style>
