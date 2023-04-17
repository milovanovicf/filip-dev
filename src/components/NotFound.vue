<template>
  <main class="not-found">
    <h1>Page not found!</h1>
  </main>
</template>

<style lang="scss" scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;

  h1 {
    font-size: 6rem;
    color: #fff;
  }
}

@media only screen and (max-width: 850px) {
  .not-found {
    position: absolute;
    display: block;
    margin: 0;
    top: 40%;
    left: 0;
    text-align: center;
    bottom: auto;
    background-color: #2a4b49;
  }
}
</style>
