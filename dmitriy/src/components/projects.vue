<template>
<div class="background">
    <section class="projects">
    <div class="title"><h1>Projects</h1></div>
    <div class="preview">
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
    </div>
  </section>
        <Contact />
</div>


</template>

<script>
import Contact from "@/components/Contact.vue";

export default {
  name: "Projects",
  components:{
        Contact,

  }
};
</script>

<style lang="scss" scoped>
.background{
  background-color:#BEB7B3
 ;
      //  background-image: url("../assets/images/lines.png");
      // background-size:cover;
      // background-position: center;
}
.projects {
  flex-direction: column;
  .title {
    display: flex;
    align-content: center;
    justify-content: center;
    height: 90px;
    width: 100%;

  
  }

  .preview {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    .icon {
      flex: 1 1 100px;
      max-width: 100px;
      height: 100px;
      background: rgba(0, 0, 0, 0.397);
      margin: 2rem 4rem;
    }
  }
}
</style>
