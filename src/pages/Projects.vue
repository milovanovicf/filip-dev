<template>
  <div class="projects">
    <h3>Let My Work Speak For Itself</h3>
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
  h3 {
    color: #fff;
    font-size: 5rem;
    margin: 3rem 0;
  }
  margin: 0 15rem 0 15rem;
  position: relative;
  // height: 80%;

  .all-projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    padding-bottom: 15rem;
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
    margin: 5rem 2rem 0 2rem;

    .all-projects {
      display: flex;
      flex-direction: column;
      margin-bottom: 10rem;
    }
  }
}
</style>
