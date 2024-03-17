<template>
  <div class="footer">
    <div class="rights">
      <p>© 2023 Filip Milovanovic <br />All rights reserved.</p>
    </div>
    <div class="email">
      <p class="title">Email</p>
      <a href="mailto:filip.milovanovic.dev@gmail.com"
        >filip.milovanovic.dev@gmail.com</a
      >
    </div>
    <div class="location">
      <p class="title">Location</p>
      <p>Belgrade, Serbia</p>
    </div>
    <div class="socials">
      <p class="title">Social</p>
      <ul>
        <li>
          <a href="https://www.instagram.com/" target="_blank">instagram</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/filip-milovanovic-b8272a218/"
            target="_blank"
            >linkedIn</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  color: #fff;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  .title {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding-bottom: 0.8rem;
  }

  a {
    font-size: 2rem;
    text-decoration: none;
    color: #fff;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #d16f54;
    }
  }

  p {
    font-size: 1.8rem;
  }

  li {
    padding-bottom: 0.3rem;
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
    position: relative;

    .rights,
    .email,
    .location,
    .socials {
      padding-bottom: 2rem;
    }
  }
}
</style>
