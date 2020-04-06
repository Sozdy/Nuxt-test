<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <nuxt-link no-prefetch class="navbar-brand" to="/">Place for logo</nuxt-link>

    <div class="navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <!--Если использовать обычные теги <a> то каждый раз переходя по ссылке будет перезагружаться сайт, чтоб этого избежать можно использовать специальные теги -->
          <!--Если задать nuxt-link атрибут active-class="class"(в данном случае используеься bootstrap's класс active)
          то когда ссылка активна она будет принимать этот класс (данный параметр будет распросраняться до родительского тега) -->
          <!--но так-как в ссылке /about/ есть '/' то будет посвечиваться ссылка содержащая этот слэш, чтоб избежать этого нужно добавить это ссылке параметр exact(по умолчанию он всегда false, но если указать его он станет true)-->
          <nuxt-link no-prefetch exact active-class="active" class="nav-link" to="/">Home</nuxt-link>
          <!--у этих ссылок есть фитча, что они загружают автоматом "соседние" странички (все на которые есть ссылки) в lazy-load, чтоб производительность приложения на клиенте была максимальной, -->
          <!--можно управлять этим поведениес если в nav-link указать параметр no-prefetch тогда будет грузиться только та страница на котрый находимся-->
        </li>
        <li class="nav-item">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/about">About</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/users">Users</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/layout">Another_layout</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>
  .navbar-nav {
      display: flex;
      flex-direction: row;
  }

  .bg-light {
    background-color: #ebebeb !important;
  }

  .nav-link {
    margin-right: 1em;
  }
</style>
