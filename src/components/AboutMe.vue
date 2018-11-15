<template>
  <div>
    <h1>About Me, Naomi Cox</h1>
    <p>this isn't really about me, since there isn't much to say</p>
    <p>I like dogs</p>
    <router-link
      tag="button"
      :to="{name: 'LOTR', params: {id: $route.params.id}, query:{location: 'MiddleEarth', hobbits: 4}}"
      class="btn btn-primary">
      Get the Info
    </router-link>

  </div>
</template>

<script>

</script>

<style>

</style>
