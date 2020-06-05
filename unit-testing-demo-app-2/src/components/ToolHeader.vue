<template>
  <header>
    <h1>{{headerText}}</h1>
  </header>
</template>

<script>
export default {
  props: {
    headerText: {
      type: String,
      default: 'The Tool',
    },
  },
}
</script>