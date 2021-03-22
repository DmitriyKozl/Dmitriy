<template>
  <section class="projects" id="projects">
    <div class="title"><h1>Projects</h1></div>
    <div class="preview">
      <g-link class="icon" target="_blank" href="">
        <img src="@/assets/images/Capture.png" alt="" />
      </g-link>
      <g-link class="icon" to="/misomania" href="">
        <img src="@/assets/images/misomania.png" alt="" />
      </g-link>
      <g-link class="icon" to="/example-site" href="">
        <img src="@/assets/images/examenTemplate.png" alt="" />
      </g-link>
      <g-link class="icon" target="_blank" href="https://lev-dsgn.com/">
        <img src="@/assets/images/daan.png" alt="" />
      </g-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  components: {},
};
</script>

<style lang="scss" scoped>
.projects {
  flex-direction: column;
  justify-content: space-evenly;
  .title {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
  }

  .preview {
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    .icon {
      flex: 1 1 400px;
      max-width: 600px;
      // height: 400px;
      margin: 2rem 4rem;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
