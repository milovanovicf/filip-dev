<template>
  <div class="project">
    <div class="project__overview">
      <div class="img-container">
        <img :src="selectedProject.overviewImage" alt="" />
      </div>
      <div class="description">
        <h2>{{ selectedProject.name }}</h2>
        <h4>Overview</h4>
        <p>
          {{ selectedProject.overview }}
        </p>
        <h4>Goal</h4>
        <p>{{ selectedProject.goals }}</p>
        <a
          :class="{ disabled: !selectedProject.link }"
          :href="selectedProject.link"
          class="button"
          target="_blank"
          >Visit Website</a
        >
      </div>
    </div>
    <ProjectDesktop
      v-if="selectedProject.platform === 'Desktop'"
      :project="selectedProject"
    />
    <ProjectMobile
      v-if="selectedProject.platform === 'Mobile'"
      :project="selectedProject"
    />
  </div>
  <div class="next-project">
    <p class="text">Next - {{ nextProjectSwitch.name }}</p>
    <router-link
      :to="`/projects/${nextProjectSwitch.slug}`"
      v-bind:style="{
        backgroundImage: `url(${nextProjectSwitch.nextProject})`,
      }"
    >
    </router-link>
  </div>
</template>

<script>
import projectsData from '../ProjectsData';
import ProjectDesktop from './ProjectDesktop.vue';
import ProjectMobile from './ProjectMobile.vue';

export default {
  components: { ProjectDesktop, ProjectMobile },
  data() {
    return {
      selectedProject: null,
      nextSelectedProject: null,
      projects: projectsData,
    };
  },
  methods: {
    findProject(route) {
      const projectSlug = route.params.slug;
      const foundProject = this.projects.find(
        (project) => project.slug === projectSlug
      );
      const nextProject = this.projects.find(
        (project) => project.id === foundProject.id + 1
      );
      this.selectedProject = foundProject;
      this.nextSelectedProject = nextProject;
    },
  },
  computed: {
    nextProjectSwitch() {
      if (!this.nextSelectedProject) {
        return this.projects[0];
      } else {
        return this.nextSelectedProject;
      }
    },
  },
  created() {
    this.findProject(this.$route);
  },
  watch: {
    $route(newRoute) {
      this.findProject(newRoute);
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  width: 80%;
  margin: 10rem auto;

  &__overview {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .img-container {
      width: 50%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .description {
      color: #fff;
      width: 45%;
      margin: 4rem 0;

      h2 {
        font-size: 5rem;
        margin-bottom: 3rem;
      }

      h4 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        font-weight: 300;
        color: #d16f54;
      }

      p {
        font-size: 2rem;
        margin-bottom: 2rem;
        line-height: 2.5rem;
      }

      .button {
        width: max-content;
        display: block;
        color: #fff;
        background-color: #d16f54;
        font-size: 1.8rem;
        padding: 1.3rem 2rem;
        text-decoration: none;
        border-radius: 5px;
        transition: 0.2s ease-in-out;
        font-style: normal;

        &:not(.disabled):hover {
          color: #d16f54;
          background-color: #fff;
        }
      }
      .disabled {
        cursor: not-allowed;
        background-color: #6d6d6d;
        pointer-events: all !important;
      }
    }
  }
}

@media only screen and (max-width: 1600px) {
  .project {
    margin: 5rem auto;
  }
}

@media only screen and (max-width: 1300px) {
  .project {
    width: 100%;
  }
}

@media only screen and (max-width: 900px) {
  .project {
    &__overview {
      width: 90%;
      align-items: center;
      .img-container {
        width: 60%;
      }
      .description {
        width: 60%;
        h2 {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }

        h4 {
          font-size: 2.3rem;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 1.9rem;
          margin-bottom: 2rem;
          line-height: 2.5rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 650px) {
  .project {
    &__overview {
      width: 100%;
      flex-direction: column-reverse;
      align-items: center;

      .img-container {
        width: 100%;
      }
      .description {
        width: 90%;
      }
    }
  }
}

.next-project {
  height: 30rem;
  width: 100%;
  position: relative;

  &:hover {
    .text {
      opacity: 0;
    }
  }

  .text {
    font-size: 4rem;
    text-transform: uppercase;
    color: #fff;
    position: absolute;
    z-index: 5;
    transition: 0.2s ease-in-out;
    opacity: 1;
  }

  a {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: 0.2s ease-in-out;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
}

@media only screen and (max-width: 850px) {
  .next-project {
    .text {
      font-size: 3.5rem;
    }
  }
}
</style>
