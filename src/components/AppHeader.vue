<script>

export default {

    name: 'AppHeader',
    data() {

        return {

            navigator: [

                {

                    label: 'Home',
                    routeName: 'home'

                },

                {

                    label: 'About Us',
                    routeName: 'about'

                },

                {

                    label: 'Projects',
                    routeName: 'projects'

                }

            ]

        }

    }

}

</script>

<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      
        <li v-for="(item, index) in navigator">
        
            <a class="nav-link" href="#">{{ item.label }}</a>
           
        </li>
    </ul>
  </div>
</nav>

</template>

<style></style>