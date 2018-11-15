<template>
  <div>
    <h1>Lord of The Rings</h1>
    <p>Do you think LoTR is the best trilogy?</p>
    <button class="btn btn-primary" @click="show = ! show">Yes</button>
    <button class="btn btn-primary" @click="clickno = !clickno"> No </button>
    <div class="alert alert-info" v-show="show">You are Correct! </div>
    <div class="alert alert-info" v-show="clickno">False! You are incorrect </div>
    <hr>
    <hr>
    <p>Location: {{$route.query.location}}</p>
    <p>hobbits: {{$route.query.hobbits}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        clickno: false
      }
    }
  }
</script>

<style>

</style>
