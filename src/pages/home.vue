<template>
  <Layout>
    <div class="home">
      <div class="content">
        <AboutThisGuy />
        <Projects />
        <Contact />
      </div>
    </div>
    <footer><h1> <span>	&#169;</span> Dmitriy S.</h1></footer>
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
@import "~/assets/style/media.scss";

.home {
  width: 100%;
  height: 100%;

   @include for-phone-only {
        width: 80%;
        margin:auto;
      }
}
footer{
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items:center ;
              background-image: url("../assets/images/forms.png");
              background-position: center;
              background-size:cover;
  h1{
    font-size: 1rem;
    margin-left: auto;
    margin-right: 1rem;
  span{
    height: 100%;
  }
  }
}
</style>
