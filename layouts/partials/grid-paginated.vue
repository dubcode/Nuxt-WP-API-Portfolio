<template>
    <div class="row">
        <div class="grid grid--row">
            <router-link :to="{ path: '/posts/'+ post.id +'/' + post.slug}" class="grid__tile grid--row" v-for="post in displayedPosts" :key="post.id">
                <div class="grid__tile__thumb grid--row">
                    <img :src="post.images.large" :alt="post.title.rendered" :title="post.title.rendered">
                </div>
                <div class="grid__tile__box grid--row"></div>
                <div class="grid__tile__content">
                    <div class="grid--row">
                        <h3>{{post.title.rendered}}</h3>
                        <svg version="1.1" class="hr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 1920 46.303" enable-background="new 0 0 1920 46.303" xml:space="preserve">
                        <line class="hr-hr" fill="none" stroke="#E6E6E6" stroke-width="2" stroke-miterlimit="10" x1="1920" y1="26.768" x2="0" y2="26.768"/>
                        <polygon class="hr-tri" fill="none" stroke="#E6E6E6" stroke-width="2" stroke-miterlimit="10" points="984.552,1 959.552,44.303 
                        934.552,1 "/>
                        </svg>
                        <div v-html="post.excerpt.rendered" class="grid__tile__excerpt"></div>
                        <div class="grid__button">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 137 39" enable-background="new 0 0 137 39" xml:space="preserve">
                            <rect class="grid__button__overlay" y="1" fill="#fff" width="136" height="38"/>
                            <rect class="grid__button__bdr1" x="0.5" y="0.5" fill="none" stroke="#fff" stroke-miterlimit="10" width="136" height="38"/>
                            <rect class="grid__button__bdr2" x="0.5" y="0.5" fill="none" stroke="#fff" stroke-miterlimit="10" width="136" height="38"/>
                            </svg>
                            <span class="grid__button__span">Explore</span>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="pager">
            <button type="button" v-if="page != 1" @click="page--"> prev </button>
            <button type="button" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button>
            <button type="button" @click="page++" v-if="page < pages.length"> next </button>
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
      perPage: 6,
      pages: []
    }
  },

  //initial state methods
  methods: {

    //get posts
    getPosts() {
      axios
        .get(process.env.baseUrl + '?categories=8')
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







.grid {overflow: hidden; background: rgba(0,0,0,1);}
.grid--row{display: block; float: left; width: 100%; overflow: hidden;}
.grid__tile {position: relative; height: calc(100vh);} 
.grid__tile__thumb{position: absolute;  left: 0; top: 0; height: 100vh; overflow: hidden;}
.grid__tile img{ opacity: 1; display: block; float: left;height: 100%; width: auto; transform: scale(1.3) translateX(10%); transition: transform ease 0.5s;}
.grid__tile:hover img{ opacity: 0.9; transform: scale(1.45) ; transition: transform ease 0.5s;} 
.grid__tile__box{position: absolute; background: rgba(0,0,0,0.7); height: 100%; width: 100%; top: 0; left: 0; transform: scale(1); z-index: 2; transition: transform ease 0.5s;}
.grid__tile__content{padding: 2em; position: absolute; height: 80%; width: 80%; top: 10%; left: 10%; z-index: 3; text-align: center; display: flex; align-items: center; justify-content: center; transition: all ease 0.5s;}
.grid__tile h3{text-align: center;transform: translateY(3em);  margin: 0 0 0.25em 0; color: #fff; display: inline-block; font-size: 2em; text-transform: uppercase; letter-spacing: 4px; line-height: 1em; font-family: 'Playfair Display', serif; font-weight: 400;transition: all ease 0.5s;}
.grid__tile .hr{margin: 0.25em 0;transform: translateY(5em); transition: all ease 0.5s;}
.grid__tile__excerpt{color: #fff; font-weight: 400; font-size: 1.2em; line-height: 1.4em; margin: 0; opacity: 0;padding:0; transform: translateY(-50px); padding: 2em 0; transition: all ease 0.5s;}
.grid__tile__excerpt p{text-align: center;}
.grid__tile .hr-tri{transform: translateY(-305px); transition: all ease 0.5s;}


.grid__button{position: relative; display: block; height: auto; margin: 0 auto; width: 140px; opacity: 0; transform: translateY(50px); transition: all ease 0.5s; }
.grid__button__bdr1{stroke-dasharray: 350; stroke-dashoffset: 0; transition: all ease 0.5s;}
.grid__button__bdr2{stroke-dasharray: 350; stroke-dashoffset: 350; transition: all ease 0.5s; transition-delay: 0.5s;}
.grid__button__overlay{transform: translateX(-100%); transition: all ease 0.5s; transition-delay: 0.25s;}
.grid__button__span{color: #ccc; font-size: 1em; font-weight: 400; text-transform: uppercase; position: absolute; top: 0; left: 0; height: 100%; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center;}

.grid__tile:hover .grid__button{cursor: pointer;}
.grid__tile:hover .grid__button__bdr1{stroke-dashoffset: 350; transition: all ease 0.5s;}
.grid__tile:hover .grid__button__bdr2{stroke-dashoffset: 0; transition: all ease 0.5s; transition-delay: 0.5s;}
.grid__tile:hover .grid__button__overlay{transform: translateX(100%); transition: all ease 0.5s; transition-delay: 0.25s; }

.grid__tile:hover .grid__tile__box{transform: scale(0.9); transition: transform ease 0.5s;}
.grid__tile:hover h3,
.grid__tile:hover .grid__tile__excerpt{opacity: 1; transform: translateY(0); transition: all ease 0.5s;}
.grid__tile:hover .hr-tri{transform: translateY(0); transition: all ease 0.5s;}
.grid__tile .hr-hr{transform: scaleX(1) translateX(0);transition: all ease 0.5s;}
.grid__tile:hover .hr-hr{transform: scaleX(0.5) translateX(50%); transition: all ease 0.5s;}
.grid__tile:hover .grid__button{transform: translateY(0px); opacity: 1; transition: all ease 0.5s; }
.grid__tile:hover .hr{transform: translateY(15px); transition: all ease 0.5s;}

.pager{
    display: block;
    padding: 1em;
    position: absolute;
    bottom: 0;
    left: 0; 
    z-index: 99;
}
.pager button{background: transparent; opacity: 0.7; display: block; float: left; margin: 0 1em 0 0; border: 1px solid #fff; padding: 1em; color: #fff; }
.pager button:hover{opacity: 1; cursor: pointer;}

@media only screen and (min-width : 768px) {
.grid__tile img{height: auto; width: 100%;}
}

@media only screen and (min-width : 1024px) {
.grid__tile__content{padding: 1em;}
.grid__tile h3{font-size: 2.4em;}
}
@media only screen and (min-width : 1300px) {
.grid__tile {width: 33.33%;} 
.grid__tile img{height: 100%; width: auto;}
}
</style>