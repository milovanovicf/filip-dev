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
import ProjectElement from '../components/ProjectElement.vue';
import Footer from '../components/Footer.vue';
import projectsData from '../ProjectsData';

export default {
  data() {
    return {
      projects: projectsData,
    };
  },
  components: { ProjectElement, Footer },
};
</script>

<style lang="scss" scoped>
.projects {
  margin: 0 15rem 0 15rem;
  position: relative;
  height: 80%;

  .all-projects {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 32.5%;
    gap: 2rem;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;

    .project {
      min-width: calc(100% / 3);
      scroll-snap-align: start;
    }
  }
}

::-webkit-scrollbar {
  background: #ddd;
  border: 1px solid #ccc;
}

::-webkit-scrollbar-thumb {
  background: #aaa;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(131, 131, 131);
}

@media only screen and (max-width: 1600px) {
  .projects {
    margin: 0 10rem 0 10rem;
  }
}

@media only screen and (max-width: 850px) {
  .projects {
    margin: 5rem 5rem 0 5rem;

    .all-projects {
      display: flex;
      flex-direction: column;
      margin-bottom: 10rem;
    }
  }
}
</style>
