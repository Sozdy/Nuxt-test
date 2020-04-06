<template>
  <div>
    <Navbar/>
    <main>
      <div class="container">
        <nuxt/>
        <!--Этот тег используется для указания куда рендерить странички, роут страницы и ей название генерируются
         vue-routrer автоматически из папки pages-->
      </div>
    </main>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'

  export default {
    components: {
      Navbar
    }
  }
</script>

<style>

</style>
