<template>
  <div class="bg" :class="{ whenProjects: currentPage === 'projects' }">
    <Navbar @page-switched="pageSwitch" />
    <Homepage v-if="currentPage === 'homepage'" />
    <Projects v-if="currentPage === 'projects'" />
    <About v-if="currentPage === 'about'" />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Homepage from './components/Homepage.vue';
import Projects from './components/Projects.vue';
import About from './components/About.vue';

export default {
  components: { Navbar, Homepage, Projects, About },
  data() {
    return {
      currentPage: 'homepage',
    };
  },
  methods: {
    pageSwitch(page) {
      if (page === 'projects') {
        this.currentPage = 'projects';
      }
      if (page === 'homepage') {
        this.currentPage = 'homepage';
      }
      if (page === 'about') {
        this.currentPage = 'about';
      }
    },
  },
};
</script>
<style>
@font-face {
  font-family: 'Ambit';
  src: url('src/assets/fonts/ambit-cufonfonts/Ambit.otf');
}

@font-face {
  font-family: 'Syne';
  src: url('src/assets/fonts/Syne-Regular.ttf');
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-size: 10px;
  font-family: 'Syne', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

.bg {
  background-image: url('assets/images/Backgroundv4_1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  overflow: hidden;
}

.whenProjects {
  overflow: visible;
  background: #1f3d3c;
  height: auto;
}

@media only screen and (min-width: 2560px) {
  html {
    font-size: 14px;
  }
}

@media only screen and (max-width: 850px) {
  .bg {
    background-image: url('assets/images/BackgroundMobilev4_1.jpg');
    height: 40vh;
    background-size: 150%;
    background-position: center bottom;
  }

  .whenProjects {
    overflow: visible;
    background: #1f3d3c;
    height: auto;
  }
}
</style>
