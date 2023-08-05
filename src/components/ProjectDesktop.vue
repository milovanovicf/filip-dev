<template>
  <main class="project-desktop">
    <div class="img-container">
      <h1>Homepage</h1>
      <img :src="project.mainImage" alt="" />
    </div>
    <ProjectDetails :project="project" />
  </main>
</template>

<script>
import ProjectDetails from './ProjectDetails.vue';
export default {
  components: { ProjectDetails },
  props: ['project'],
};
</script>

<style scoped lang="scss">
.project-desktop {
  margin: 30rem 0;
  display: flex;
  justify-content: space-between;
  align-items: start;

  h1 {
    font-size: 7rem;
    padding-bottom: 5rem;
    color: #fff;
  }

  .img-container {
    width: 60%;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media only screen and (max-width: 1300px) {
  .project-desktop {
    width: 90%;
    margin: 30rem auto;

    .img-container {
      width: 50%;
    }
  }
}

@media only screen and (max-width: 900px) {
  .project-desktop {
    .description {
      p {
        font-size: 1.5rem;
      }
    }
  }
}

@media only screen and (max-width: 650px) {
  .project-desktop {
    flex-direction: column;

    h1 {
      font-size: 6rem;
    }

    .img-container {
      width: 100%;
    }

    .description {
      position: relative;
      width: 100%;
    }
  }
}
</style>
