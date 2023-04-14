<template>
  <div class="project">
    <div class="main-image">
      <img :src="project.content.mainImage" alt="" />
    </div>
    <h1>{{ project.name }}</h1>
    <div class="project-details">
      <p class="title">Project details</p>
      <p class="content">
        {{ project.description }}
      </p>
    </div>
    <hr class="dash" />
    <div class="details">
      <div class="client">
        <p class="title">clinet</p>
        <p class="content">{{ project.client }}</p>
      </div>
      <div class="technique">
        <p class="title">technologies</p>
        <p class="content">{{ project.technologies }}</p>
      </div>
    </div>
    <div class="secondary-images">
      <div class="row1">
        <img :src="project.content.secondary1" alt="secondary1" />
      </div>
      <div class="row2">
        <img :src="project.content.secondary2" alt="secondary2" />
        <img :src="project.content.secondary3" alt="secondary3" />
      </div>
      <div class="row3">
        <img :src="project.content.secondary4" alt="secondary4" />
      </div>
    </div>

    <div class="next-project"></div>
  </div>
</template>

<script>
export default {
  props: ['project'],
};
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin: 0 15rem;

  .main-image {
    padding-bottom: 10rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  h1 {
    font-size: 9rem;
    text-transform: uppercase;
    padding-bottom: 5rem;
  }

  .project-details {
    text-align: center;
    padding: 15rem 0 15rem 0;
  }

  .dash {
    width: 25rem;
    margin-bottom: 15rem;
  }

  .title {
    text-transform: uppercase;
    font-size: 1.4rem;
    opacity: 0.8;
    padding-bottom: 2rem;
  }

  .content {
    font-size: 2.3rem;
  }

  .details {
    display: flex;
    justify-content: space-between;
    width: 70%;

    .technique,
    .client {
      text-align: center;
    }
  }

  .secondary-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10rem 0;
    width: 100%;

    .row1 {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-bottom: 5rem;

      img {
        width: 70%;
      }
    }

    .row2 {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 5rem;

      img {
        width: 49%;
      }
    }

    .row3 {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-bottom: 5rem;

      img {
        width: 55%;
      }
    }
  }

  .next-project {
    height: 25rem;
    width: 100%;
    background-color: burlywood;
  }
}

@media only screen and (max-width: 1500px) {
  .project {
    margin: 10rem 10rem 0 10rem;
  }
}

@media only screen and (max-width: 1300px) {
  .project {
    .secondary-images {
      .row1 {
        img {
          width: 100%;
        }
      }

      .row2 {
        flex-direction: column;
        align-items: center;

        img {
          width: 80%;
        }

        img:first-child {
          padding-bottom: 5rem;
        }
      }

      .row3 {
        img {
          width: 80%;
        }
      }
    }

    .next-project {
      height: 15rem;
    }
  }
}

@media only screen and (max-width: 850px) {
  .project {
    margin: 10rem 5rem 0 5rem;

    .secondary-images {
      .row2,
      .row3 {
        img {
          width: 100%;
        }
      }
    }
  }
}

@media only screen and (max-width: 550px) {
  .project {
    margin: 5rem 2rem 0 2rem;

    h1 {
      font-size: 5rem;
    }

    .project-details {
      padding: 5rem 0;
    }

    .dash {
      margin-bottom: 10rem;
    }

    .next-project {
      height: 10rem;
    }
  }
}
</style>
