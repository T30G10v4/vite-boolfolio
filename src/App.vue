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
          store.list = resp.data.results;


        });


    }
  },

  created() {

    this.storeProjects();

  }



}

</script>

<template>

  <div v-for="project in store.list" key="index">
  
      <div>{{ project.title }}</div>

  </div>

</template>



<style>



</style>