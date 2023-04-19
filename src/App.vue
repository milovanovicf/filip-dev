<template>
  <div class="bg">
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },
  watch: {
    $route(route) {
      if (route.path.includes('/projects')) {
        document.querySelector('.bg').classList.add('whenProjects');
      } else {
        document.querySelector('.bg').classList.remove('whenProjects');
      }
    },
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Chatter',
          description:
            'Dating app that provides new and exciting ways to find your significant other.',
          thumbnail: new URL(
            `/src/assets/images/chatter/Preview.png`,
            import.meta.url
          ),
          client: 'Personal',
          technologies: 'Figma',
          content: {
            mainImage: new URL(
              `/src/assets/images/chatter/MainImage.png`,
              import.meta.url
            ),
            secondary1: new URL(
              `/src/assets/images/chatter/Secondary1.png`,
              import.meta.url
            ),
            secondary2: new URL(
              `/src/assets/images/chatter/Secondary2.png`,
              import.meta.url
            ),
            secondary3: new URL(
              `/src/assets/images/chatter/Secondary3.png`,
              import.meta.url
            ),
            secondary4: new URL(
              `/src/assets/images/chatter/Secondary4.png`,
              import.meta.url
            ),
            nextProject: new URL(
              `/src/assets/images/chatter/NextProject.png`,
              import.meta.url
            ),
          },
        },
        {
          id: 2,
          name: 'Learn English Bre!',
          description:
            'Online English language learning platform for Serbo-Croatian speaking people.',
          thumbnail: new URL(
            `/src/assets/images/learnEnglishBre/Preview.png`,
            import.meta.url
          ),
          client: 'Personal',
          technologies: 'Figma',
          content: {
            mainImage: new URL(
              `/src/assets/images/learnEnglishBre/MainImage.png`,
              import.meta.url
            ),
            secondary1: new URL(
              `/src/assets/images/learnEnglishBre/Secondary1.png`,
              import.meta.url
            ),
            secondary2: new URL(
              `/src/assets/images/chatter/Secondary2.png`,
              import.meta.url
            ),
            secondary3: new URL(
              `/src/assets/images/chatter/Secondary3.png`,
              import.meta.url
            ),
            secondary4: new URL(
              `/src/assets/images/chatter/Secondary4.png`,
              import.meta.url
            ),
            nextProject: new URL(
              `/src/assets/images/learnEnglishBre/NextProject.png`,
              import.meta.url
            ),
          },
        },
      ],
    };
  },
  provide() {
    return {
      projects: this.projects,
    };
  },
};
</script>
<style>
@font-face {
  font-family: 'Syne';
  src: url('@/assets/fonts/Syne-Regular.ttf');
  font-display: swap;
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

html {
  scroll-behavior: smooth;
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
