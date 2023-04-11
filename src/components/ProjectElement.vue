<template>
  <div class="project">
    <img :src="projectContent.thumbnail" alt="" />
    <h3>{{ projectContent.name }}</h3>
  </div>
</template>

<script>
export default {
  props: ['projectContent'],
};
</script>

<style lang="scss" scoped>
.project {
  img {
    width: 100%;
    height: 100%;
  }

  h3 {
    color: #fff;
    font-size: 2.5rem;
    padding: 1rem 0;
  }
}
</style>
