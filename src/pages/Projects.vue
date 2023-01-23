<script>

import axios from 'axios';
import { store } from '../store';

export default {

    name: 'Projects',
    data() {

        return {

            store,
            projects: [],
            maxLength: 100,

        }

    },

    created() {

        this.getProjects();

    },

    computed: {

        
    },

    methods: {

        getProjects() {

            axios
                .get(`${this.store.baseURL}api/projects`)
                .then(resp => {

                    console.log(resp.data.results);
                    this.projects = resp.data.results;
                   

                });

        }

    }


}

</script>

<template>

    <main>

        <div class="container">
            <h2 class="text-center">Projects</h2>
            <div class="row row-cols-3">
                <div class="col mb-3" v-for="project in projects" >
                    <div class="card">
                        
                        <div class="card-body">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <p class="card-text">{{ project.description }}</p>
                            <a href="#" class="btn btn-primary">More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>

</template>

<style lang="scss" scoped>

    main {

       // background-color: aqua;

    }

</style>