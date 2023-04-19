<template>
  <div class="footer">
    <div class="rights">
      <p>© 2023 Filip Milovanovic <br />All rights reserved.</p>
    </div>
    <div class="email">
      <p class="title">Email</p>
      <a href="mailto:milovanovicfilip007@gmail.com"
        >milovanovicfilip007@gmail.com</a
      >
    </div>
    <div class="location">
      <p class="title">Location</p>
      <p>Belgrade, Serbia</p>
    </div>
    <div class="socials">
      <p class="title">Social</p>
      <ul>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  height: 15rem;
  margin: 10rem 15rem 0 15rem;
  color: #fff;
  display: flex;
  justify-content: space-between;

  .title {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding-bottom: 0.8rem;
  }

  a {
    font-size: 2rem;
    text-decoration: none;
    color: #fff;
  }

  p {
    font-size: 1.8rem;
  }

  li {
    padding-bottom: 0.3rem;
  }
}

@media only screen and (max-width: 1200px) {
  .footer {
    margin: 10rem 10rem 0 10rem;
  }
}

@media only screen and (max-width: 1000px) {
  .footer {
    a {
      font-size: 2rem;
    }

    p {
      font-size: 2rem;
    }
  }
}

@media only screen and (max-width: 850px) {
  .footer {
    flex-direction: column;
    margin: 5rem 5rem 0 5rem;
    height: auto;

    .rights,
    .email,
    .location,
    .socials {
      padding-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 1200px) {
    .footer {
      margin: 5rem 2rem 0 2rem;
    }
  }
}
</style>
