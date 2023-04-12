<template>
  <div class="projects">
    <div class="all-projects" v-if="currentProject === ''">
      <ProjectElement
        v-for="project in projects"
        :key="project.id"
        :projectContent="project"
        @click="showProject(project)"
      />
    </div>
    <Project v-if="currentProject != ''" :project="filteredProject" />
    <Footer v-if="currentProject === ''" />
  </div>
</template>

<script>
import ProjectElement from './ProjectElement.vue';
import Project from './Project.vue';
import Footer from './Footer.vue';

export default {
  components: { ProjectElement, Project, Footer },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Chatter',
          description:
            'Dating app that provides new and exciting ways to find your significant other.',
          thumbnail: new URL(
            `/src/assets/images/chatter/Preview.png`,
            import.meta.url
          ),
          client: 'Personal',
          technologies: 'Figma',
          content: {
            mainImage: new URL(
              `/src/assets/images/chatter/MainImage.png`,
              import.meta.url
            ),
            secondary1: new URL(
              `/src/assets/images/chatter/Secondary1.png`,
              import.meta.url
            ),
            secondary2: new URL(
              `/src/assets/images/chatter/Secondary2.png`,
              import.meta.url
            ),
            secondary3: new URL(
              `/src/assets/images/chatter/Secondary2.png`,
              import.meta.url
            ),
            secondary4: new URL(
              `/src/assets/images/chatter/Secondary4.png`,
              import.meta.url
            ),
          },
        },
        {
          id: 2,
          name: 'Project2',
          thumbnail: 'chatter/Preview.png',
        },
        {
          id: 3,
          name: 'Project3',
          thumbnail: 'chatter/Preview.png',
        },
        {
          id: 4,
          name: 'Project4',
          thumbnail: 'chatter/Preview.png',
        },
        {
          id: 5,
          name: 'Project5',
          thumbnail: 'chatter/Preview.png',
        },
      ],
      currentProject: '',
    };
  },
  methods: {
    showProject(project) {
      this.currentProject = project.name;
    },
  },
  computed: {
    filteredProject() {
      return this.projects.find((project) => {
        return project.name === this.currentProject;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.projects {
  .all-projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10rem;
    margin: 5rem 25rem 0 25rem;
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
