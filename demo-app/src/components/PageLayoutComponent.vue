<template>
  <div class="page-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'page-layout',
}
</script>

<style scoped>

  .page-layout {
    position: fixed;
    top: 0; left: 0;
    right: 0; bottom: 0;

    display: grid;

    grid-template-rows: 100px auto 60px;
    grid-template-columns: auto;

    grid-template-areas: 
      "header"
      "list"
      "form";
  }

</style>