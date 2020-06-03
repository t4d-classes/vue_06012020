<template>
  <div class="page-layout">
    <div class="header-block">
      <slot name="header-block"></slot>
    </div>
    <div class="table-block">
      <slot name="table-block"></slot>
    </div>
    <div class="form-block">
      <slot name="form-block"></slot>
    </div>
    <div class="footer-block">
      <slot name="footer-block"></slot>
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

    grid-template-rows: 100px auto 50px;
    grid-template-columns: 2fr 1fr;

    grid-template-areas: 
      "header header"
      "table form"
      "footer footer";
  }

  .header-block {
    grid-area: header;
  }

  .table-block {
    grid-area: table;
  }

  .form-block {
    grid-area: form;
  }

  .footer-block {
    grid-area: footer;
  }

</style>