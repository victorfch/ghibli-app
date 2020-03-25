<template>
  <div>
      <p>probandoooo</p>
      {{id}}

  </div>
</template>

<script>
export default {
    name: 'Pelicula',
    props: {
        id: {
            type: String,
            required: true
        }
    },
};
</script>

<style scoped>
</style>