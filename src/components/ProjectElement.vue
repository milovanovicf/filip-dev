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
          projectId: this.projectContent.id,
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  h3 {
    color: #fff;
    font-size: 2.5rem;
    padding: 1rem 0;
  }
}
</style>
