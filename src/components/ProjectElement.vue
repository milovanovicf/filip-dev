<template>
  <div class="project">
    <router-link :to="projectLink">
      <img :src="projectContent.thumbnail" alt="project" />
      <h3>{{ projectContent.name }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['projectContent'],
  computed: {
    projectLink() {
      return {
        name: 'project',
        params: {
          slug: this.projectContent.slug,
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  cursor: pointer;
  overflow: hidden;

  &:hover {
    img {
      filter: blur(1px);
      transform: scale(1.1);
    }
  }

  img {
    width: 100%;
    height: 100%;
    transition: all 0.2s;
  }

  a {
    text-decoration: none;
    overflow: hidden;
  }

  h3 {
    color: #fff;
    font-size: 2.5rem;
    padding: 1rem 0;
  }
}
</style>
