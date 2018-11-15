<template>
  <ul class="nav nav-pills">
    <router-link to="/food" tag="li" active-class="active" exact><a>Food</a></router-link>
    <router-link to="/aboutme" tag="li" active-class="active"><a>AboutMe </a></router-link>
    <router-link
      :to="{name: 'LOTR', params: {id: $route.params.id}, query:{locale: 'MiddleEarth', hobbits: 4}}"
      tag="li" active-class="active"><a>LOTR </a></router-link>
  </ul>
</template>

<script>

</script>

<style>

</style>
