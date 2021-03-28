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
      <div class="link"><g-link to="/home#about">About</g-link></div>
      <div class="link"><g-link to="/home#projects">Projects</g-link></div>
      <div class="link"><g-link to="/home#contact">Contact</g-link></div>
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
@import "~/assets/style/media.scss";

@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidenav {
  @include center;
  max-width: 400px;
  margin-left: auto;
  margin-right: 4rem;
  z-index: 33;

  height: 100px;
  right: 0;
  width: 0;
  z-index: 1000000;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.7s;
  position: absolute;
  @include for-phone-only {
    max-width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    margin: unset;
    height: 0;
    width: 100%;
  }
}
.link {
  width: 80%;
  // padding: 1rem 0;
  // @include center();
&:nth-child(1) {
    
      border-left: 5px solid rgba(252, 0, 0, 0.5);
    border-right: 5px solid rgba(254, 225, 1, 0.5);

  }&:nth-child(2) {
    
    border-left: 5px solid rgba(3, 89, 166, 0.5);
            border-right: 5px solid rgba(252, 0, 0, 0.5);

  }&:nth-child(3) {
    
    border-left: 5px solid rgba(254, 225, 1, 0.5);
      border-right: 5px solid rgba(3, 89, 166, 0.5);

  }

  a {
    padding: 0.8rem 2rem ;
    font-size: 1.2rem;
    font-family: "bahnschrift";
    cursor: pointer;
    background: none;
  }


}

.active {
  width: 400px;
  background: white;
  @include for-phone-only {
    height: 300px;
    width: 100%;


      }
}
.hamburger {
  cursor: pointer;
  position: absolute;
  right: 5%;
  top: 3rem;
  z-index: 10000;
  height: 50px;
  @include center;
  flex-direction: column;
  justify-content: space-evenly;
   @include for-phone-only {
       right: 10%;

 }
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
