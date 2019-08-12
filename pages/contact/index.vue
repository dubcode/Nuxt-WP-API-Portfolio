<template>
<div class="row">
    <div class="singles">
        <div class="singles__single">
            <div class="single__thumb">
               <img :src="this.thumb" alt="this.title" class="single__image"/>
            </div>
            <div class="single__excerpt">
                <h1>{{this.title}}</h1>
                <div v-html="this.content"></div>
            </div>
            <div class="single__hr">
                <svg version="1.1" class="hr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 1920 46.303" enable-background="new 0 0 1920 46.303" xml:space="preserve"><line fill="none" stroke="#999" stroke-width="1" stroke-miterlimit="10" x1="1920" y1="26.768" x2="0" y2="26.768"/><polygon fill="none" stroke="#999" stroke-width="1" stroke-miterlimit="10" points="984.552,1 959.552,44.303 934.552,1 "/></svg>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    
    //meta
    head () {
        return {
            title: this.title,
            bodyAttrs: {class: 'single'},
            meta: [
            { hid: 'description', name: 'description', content: this.excerpt},
            {hid: 'og:title', name: 'og:title', content: this.title},
            {hid: 'og:description', name: 'og:description', content: this.excerpt}
            ]
        }
    },
   
    //post data
    data() {
        return {
        id: this.$route.params.id,
        baseUrl: 'https://pwa.ultr4.co.uk/admin/wp-json/wp/v2/pages/75?_embed',
      //global variable set for consistent URL in main js
        posts: [],
        post: '',
        title:   '',
        thumb:   '',
        content:   '',
        date:   '',
        isActive: 'isActive'
        };
    },

  //post methods
  methods: {

    //get single post
    getSingle: function() {
    var self = this;
    this.id = this.$route.params.id;
    axios.get(this.baseUrl, {

    })

    .then(response => {
        this.title = response.data.title.rendered;
        this.content = response.data.content.rendered;
        this.thumb = response.data._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url;
    })

    .catch(response => {
     console.log(response);
    });
    
    }
  },
  
  
    mounted: function () {
    this.getSingle();
    window.removeEventListener('scroll', this.onScroll);
    },

}

</script>

<style>
#logo-txt-2{animation: anim8-05-5 .8s; animation-fill-mode: forwards;}
#back-plate{animation: anim8-01-r .5s; animation-fill-mode: forwards;}
#logo-txt-1{animation: anim8-02-r .5s; animation-fill-mode: forwards;}
.header__back{transform: translateY(0px); transition: all ease 0.5s; transition-delay: 0.5s;}
.header__button{opacity: 0.5;display: block; height: 86px; position: fixed; top: 0; left: calc(50% - 125px); text-indent: -9999px;width: 260px;  z-index: 9999}
.header__button{height: 50px; left: calc(50% - 20px); width: 50px;}

.singles{background: #fff;color: #111; display: block; float: left; padding: 12em 0 1em 0; width: 100%; min-height: 100vh;}
.singles:after {content: '';display: block;clear: both;}
.singles__single{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: ". excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt ." ". thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb ." ". hr hr hr hr hr hr hr hr hr hr hr hr hr .";
    grid-template-rows: minmax(max-content, min-content);
    grid-gap: 1em;
    padding: 1em 0;
}
.single__thumb {position: relative; overflow: hidden; grid-area: thumb;}
.single__image{height: auto; width: 100%;}
.single__excerpt { grid-area: excerpt;}
.singles h1,
.singles h2,
.singles h3,
.singles h4 {
    text-align: left;
    font-size: 3em;
    line-height: 1.2em;
    letter-spacing: 2px;
    font-family: 'Playfair Display', serif;
    font-weight: 100;
    margin: 0 0 0.5em 0;
}
.singles h2,
.singles h3,
.singles h4 {font-size: 2em; font-weight: 300; font-family: 'Montserrat', sans-serif;}
.single__hr{display: block; padding: 2em 0; width: 100%; grid-area: hr;}
.singles p{color: #111; font-weight: 400; font-size: 1.2em; line-height: 1.7em; margin: 0 0 1em 0;}
.singles li{color: #111; font-weight: 400; font-size: 1.5em; line-height: 1.7em;}
.singles ul{margin: 0 0 2em 2em;}
.singles p a,
.singles li a{color: #111;}


.single__button{position: relative; display: block; height: auto; margin: 2em 0; width: 140px; }
.single__button__bdr1{stroke-dasharray: 350; stroke-dashoffset: 0; transition: all ease 0.5s;}
.single__button__bdr2{stroke-dasharray: 350; stroke-dashoffset: 350; transition: all ease 0.5s; transition-delay: 0.5s;}
.single__button__overlay{transform: translateX(-100%); transition: all ease 0.5s; transition-delay: 0.25s;}
.single__button__span{color: #fff; font-size: 1em; font-weight: 400; text-transform: uppercase; position: absolute; top: 0; left: 0; height: 100%; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center;}
.single__button:hover{cursor: pointer;}
.single__button:hover .single__button__bdr1{stroke-dashoffset: 350; transition: all ease 0.5s;}
.single__button:hover .single__button__bdr2{stroke-dashoffset: 0; transition: all ease 0.5s; transition-delay: 0.5s;}
.single__button:hover .single__button__overlay{transform: translateX(100%); transition: all ease 0.5s; transition-delay: 0.25s; }

@media only screen and (min-width : 768px) {
    .singles h1 {font-size: 4.2em;}
    .singles h2,
    .singles h3,
    .singles h4 {font-size: 2.2em;}
    }

@media only screen and (min-width : 1024px) {
    .singles__single{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas: ". thumb thumb thumb thumb thumb excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt ." ". hr hr hr hr hr hr hr hr hr hr hr hr hr .";
        grid-gap: 4em;
        padding: 0;
    }
    .singles__single:nth-child(even){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas: ". excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt thumb thumb thumb thumb thumb ." ". hr hr hr hr hr hr hr hr hr hr hr hr hr .";
    }
    .single__thumb {align-self: top; justify-self: left;}
    .single__excerpt {align-self: center; justify-self: left;}
    .single__hr{padding: 0;}
    .single__button{margin: 2em 0 0 0;}
}

@media only screen and (min-width : 1140px) {
    .singles__single{
        grid-template-areas: ". . thumb thumb thumb thumb excerpt excerpt excerpt excerpt excerpt excerpt excerpt . ." ". . hr hr hr hr hr hr hr hr hr hr hr . .";
    }
    .singles__single:nth-child(even){
        grid-template-areas: ". . excerpt excerpt excerpt excerpt excerpt excerpt excerpt thumb thumb thumb thumb . ." ". . hr hr hr hr hr hr hr hr hr hr hr . .";
    }
}
</style>
