<template>
  <div class="layout">
    <slot/>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>


export default {
  metaInfo: "Dmitriy",

};  

</script>

<style>

</style>
