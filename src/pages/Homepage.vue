<template>
  <main class="homepage">
    <div class="title grid-col-span-2">
      <h3>Filip Milovanovic</h3>
      <h3>Web Developer & Ui/ux designer</h3>
      <h3>Belgrade, Serbia</h3>
    </div>
    <div class="about grid-col-span-2">
      <p class="subtitle">About</p>
      <p class="content">
        Web developer who cares deeply about user experience. Serious passion
        for UI design and new technologies. Fan of space, sports and all things
        art.
      </p>
    </div>
    <div class="goals grid-col-span-2">
      <p class="subtitle">Goals</p>
      <p class="content">Free the world from bad design.</p>
    </div>
    <div class="technologies">
      <ul>
        <p class="subtitle">Development</p>
        <li>Vuejs</li>
        <li>TypeScript</li>
        <li>Ruby on Rails</li>
        <li>PHP</li>
        <li>WordPress</li>
        <li>Sass</li>
      </ul>
      <ul>
        <p class="subtitle">Design</p>
        <li>Photoshop</li>
        <li>Illustrator</li>
        <li>Figma</li>
      </ul>
    </div>
    <p class="button-first-text grid-col-span-2">
      Check out my work <router-link to="/projects">here</router-link>. Write me
      an email or message me on
      <a href="https://www.linkedin.com/in/filip-milovanovic-b8272a218/"
        >LinkedIn</a
      >
      or <a href="https://www.instagram.com/filip.jpeg/">Instagram</a>. I'm
      always interested in working on ambitious projects with positive people.
    </p>
    <a
      href="mailto:filip.milovanovic.dev@gmail.com"
      class="button grid-col-span-2"
      >filip.milovanovic.dev@gmail.com</a
    >
    <p class="button-second-text grid-col-span-2">
      © 2023 Filip Milovanovic. All rights reserved.
    </p>
  </main>
</template>

<style lang="scss" scoped>
.homepage {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0 15rem;
  color: #fff;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 12rem);
  grid-gap: 1.5rem;

  h3 {
    font-size: 2.7rem;
    letter-spacing: 0.1rem;
    line-height: 3rem;
    text-transform: uppercase;

    &:nth-child(2) {
      padding-right: 20rem;
    }
  }

  p {
    font-size: 1.9rem;
    line-height: 1.8rem;
  }

  ul {
    padding-bottom: 5rem;
  }

  li {
    font-size: 1.9rem;
    line-height: 2.3rem;
  }

  a {
    font-size: 1.9rem;
    color: #fff;
    font-style: italic;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #000;
    }
  }

  .grid-col-span-2 {
    grid-column: span 2;
  }

  .about {
    grid-row: 2;
  }

  .goals {
    grid-row: 3;
  }

  .technologies {
    grid-row: 1 / span 2;
    grid-column: 4;
  }

  .button-first-text {
    margin: 0 3rem;
    grid-column: 5 / span 2;
    line-height: 2.3rem;
    letter-spacing: 0.06rem;
  }

  .button {
    grid-row: 2;
    grid-column: 5 / span 2;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-decoration: none;
    color: #000;
    margin: 2rem;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
    font-style: normal;

    &:hover {
      color: #fff;
      background-color: #000;
    }
  }

  .button-second-text {
    margin: 0 3rem;
    grid-column: 5 / span 2;
  }

  .subtitle {
    font-size: 1.7rem;
    font-weight: 800;
    padding-bottom: 1rem;
    letter-spacing: 0.2rem;
  }

  .content {
    padding-right: 10rem;
    letter-spacing: 0.06rem;
    line-height: 2.3rem;
  }
}

@media only screen and (max-width: 1600px) {
  .homepage {
    margin: 0 9rem;
    grid-gap: 0.5rem;

    h3 {
      &:nth-child(2) {
        padding-right: 10rem;
      }
    }

    .content {
      padding-right: 5rem;
    }

    ul {
      padding-bottom: 3rem;
    }
  }
}

@media only screen and (max-width: 1400px) {
  .homepage {
    display: flex;
    flex-direction: column;
    width: 45%;
    position: relative;

    .title,
    .goals,
    .about {
      padding-bottom: 2rem;
    }

    .button {
      font-size: 1.7rem;
      padding: 3rem 2rem;
      margin: 2rem 0;
      width: max-content;
    }

    .button-first-text,
    .button-second-text {
      margin: 0 0 2rem 0;
    }
    .content {
      padding-right: 7rem;
    }
  }
}

@media only screen and (max-width: 850px) {
  .homepage {
    display: block;
    margin: 0;
    padding: 2rem 5rem;
    top: 40%;
    bottom: auto;
    background-color: #2a4b49;
    width: auto;
    position: absolute;

    h3 {
      &:nth-child(2) {
        padding-right: 10rem;
      }
    }

    .title {
      color: #cc6d54;
      transform: translateY(-3.3rem);
    }

    .about,
    .goals,
    .technologies {
      padding-bottom: 4rem;
    }

    .subtitle::before {
      font-size: 2rem;
      color: #fff;
      content: '—';
      padding-right: 1rem;
    }

    .subtitle {
      padding-bottom: 0.5rem;
    }

    ul {
      padding-bottom: 2rem;
    }

    .button {
      padding: 3rem 0;
      font-size: 2rem;
      width: auto;
    }

    .content {
      padding-right: 0;
    }

    .content,
    .button-first-text {
      line-height: 2.3rem;
    }

    .button-first-text {
      padding-bottom: 2rem;
    }

    .button-second-text {
      text-align: center;
    }
  }
}

@media only screen and (max-width: 550px) {
  .homepage {
    padding: 2rem;

    .title {
      transform: translateY(-3.3rem);
    }
  }
}
</style>
