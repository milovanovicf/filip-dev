<template>
  <div class="wireframes">
    <h1>Wireframes</h1>
    <div class="wireframes__content">
      <div class="img-container" v-for="image in project.content">
        <img :src="image" alt="wireframe" />
      </div>
    </div>
    <div class="onboarding">
      <img :src="project.onboarding" alt="onboarding" />
    </div>
    <ProjectDetails :project="project" />
  </div>
</template>
<script>
import ProjectDetails from './ProjectDetails.vue';

export default {
  components: { ProjectDetails },
  props: ['project'],
};
</script>

<style scoped lang="scss">
.wireframes {
  margin-top: 30rem;

  h1 {
    font-size: 7rem;
    margin-bottom: 5rem;
    color: #fff;
  }

  &__content {
    display: flex;
    justify-content: space-between;

    .img-container {
      width: 19%;

      img {
        border-radius: 10px;
        width: 100%;
      }
    }
  }

  .onboarding {
    margin-top: 7rem;
    img {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 1300px) {
  .wireframes {
    width: 80%;
    margin: 30rem auto 0 auto;
  }
}

@media only screen and (max-width: 900px) {
  .wireframes {
    margin: 20rem auto;
    width: 90%;

    h1 {
      font-size: 6rem;
    }

    &__content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;

      .img-container {
        width: 100%;
      }
    }
  }
}
</style>
