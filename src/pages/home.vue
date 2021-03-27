<template>
  <Layout>
    <div class="home">
      <div class="content">
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
import Projects from "@/components/projects.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    AboutThisGuy,
    Projects,
    Layout,
    Contact,
  },
};
</script>
<style lang="scss" scoped >
.home {
  width: 100%;
  height: 100%;

 
}
</style>
