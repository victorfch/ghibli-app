<template>
  <div>
      {{pelicula}}
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
</style>