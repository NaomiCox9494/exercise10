<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>This is my main page thing </h1>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from './components/Header.vue';

export default {
  data () {
    return {

    }
  },
  components: {
    appHeader: Header
  }
}
</script>

<style>

  .slide-leave-active{
    transition: opacity 300ms ease;
    opacity: 0;
    animation: slide-out 300ms ease-out forwards;
  }

  .slide-leave{
    opacity: 300ms;
    transform: translateY(0);
  }

  .slide-enter-active{
    animation: slide-in 300ms ease-out forwards;
  }

  @keyframes slide-out{
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(-30px);
    }
  }
  @keyframes slide-in{
    0%{
      transform: translateX(-30px);
    }
    100%{
      transform: translateX(0);
    }
  }

</style>
