<template>
  <section class="projects" id="projects">
    <div class="title"><h1>Projects</h1></div>
    <div class="preview">
      <g-link class="icon" to="/into-the-wild" href="">
        <g-image src="@/assets/images/Capture.png" alt=""> </g-image>

        <p>Woudloper landingpage</p>
      </g-link>
      <g-link class="icon" to="/misomania" href="">
        <g-image src="@/assets/images/misomania.png" alt=""> </g-image>

        <p>Misomania blog landingpage</p>
      </g-link>
      <g-link class="icon" to="/example-site" href="">
        <g-image src="@/assets/images/examenTemplate.png" alt=""> </g-image>

        <p>Travel webpage example</p>
      </g-link>
      <g-link class="icon" target="_blank" href="https://lev-dsgn.com/">
        <g-image src="@/assets/images/daan.png" alt=""> </g-image> 

        <p>Portfolio page</p>
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
      cursor: pointer;
      &:nth-child(1) {
        border-bottom: 5px solid rgba(252, 0, 0, 0.5);
        img {
          width: 100%;
          object-fit: contain;
        }
      }
      &:nth-child(2) {
        border-bottom: 5px solid rgba(3, 89, 166, 0.5);
      }
      &:nth-child(3) {
        border-bottom: 5px solid rgba(254, 225, 1, 0.5);
      }
      &:nth-child(4) {
        border-bottom: 5px solid rgb(54, 168, 54);
      }

      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
