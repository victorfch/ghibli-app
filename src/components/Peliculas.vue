<template>
  <div>
    <div class="container">
      <h1 class="text-center">Peliculas</h1>
      <b-card-group columns>
        <b-card v-for="(pelicula, id) in peliculas" :key="id">
          <b-card-title class="text-center">{{pelicula.title}}</b-card-title>
          <b-card-text>{{getDescripcion(pelicula.description)}}</b-card-text>
          <template v-slot:footer>
            <b-button :to="{path: '/pelicula/' + pelicula.id}" variant="outline-success">Ver mas</b-button>
          </template>
        </b-card>
      </b-card-group>
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
      mostrarSpinner
    };
  },
  mounted() {
    this.getPeliculas();
  },
  methods: {
    getDescripcion(value) {
      if (value.length < 200) {
        return value;
      }
      return value.substring(0, 200).concat("...");
    },
    getPeliculas() {
      let solucion = serviceApi.getFilms();
      solucion.then(data => (this.peliculas = data));
    }
  }
};
</script>

<style scoped>
.container {
    margin: 2%
}
</style>