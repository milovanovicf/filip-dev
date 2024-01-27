<template>
  <div class="background" :class="{ loaded: isLoaded }">
    <div class="logo" :class="{ 'logo-loaded': isLoaded }">
      <img src="../assets/images/Logo_v1.svg" alt="logo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    this.removeLoader();
  },
  methods: {
    removeLoader() {
      setTimeout(() => {
        this.isLoaded = true;
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
.background {
  background-color: #122c2b;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;

  .logo {
    width: 13rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: loader 1s linear infinite alternate;

    img {
      width: 100%;
    }
  }
}

.loaded {
  opacity: 0;
  height: 1vh;
  transition: all 400ms;
}

@keyframes loader {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
