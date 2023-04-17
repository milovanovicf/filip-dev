<template>
  <main class="homepage">
    <div class="title grid-col-span-2">
      <h3>Filip Milovanovic</h3>
      <h3>Web Developer</h3>
      <h3>Belgrade, Serbia</h3>
    </div>
    <div class="about grid-col-span-2">
      <p class="subtitle">About</p>
      <p class="content">
        Currently working as a full stack web developer for
        <span style="font-style: italic; font-size: 1.9rem">Dodo Stt</span>. I
        have over two years of experience as a web developer. In my free time i
        do illustrations and ui/ux.
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
        <li>Ruby on Rails</li>
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
      Check out my work <a href="#">here</a>. Write me an email or message me on
      <a href="https://www.linkedin.com/in/filip-milovanovic-b8272a218/"
        >LinkedIn</a
      >
      or <a href="https://www.instagram.com/filip.jpeg/">Instagram</a>. I'm
      always interested in working on ambitious projects with positive people.
    </p>
    <a
      href="mailto:milovanovicfilip007@gmail.com"
      class="button grid-col-span-2"
      >milovanovicfilip007@gmail.com</a
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
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1.5rem;

  h3 {
    font-size: 2.7rem;
    letter-spacing: 0.1rem;
    line-height: 3rem;
    text-transform: uppercase;
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
    margin: 3rem;
    transform: translateY(-10rem);
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
    font-size: 1.5rem;
    font-weight: 800;
    padding-bottom: 1rem;
    letter-spacing: 0.2rem;
  }

  .content {
    padding-right: 10rem;
    letter-spacing: 0.06rem;
  }
}

@media only screen and (max-width: 1500px) {
  .homepage {
    margin: 0 10rem;
  }
}

@media only screen and (max-width: 1400px) {
  .homepage {
    .button {
      font-size: 1.7rem;
      transform: translateY(-5rem);
      margin: 3rem 0;
    }

    .button-first-text,
    .button-second-text {
      margin: 0;
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
    }

    .content {
      padding-right: 0;
    }

    .content,
    .button-first-text {
      line-height: 2rem;
    }

    .button-first-text {
      padding-bottom: 4rem;
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
