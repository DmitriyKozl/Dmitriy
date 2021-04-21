<template>
  <div class="banner">
    <div class="navigation">
      <nav class="sidenav ">
        <g-link to="/home#about">About</g-link>
        <g-link to="/home#projects">Project</g-link>
        <g-link to="/home#contact">Contact</g-link>
      </nav>
    </div>
    <div class="banner_content">
      <div class="banner_content_text">
        <p>
          Hi! I’m <strong>Kozlov!</strong> <br> and I’m what they call a
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
import Layout from "~/layouts/Default.vue";
import Nav from "~/components/Nav.vue";

export default {
  name: "Intro",
  components: {
    Layout,
    Nav,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

@import "~/assets/style/media.scss";

@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner {
  height: 100vh;
  max-width: 1200px;
  margin: auto;
.navigation{
  max-width: 1200px;
  margin: auto;
  height: 10%;
  position: relative;


  .sidenav {
    @include center;
    width: 400px;
    margin-left: auto;
    // margin-right: 4rem;
    z-index: 33;
    height: 100px;
    right: 0;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    transition: 0.7s;
    a {
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
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
}
  .banner_content {
    @include center();
    height: 80%;

    &_text {
      margin: 0 auto;
      width: 50%;
      @include for-tablet-portrait {
        width: 100%;
      }
      @include for-phone-only {
        width: 80%;
      }
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
        @include for-tablet-landscape {
          font-size: 3.5rem;
          max-width: 15ch;
          margin: 0;
        }
        @include for-tablet-portrait {
          max-width: 19ch;
          font-size: 3.5rem;
          margin: auto;
        }
         @include for-phone-only {
        width: 80%;
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
        right: 4rem;
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
      @include for-tablet-portrait {
        display: none;
      }
    }
  }
}
</style>
