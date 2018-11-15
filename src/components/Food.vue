<template>
  <div>
    <h1>My Favorite Foods!</h1>
    <ul>
      <li v-for=" (food, index) in foods">
        {{food}}
      </li>
    </ul>
    <button @click="navigateToHome" class="btn btn-primary">Go Home</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        foods: ['mac and cheese', 'warm bread', 'nabe', 'inarizushi']
      }
    },
    methods: {
      navigateToHome(){
        this.$router.push({name: 'home'})
      }
    }
  }

</script>

<style>

</style>
