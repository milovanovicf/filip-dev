<template>
  <div class="projects">
    <div class="all-projects">
      <ProjectElement
        v-for="project in projects"
        :key="project.id"
        :projectContent="project"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import ProjectElement from './ProjectElement.vue';
import Footer from './Footer.vue';

export default {
  components: { ProjectElement, Footer },
  inject: ['projects'],
};
</script>

<style lang="scss" scoped>
.projects {
  .all-projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem;
    margin: 5rem 20rem 0 20rem;
    padding-bottom: 5rem;
  }
}

@media only screen and (max-width: 1500px) {
  .projects {
    .all-projects {
      margin: 5rem 15rem 0 15rem;
    }
  }
}

@media only screen and (max-width: 1200px) {
  .projects {
    .all-projects {
      margin: 5rem 10rem 0 10rem;
    }
  }
}

@media only screen and (max-width: 850px) {
  .projects {
    .all-projects {
      margin: 5rem 5rem 0 5rem;
      display: flex;
      flex-direction: column;
      padding-bottom: 5rem;
    }
  }
}

@media only screen and (max-width: 550px) {
  .projects {
    .all-projects {
      margin: 5rem 2rem 0rem 2rem;
      grid-gap: 5rem;
    }
  }
}
</style>
