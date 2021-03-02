<template>
  <Layout>

    <div class="home">
    <div class="content">
      <Intro />
      <AboutThisGuy />
      <Projects />
      <Contact />
    </div>
  </div>

  </Layout>
</template>

<script>
import Layout from "~/layouts/Default.vue";

import AboutThisGuy from "@/components/AboutThisGuy.vue";
import Intro from "@/components/Intro.vue";
import Projects from "@/components/projects.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Intro,
    
    AboutThisGuy,
    Projects,
    Contact,
    Layout
  },
};
</script>
<style lang="scss">
.home {
  position: relative;
  width: 100%;
  height: 100%;

  .content {
    background: #e5e5e5;
  }
}
</style>
