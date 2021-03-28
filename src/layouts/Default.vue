<template>
  <div class="layout">
        <Nav />

    <slot/>

  </div>
</template>
<script>

import Nav from "~/components/Nav.vue";

export default {
  metaInfo: "Dmitriy",
components: {
Nav
  },
};  

</script>

<style lang="scss" scoped>
@import "~/assets/style/media.scss";

</style>
