<template>
  <div class="banner">
    <nav>
      <a href="#about">About</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="banner_content">
      <div class="banner_content_text">
        <p>
          Hi! I’m <strong>Dmitriy!</strong> and i’m what they call a
          frontend-developer
        </p>
      </div>
      <div class="banner_content_forms">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner {
  height: 100vh;
    max-width: 1400px;
  margin: auto;
  nav {
    @include center;
    max-width: 500px;
    margin-left: auto;
    margin-right: 5rem;
    padding-top: 2rem;
    position: relative;
    padding: 0 2rem;
    position: relative;
    z-index: 33;
    height: 100px;

    a {
      margin: 0 1.5rem;
      padding: 0.8rem 2rem;
      font-size: 1.5rem;
      font-family: "bahnschrift";
      cursor: pointer;
      &:nth-child(1) {
        border-bottom: 5px solid rgba(252, 0, 0, 0.5);
      }
      &:nth-child(2) {
        border-bottom: 5px solid rgba(3, 89, 166, 0.5);
      }
      &:nth-child(3) {
        border-bottom: 5px solid rgba(254, 225, 1, 0.5);
      }
    }
  }
  .banner_content {
    @include center();
    height: 70vh;
   

    &_text {
      margin: 0 auto;
      width: 50%;

      p {
        margin: 5rem auto 0 0;
        font-size: 4.5rem;
        text-align: left;
        line-height: 1.4;
        line-break: normal;
        font-weight: 200;
        max-width: 17ch;
        strong {
          text-shadow: 6px 0px rgba(3, 89, 166, 0.5),
            10px 0px rgba(252, 0, 0, 0.5);
        }
      }
    }
    &_forms {
      width: 40%;
      // @include center();
      height: 400px;
      margin-right: auto;
      position: relative;
      .square {
        position: absolute;
        width: 250px;
        height: 350px;
        border: 3px solid black;
        transform: rotate(30deg);
        right:4rem;
        bottom: 0;
        &:nth-child(1) {
          border: 3px solid rgba(252, 0, 0, 0.5);
          right: 6rem;

        }
        &:nth-child(2) {
          border: 3px solid rgba(3, 89, 166, 0.5);
          right: 8rem;
        }
        &:nth-child(3) {
          border: 3px solid rgba(254, 225, 1, 0.5);
          right: 10rem;
        }
      }
    }
  }
}
</style>
