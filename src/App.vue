<script>

import { store } from "./store"
import axios, { Axios } from 'axios';

export default {

  components: {

  },

  data() {

    return {
      store
    }


  },

  methods: {

    storeProjects() {

      axios
        .get(`${store.baseURL}`)
        .then((resp) => {

          console.log(resp.data.results);


        });


    }
  },

  created() {

    this.storeProjects();

  }



}

</script>

<template>

  <div v-for="project in store.list" key="store.id">
  
      <div>PROVA</div>

  </div>

</template>



<style>



</style>