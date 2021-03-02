<template>
  <section class="projects">
    <div class="title"><h1>Projects</h1></div>
    <div class="preview">
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style lang="scss" scoped>
.projects {
  flex-direction: column;
  .title {
    display: flex;
    align-content: center;
    justify-content: center;
    height: 90px;
    width: 100%;

  
  }

  .preview {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    .icon {
      flex: 1 1 100px;
      max-width: 100px;
      height: 100px;
      background: rgba(0, 0, 0, 0.397);
      margin: 2rem 4rem;
    }
  }
}
</style>
