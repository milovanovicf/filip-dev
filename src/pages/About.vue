<template>
  <main class="about">
    <h1>About Me</h1>
    <div class="about__text">
      <p>
        Graduated from College of Tourism in 2020, quickly found a job as a
        receptionist in a hotel but and wasn's satisfied with the job. I was
        always curious with programming but was too intimidated to try it. But
        this time i was determined to succeed.
      </p>

      <p>
        I began with research of the field i wanted to work in and decided to go
        for Web Development. Started with reading O'Reilly books about HTML, CSS
        and JavaScript, then continued with Freecodecamp and Udemy courses.
        After year and a half with ups and downs of active studying i got an
        offer by a company to complete The Odin Project, a course about web
        development they recommend in a scheduled period. Finished the course on
        time and got got my first job.
      </p>
      <p>
        That is how my jorney of learning programming began. Right now after
        more than two years of proffesional experience my main focus is on
        crafting seamless UI/UX experiences that leave a lasting impact. I'm
        dedicated to creating web applications that not only function flawlessly
        but also delight users with their intuitive and appealing interfaces.
        Fan of space, sports and all things art.
      </p>
      <p>
        So what are you waiting for? Write me an
        <a
          href="mailto:filip.milovanovic.dev@gmail.com"
          class="button grid-col-span-2"
          >email</a
        >
        or message me on
        <a
          href="https://www.linkedin.com/in/filip-milovanovic-b8272a218"
          target="_blank"
          >LinkedIn</a
        >
        or
        <a href="https://www.instagram.com/filip.jpeg/" target="_blank"
          >Instagram</a
        >
        and let's free the world from bad design together!
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  margin: 0 10rem;
  background-color: #2a4b49;

  h1 {
    font-size: 6rem;
    color: #fff;
    padding-bottom: 2rem;
    padding: 2rem;
  }

  p {
    color: #fff;
    font-size: 2rem;
    padding-bottom: 2rem;
    line-height: 2.3rem;
    letter-spacing: 0.06rem;
  }

  a {
    color: #fff;
    font-size: 2rem;
    padding-bottom: 2rem;
    line-height: 2.3rem;
    letter-spacing: 0.06rem;
    font-style: italic;
  }

  &__text {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
}

@media only screen and (max-width: 850px) {
  .about {
    position: absolute;
    display: block;
    margin: 0;
    top: 40%;
    left: 0;
    text-align: center;
    bottom: auto;
    background-color: #2a4b49;
  }
}
</style>
