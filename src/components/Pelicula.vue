<template>
  <div class="container">
      <h2 class="text-center">{{pelicula.title}}</h2>
      <strong>Descripcion: </strong><p>{{pelicula.description}}</p>
      <strong>Director: </strong><p>{{pelicula.director}}</p>
      <strong>Productor: </strong><p>{{pelicula.producer}}</p>
      <strong>Fecha de lanzamiento: </strong><p>{{pelicula.release_date}}</p>
  </div>
</template>

<script>
import * as serviceApi from '@/services/serviceGhibli'
export default {
    name: 'Pelicula',
    data() {
        let pelicula = {}
        return {
            pelicula
        }
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    mounted () {
        this.getPelicula(this.id);
    },
    methods: {
        getPelicula(id) {
            let pelicula = serviceApi.getFilm(id)
            pelicula.then(data => (this.pelicula = data))
        }
    },
};
</script>

<style scoped>
.container {
    margin: 2%
}
</style>