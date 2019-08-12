<template>
<div class="row">
    <button class="hamburger hamburger--collapse" type="button" :class="{isActive: menuClose}" @click="menuClose=!menuClose">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>
    <div id="menu" :class="{menuActive: menuClose}">
        <ul>
            <li><nuxt-link @click.native="menuClose=!menuClose" to="/">Home</nuxt-link></li>
            <li><nuxt-link @click.native="menuClose=!menuClose" to="/services">Services</nuxt-link></li>
            <li><nuxt-link @click.native="menuClose=!menuClose" to="/case-studies">Case Studies</nuxt-link></li>
            <li><nuxt-link @click.native="menuClose=!menuClose" to="/blog">Blog</nuxt-link></li>
            <li><nuxt-link @click.native="menuClose=!menuClose" to="/contact">Contact</nuxt-link></li>
        </ul>
    </div>
    <header class="header" id="top">
        <nuxt-link to="/" class="header__button">Ultra Brands</nuxt-link>
        <nav>
            <ul>
                <li>
                    <nuxt-link to="/services" >Services</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/case-studies">Case Studies</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/blog">Blog</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/contact">Contact</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="header__back"></div>
        <div class="header__logo__wrap">


            <svg version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="137.996px" height="119.508px" viewBox="525.144 224.205 137.996 119.508"
	 enable-background="new 525.144 224.205 137.996 119.508" xml:space="preserve">
<g id="icon">
	
		<line id="ui-hr" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-miterlimit="0" x1="646.525" y1="299.337" x2="542.243" y2="299.337"/>
	<polygon id="ui-tri" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-miterlimit="0" points="661.408,225.205 
		594.144,341.713 526.876,225.205 	"/>
</g>
</svg>
        </div>
    </header>
</div>
</template>

<script>
export default {
    data () {
        return {
        menuClose: false
        }
    }
}
</script>

<style scoped>
/*above the fold CSS*/
.header{display: block; float: left; width: 100%; height: 100px; padding: 1em 0; position: fixed; top: 0; left: 0;z-index: 999; transition: all ease 0.5s;} 
.header__back{background:rgba(0,0,0,1); position: fixed; top: 0; left: 0; z-index: 1; height: 50px; width: 100vw; transform: translateY(-60px); transition: all ease 0.5s;}
.header nav{display: none;}
.header__logo__wrap{position: fixed; top:12px; left: 0; z-index: 3; height: auto; width: 100vw;}
#logo{display: block; height: auto; margin: 0 auto; width: 30px; }
#ui-tri{animation: anim8-03 2s; stroke-dasharray: 404; stroke-dashoffset: 404; animation-fill-mode: forwards; animation-delay: .5s;}
#ui-hr{animation: anim8-04 2s; stroke-dasharray: 110; stroke-dashoffset: 110; animation-fill-mode: forwards; animation-delay: .5s;}


.container.scrolling .header__back,
body.single .header__back{transform: translateY(0px); transition: all ease 0.5s;}
.header__button{opacity: 0.5;display: block; height: 86px; position: fixed; top: 0; left: calc(50% - 125px); text-indent: -9999px;width: 260px;  z-index: 9999}
.container.scrolling .header__button,
body.single .header__button{height: 50px; left: calc(50% - 20px); width: 50px;}

/*Hamburger*/
.hamburger{font:inherit;display:inline-block;overflow:visible;margin:0;padding:15px;cursor:pointer;transition-timing-function:linear;transition-duration:.15s;transition-property:opacity,filter;text-transform:none;color:inherit;border:0;background-color:transparent}.hamburger:hover{opacity:.7}.hamburger-box{position:relative;display:inline-block;width:40px;height:24px}.hamburger-inner{top:50%;display:block;margin-top:-2px}.hamburger-inner,.hamburger-inner:after,.hamburger-inner:before{position:absolute;width:40px;height:2px;transition-timing-function:ease;transition-duration:.15s;transition-property:transform;border-radius:4px;background-color:#000}.hamburger-inner:after,.hamburger-inner:before{display:block;content:""}.hamburger-inner:before{top:-10px}.hamburger-inner:after{bottom:-10px}.hamburger--collapse .hamburger-inner{top:auto;bottom:0;transition-delay:.13s;transition-timing-function:cubic-bezier(.55,.055,.675,.19);transition-duration:.13s}.hamburger--collapse .hamburger-inner:after{top:-20px;transition:top .2s cubic-bezier(.33333,.66667,.66667,1) .2s,opacity .1s linear}.hamburger--collapse .hamburger-inner:before{transition:top .12s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .13s cubic-bezier(.55,.055,.675,.19)}.hamburger--collapse.isActive .hamburger-inner{transition-delay:.22s;transition-timing-function:cubic-bezier(.215,.61,.355,1);transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--collapse.isActive .hamburger-inner:after{top:0;transition:top .2s cubic-bezier(.33333,0,.66667,.33333),opacity .1s linear .22s;opacity:0}.hamburger--collapse.isActive .hamburger-inner:before{top:0;transition:top .1s cubic-bezier(.33333,0,.66667,.33333) .16s,transform .13s cubic-bezier(.215,.61,.355,1) .25s;transform:rotate(-90deg)}
.hamburger{position: fixed; top: 12px; right: 10px; z-index: 1000; padding: 0;}
.hamburger-inner, .hamburger-inner:after, .hamburger-inner:before {background-color: #999; transition: all ease .3s;}
body.sticky .hamburger-inner, body.sticky .hamburger-inner:after, body.sticky .hamburger-inner:before {background-color: #999; transition: all ease .3s;}

/*Mobile Menu*/
#menu{font-family: 'Montserrat', sans-serif;background: #111; min-height: 100vh; position: fixed; opacity: 0; top: -100vh; left: 0; z-index: 998; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center; transition: opacity ease 1s;}
#menu a{line-height: 3em; font-size: 2.4em; font-weight: 100; color: #fff; text-decoration: none;} 
#menu.menuActive{opacity: 1; top: 0; transition: opacity ease .3s;}
#menu a:hover{color: #666; }
#menu ul{list-style-type: none; padding: 0; margin: 0;}
#menu li{ font-weight: 100; }

@keyframes anim8-01 {0%   {width: 0%;} 100% {width: 100%;}}
@keyframes anim8-01-r {0%   {width: 100%;} 100% {width: 0%;}}
@keyframes anim8-02 {0%   {opacity:0;} 100% {opacity:1;}}
@keyframes anim8-02-r {0%   {opacity:1;} 100% {opacity:0;}}
@keyframes anim8-03 {0%  {stroke-dashoffset: 404;} 100% {stroke-dashoffset: 0;} }
@keyframes anim8-04 {0%  {stroke-dashoffset: 110;}100% {stroke-dashoffset: 0;}}
@keyframes anim8-05 {0%   {opacity: 0; transform: translate(0, -50px);} 100% {opacity: 1; transform: translate(0, 0px);}}
@keyframes anim8-05-r {0%  {opacity: 1; transform: translate(0, 0);} 100% {opacity: 0; transform: translate(0, -52px);}}

@media only screen and (min-width : 1024px) {
    .header{height: auto;}
    .header nav{display: block; position: fixed; top: 0; left: 0; z-index: 5; height: 50px; width: 100vw;}
    .header nav ul{padding: 10px 4em 0 0;position: relative; display: block; float: right; }
    .header nav li{position: relative; display: block; float: left; line-height: 30px; height: 30px;}
    .header nav li:before{top: 0; padding: 1em 0; left: 0; position: absolute; content: ""; display: block; height: 100%; width: 0%; background: #fff; z-index: -1; transition: all ease 0.3s;}
    .header nav li:hover:before{width: 100%;transition: all ease 0.3s;}
    .header nav li a{padding: 0 1em; color: #fff; font-size: .9em; letter-spacing: 4px; text-transform: uppercase;font-weight: 400; text-decoration: none; display: block; transition: all ease 0.5s;}
    .header nav li:hover a{color: #000; transition: all ease 0.5s;}
    .hamburger{display:none;}
}
</style>