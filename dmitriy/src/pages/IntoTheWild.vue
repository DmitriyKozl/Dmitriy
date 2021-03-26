<template>
  <Layout>
    <div>
      <span class="hamburger_wild" @click="activate()">&#9776;</span>

      <div :class="{ active: sideNavIsActive }" class="sidenav_wild">
        <a class="closebtn" @click="close()">&times;</a>
        <div
          v-for="link in links"
          :key="link.path"
          :class="{ activeLink: $route.path === link.path }"
          @click="close()"
        >
          <router-link to=''>{{ link.label }}</router-link>
        </div>
      </div>
    </div>
    <section class="banner__wild">
      <div class="banner__wild__text">
        
     <div class="img"></div>   <p>Lorem ipsum dolor sit amet. amet.</p>
      </div>
    </section>
    <WieZijnWe />
    <News />
    <Mail />
  </Layout>
</template>

<script>
import News from "@/components/News";
import WieZijnWe from "@/components/wie-zijn-we";

import Mail from "@/components/Mail";
export default {
  name: "Home",
  components: { Mail, News, WieZijnWe },
  data() {
    return { sideNavIsActive: false ,
          links: [
        {
          label: 'Home',
          path: '/',
        },

        {
          label: 'Nieuws',
          path: '/nieuws',
        },
        {
          label: 'Contact',
          path: '/contact',
        },
        {
          label: 'Agenda',
          path: '/agenda',
        },
        {
          label: 'Praktisch',
          path: '/praktisch',
        },
        {
          label: 'Leden',
          path: '/leden',
        },
      ],};
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
<style lang="scss">
@mixin flexCentered($direction) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}
.sidenav_wild {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  // background-color: #264653;
  background-color: white;

  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
.active {
  width: 250px;
}
.sidenav_wild a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #264653;
  display: block;
  transition: 0.3s;
}
.sidenav_wild a:hover {
  color: #f1f1f1;
}
.closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  cursor: pointer;
}
.hamburger_wild {
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  left: 3%;
  top: 3rem;
  color: rgba(255, 255, 255, 0.787);
  z-index: 444;
}
.activeLink {
  font-weight: bold;
}
.banner__wild {
  background-image: url("../assets/images/forest.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  background-attachment: fixed;
  width: 100%;
  height: 50vh;

  &__text {
    h2,
    p {
      // margin: 10rem 0 0 0;
      font-size: 3rem;
      font-family: "Nanum Gothic";
      font-weight: 600;
      color: #6ec7eb;
      color: white;
    }
  }
  .img {
    background-image: url("../assets/images/icom.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 200px;
    height: 200px;
    margin: auto;
  }
}
</style>
