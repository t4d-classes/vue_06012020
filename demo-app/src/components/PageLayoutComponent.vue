<template>
  <div class="page-layout">
    <div class="header-block">
      <slot name="header-block"></slot>
    </div>
    <div class="list-block">
      <slot name="list-block"></slot>
    </div>
    <div class="form-block">
      <slot name="form-block"></slot>
    </div>
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

  .header-block {
    grid-area: header;
    background-color: navy;
  }

  .list-block {
    grid-area: list;
  }

  .form-block {
    grid-area: form;
  }

</style>