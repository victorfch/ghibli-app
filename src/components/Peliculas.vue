<template>
  <div>
    <h1>Peliculas</h1>
    <b-spinner v-if="mostrarSpinner" variant="primary" label="Spinning"></b-spinner>

    <div v-else>
      {{peliculas}} 
    </div>
  </div>
</template>

<script>
import * as serviceApi from "@/services/serviceGhibli";
export default {
  name: "Peliculas",
  data() {
    const peliculas = [];
    let mostrarSpinner = true;
    return {
      peliculas,
      mostrarSpinner,
    };
  },
  mounted() {
    this.esperar();
    this.getPeliculas();
  },
  methods: {
    esperar() {
      setTimeout(() => {
        this.mostrarSpinner = false;
      }, 500);
    },
    getPeliculas() {
      let solucion = serviceApi.getFilms();
      solucion.then(data => (this.peliculas = data));
    }
  }
};
</script>

<style scoped>
</style>