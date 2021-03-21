<template>
  <div class="navigation">
    <div
      :class="{ hide: sideNavIsActive }"
      class="hamburger"
      @click="activate()"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>

    <nav @click="close()" :class="{ active: sideNavIsActive }" class="sidenav">
      <g-link to="/home#about">About</g-link>
      <g-link to="/home#projects">Projects</g-link>
      <g-link to="/home#contact">Contact</g-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      sideNavIsActive: false,
    };
  },
  methods: {
    activate() {
      this.sideNavIsActive = true;
    },
    close() {
      this.sideNavIsActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sidenav {
  @include center;
  max-width: 400px;
  margin-left: auto;
  margin-right: 2rem;
  z-index: 33;
  height: 100px;
  right: 0;
  width: 0;
  position: fixed;
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

.active {
  width: 400px;
}


.hamburger {
  cursor: pointer;
  position: fixed;
  right: 5%;
  top: 3rem;
  z-index: 10000;
  height: 50px;
  @include center;
  flex-direction: column;
  justify-content: space-evenly;
  div {
    width: 35px;
    height: 5px;
    &:nth-child(1) {
      background: rgba(252, 0, 0, 0.5);
    }
    &:nth-child(2) {
      background: rgba(254, 225, 1, 0.5);
    }

    &:nth-child(3) {
      background: rgba(3, 89, 166, 0.5);
    }
  }
}
.hide {
  display: none;
  transition: 0.7s;
}
</style>
