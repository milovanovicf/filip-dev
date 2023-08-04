<template>
  <div class="description">
    <div class="technologies">
      <h2>Technologies</h2>
      <p v-for="technology in project.technologies" key="technology">
        {{ technology }}
      </p>
    </div>
    <div class="colors">
      <h2>Colors</h2>
      <div class="colors__item" v-for="color in project.colors">
        <div class="color" :style="{ backgroundColor: color }"></div>
        <p class="hex">{{ color }}</p>
      </div>
    </div>
    <div class="fonts">
      <h2>Fonts</h2>
      <div class="font" v-for="font in project.fonts">
        <p class="font__name" :style="{ fontFamily: `${font}, sans-serif` }">
          {{ font }}
        </p>
        <p class="font__example" :style="{ fontFamily: `${font}, sans-serif` }">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />abcdefghijklmnopqrstuvwxyz
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
};
</script>

<style scoped lang="scss">
.description {
  color: #fff;
  position: sticky;
  top: 10%;
  margin-top: 10rem;
  width: 35%;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: #767676;
  }

  p {
    font-size: 2.3rem;
  }

  .technologies,
  .colors,
  .fonts {
    margin-bottom: 5rem;
  }

  .technologies {
    p {
      margin-bottom: 1rem;
    }
  }

  .colors {
    &__item {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      .color {
        width: 10rem;
        height: 5rem;
        margin-right: 2rem;
      }
    }
  }

  .fonts {
    .font {
      margin-bottom: 3rem;

      &__name {
        margin-bottom: 1.5rem;
      }

      &__example {
        font-size: 1.7rem;
        line-height: 3rem;
      }
    }
  }
}

@media only screen and (max-width: 900px) {
  .description {
    width: 45%;
    .fonts {
      .font {
        margin-bottom: 3rem;

        &__name {
          margin-bottom: 1.5rem;
        }

        &__example {
          font-size: 1.5rem;
          line-height: 3rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 650px) {
  .description {
    width: 100%;
  }
}
</style>
