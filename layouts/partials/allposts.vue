<template>
<div class="blogs">
  <div class="blogs__blog" v-for="post in displayedPosts" :key="post.id">
      <div class="blog__thumb">
        <router-link :to="{ path: '/posts/'+ post.id +'/' + post.slug}">
          <img :src="post._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url" :alt="post.title.rendered" class="blog__image"/>
        </router-link>
      </div>
      <div class="blog__excerpt">
        <router-link :to="{ path: '/posts/'+ post.id +'/' + post.slug}">
          <h1 class="blog__title">{{post.title.rendered }}</h1> 
          <p><b>{{post.date}}</b></p>
          <p v-html="post.excerpt.rendered"></p>
          <div class="blog__button">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 137 39" enable-background="new 0 0 137 39" xml:space="preserve">
              <rect class="blog__button__overlay" y="1" fill="#fff" width="136" height="38"/>
              <rect class="blog__button__bdr1" x="0.5" y="0.5" fill="none" stroke="#fff" stroke-miterlimit="10" width="136" height="38"/>
              <rect class="blog__button__bdr2" x="0.5" y="0.5" fill="none" stroke="#fff" stroke-miterlimit="10" width="136" height="38"/>
              </svg>
              <span class="blog__button__span">Explore</span>
          </div>
        </router-link>
      </div>
      <div class="blog__hr">
          <svg version="1.1" class="hr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 1920 46.303" enable-background="new 0 0 1920 46.303" xml:space="preserve"><line fill="none" stroke="#999" stroke-width="1" stroke-miterlimit="10" x1="1920" y1="26.768" x2="0" y2="26.768"/><polygon fill="none" stroke="#999" stroke-width="1" stroke-miterlimit="10" points="984.552,1 959.552,44.303 934.552,1 "/></svg>
      </div>
  </div>
  <div class="pager">
    <div class="pager__ctr">
      <button type="button" v-if="page != 1" @click="page--"> prev </button>
      <button type="button" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button>
      <button type="button" @click="page++" v-if="page < pages.length"> next </button>
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
        .get(process.env.baseUrl + '?_embed')
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
.blogs{background: #111111; color: #fff; display: block; float: left; overflow: hidden;padding: 1em 0; width: 100%;}
.blogs:after {content: '';display: block;clear: both;}
.blogs__blog{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: ". excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt ." ". thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb ." ". hr hr hr hr hr hr hr hr hr hr hr hr hr .";
    grid-template-rows: minmax(max-content, min-content);
    grid-gap: 1em;
    padding: 1em 0;
}
.blog__thumb {position: relative; overflow: hidden; grid-area: thumb;}
.blog__image{height: auto; width: 100%;}
.blog__excerpt { grid-area: excerpt;}
.blog__title {
    text-align: left;
    font-size: 3em;
    line-height: 1.2em;
    letter-spacing: 2px;
    font-family: 'Playfair Display', serif;
    font-weight: 100;
    margin: 0 0 0.5em 0;
}
.blog__hr{display: block; padding: 2em 0; width: 100%; grid-area: hr;}
.blog__button{position: relative; display: block; height: auto; margin: 2em 0; width: 140px; }
.blog__button__bdr1{stroke-dasharray: 350; stroke-dashoffset: 0; transition: all ease 0.5s;}
.blog__button__bdr2{stroke-dasharray: 350; stroke-dashoffset: 350; transition: all ease 0.5s; transition-delay: 0.5s;}
.blog__button__overlay{transform: translateX(-100%); transition: all ease 0.5s; transition-delay: 0.25s;}
.blog__button__span{color: #ccc; font-size: 1em; font-weight: 400; text-transform: uppercase; position: absolute; top: 0; left: 0; height: 100%; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center;}
.blog__button:hover{cursor: pointer;}
.blog__button:hover .blog__button__bdr1{stroke-dashoffset: 350; transition: all ease 0.5s;}
.blog__button:hover .blog__button__bdr2{stroke-dashoffset: 0; transition: all ease 0.5s; transition-delay: 0.5s;}
.blog__button:hover .blog__button__overlay{transform: translateX(100%); transition: all ease 0.5s; transition-delay: 0.25s; }
.blogs p{color: #ccc; font-weight: 400; font-size: 1.2em; line-height: 1.7em; margin: 0 0 1em 0;}
.blogs a {color: #ccc; text-decoration: none;}

.pager{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: ". pg pg pg pg pg pg pg pg pg pg pg pg pg .";
    grid-template-rows: minmax(max-content, min-content);
    grid-gap: 1em;
    padding: 1em 0;
}

.pager__ctr{ grid-area: pg;}

.pager button{background: transparent; opacity: 0.7; display: block; float: left; margin: 0 1em 0 0; border: 1px solid #fff; padding: 1em; color: #fff; }
.pager button:hover{opacity: 1; cursor: pointer;}

@media only screen and (min-width : 768px) {
    .blog__title {font-size: 4.2em;}
}

@media only screen and (min-width : 1024px) {
    .blogs__blog{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas: ". thumb thumb thumb thumb thumb excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt ." ". hr hr hr hr hr hr hr hr hr hr hr hr hr .";
        grid-gap: 4em;
        padding: 2em 0;
    }
    .blogs__blog:nth-child(even){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas: ". excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt thumb thumb thumb thumb thumb ." ". hr hr hr hr hr hr hr hr hr hr hr hr hr .";
    }
    .blog__thumb {align-self: center; justify-self: left;}
    .blog__excerpt {align-self: center; justify-self: left;}
    .blog__title {font-size: 3em;}
    .blog__hr{padding: 0;}
    .blog__button{margin: 2em 0 0 0;}
}

@media only screen and (min-width : 1140px) {
    .blogs__blog{
        grid-template-areas: ". . thumb thumb thumb thumb excerpt excerpt excerpt excerpt excerpt excerpt excerpt . ." ". . hr hr hr hr hr hr hr hr hr hr hr . .";
    }
    .blogs__blog:nth-child(even){
        grid-template-areas: ". . excerpt excerpt excerpt excerpt excerpt excerpt excerpt thumb thumb thumb thumb . ." ". . hr hr hr hr hr hr hr hr hr hr hr . .";
    }
    .pager{
    grid-template-areas: ". . pg pg pg pg pg pg pg pg pg pg pg . .";
}
}
</style>
