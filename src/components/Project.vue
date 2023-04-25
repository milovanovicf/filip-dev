<template>
  <div class="project">
    <h1>{{ selectedProject.name }}</h1>
    <div class="project__overview">
      <div class="description">
        <div class="row">
          <h2>Overview</h2>
          <p>
            {{ selectedProject.overview }}
          </p>
        </div>
        <div class="row">
          <h2>Goals</h2>
          <p>
            {{ selectedProject.goals }}
          </p>
        </div>
      </div>
      <div class="preview">
        <img :src="selectedProject.content.mainImage" alt="" />
      </div>
    </div>
    <div class="project__platform">
      <div class="row">
        <h2>Platform</h2>
        <p>{{ selectedProject.platform }}</p>
      </div>
      <div class="row">
        <h2>Technologies</h2>
        <p v-for="technology in selectedProject.technologies" :key="technology">
          {{ technology }}
        </p>
      </div>
    </div>
    <div class="project__details">
      <div class="wireframes" v-if="selectedProject.platform === 'Mobile'">
        <h2>Wireframes</h2>
        <div class="wireframes__content">
          <div class="image-container">
            <img :src="selectedProject.content.secondary1" alt="image1" />
          </div>
          <div class="image-container">
            <img :src="selectedProject.content.secondary2" alt="image2" />
          </div>
          <div class="image-container">
            <img :src="selectedProject.content.secondary3" alt="image3" />
          </div>
          <div class="image-container">
            <img :src="selectedProject.content.secondary4" alt="image4" />
          </div>
        </div>
      </div>
      <div class="features">
        <div
          class="features__row"
          v-for="feature in selectedProject.features"
          :key="feature.id"
        >
          <p class="feature-text" :class="{ 'even-text': isOdd(feature.id) }">
            {{ feature.text }}
          </p>
          <div class="feature-image">
            <img
              :src="feature.image"
              alt=""
              :class="{ 'even-image': isOdd(feature.id) }"
            />
          </div>
        </div>
        <div class="last-image">
          <img :src="selectedProject.content.lastImage" alt="lastimage" />
        </div>
      </div>
    </div>
    <div class="thank-you">
      <h1>Thank you for your attention!</h1>
    </div>
  </div>
  <div class="next-project">
    <p class="text">Next - {{ nextProjectSwitch.name }}</p>

    <router-link
      :to="`/projects/${nextProjectSwitch.id}`"
      v-bind:style="{
        backgroundImage: `url(${nextProjectSwitch.content.nextProject})`,
      }"
    >
    </router-link>
  </div>
</template>

<script>
import projectsData from '../ProjectsData';
export default {
  data() {
    return {
      selectedProject: null,
      nextSelectedProject: null,
      projects: projectsData,
    };
  },
  methods: {
    findProject(route) {
      const projectId = route.params.projectId;
      const foundProject = this.projects.find(
        (project) => project.id === Number(projectId)
      );
      const nextProject = this.projects.find(
        (project) => project.id === Number(projectId) + 1
      );

      this.selectedProject = foundProject;
      this.nextSelectedProject = nextProject;
    },
    isOdd(id) {
      return id % 2 === 0 ? true : false;
    },
    isMobile() {
      if (this.$vssWidth < 850) {
        this.selectedProject.content.lastImage =
          this.selectedProject.content.lastImageMobile;
      }
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
  mounted() {
    this.isMobile();
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
  color: #fff;
  margin: 5rem 15rem;

  h1 {
    font-size: 8rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10rem;
  }

  &__overview {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15rem;

    .description {
      width: 30%;
    }

    .preview {
      width: 65%;

      img {
        width: 100%;
      }
    }
  }

  &__platform {
    display: flex;
    justify-content: space-between;
    margin: 0 40rem 15rem 40rem;
    text-align: center;
  }

  &__details {
    margin-bottom: 10rem;

    .wireframes {
      margin-bottom: 10rem;

      h2 {
        font-size: 3.5rem;
        margin-bottom: 5rem;
      }

      &__content {
        display: flex;
        justify-content: space-between;
      }

      img {
        background-color: aquamarine;
        border-radius: 10px;
        width: 100%;

        &:nth-child(even) {
          transform: translateY(10rem);
        }
      }
    }
    .features {
      &__row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4rem;

        &:nth-last-child(2) {
          margin-bottom: 15rem;
        }

        p {
          font-size: 2.3rem;
          width: 40%;

          &.even-text {
            order: 2 !important;
          }
        }

        .feature-text {
          line-height: 2.5rem;
        }

        .feature-image {
          width: 55%;

          &.even-image {
            order: 1 !important;
          }

          img {
            width: 100%;
          }
        }
      }

      .last-image {
        img {
          width: 100%;
        }
      }
    }
  }

  .row {
    margin-bottom: 5rem;

    h2 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    img {
      width: 50%;
      background-color: steelblue;
      height: 40rem;
    }
  }
}

@media only screen and (max-width: 1500px) {
  .project {
    margin: 5rem 10rem;

    h1 {
      font-size: 7rem;
    }

    &__platform {
      margin: 0 10rem 15rem 10rem;
    }

    .wireframes {
      &__content {
        img {
          width: 90%;
        }
      }
    }
  }
}

@media only screen and (max-width: 850px) {
  .project {
    margin: 5rem 5rem;

    &__overview {
      flex-direction: column;

      .description {
        width: auto;
      }

      .preview {
        width: auto;
      }
    }

    &__platform {
      margin: 0 5rem 10rem 5rem;
      flex-direction: column;
    }

    .wireframes {
      &__content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;

        img {
          width: 100%;
        }
      }
    }

    .features {
      &__row {
        flex-direction: column;
        margin-bottom: 10rem;

        p {
          width: 100%;
          order: 1;
          margin-bottom: 2rem;
        }

        .feature-image {
          width: 100%;
          order: 2;
        }
      }
    }

    .thank-you {
      h1 {
        font-size: 5rem;
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  .project {
    margin: 5rem 2rem;

    &__platform {
      margin: 0 0 5rem 0;
    }

    .features {
      &__row {
        margin-bottom: 7rem;
      }
    }

    .thank-you {
      h1 {
        font-size: 4rem;
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
