<!--Для создания динмической ссылки нужно создать компонент vue с нижней чертой и названием того динамического параметра по которому будем переходить-->
<template>
  <section>
    <h1>{{ user.name }}</h1>
    <hr>
    <h3>{{ user.email }}</h3>
    <p>Можно не загружать каждый раз данные с сервера при переходе
      на динамические страницы, а можем один раз запросить их и хранить во vuex.
      Читал как это реализовать, но пока не пробовал на практике</p>
  </section>
</template>

<script>
  export default {
    name: "_id",
    /*Можно организовать валидацию прямиком на сервере при помощи Nuxt,
     но я пока не разбирался с ней нормально*/
    /*В данном случае отсеиваются все пути с строкой всесто цифры*/
    validate({params}) {
      return /^\d+$/.test(params.id)
    },

    async asyncData({$axios, params}) {
      const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id)

      return {user}
    }
  }
</script>

<style scoped>

</style>
