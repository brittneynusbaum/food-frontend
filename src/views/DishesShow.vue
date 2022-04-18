<script>import axios from "axios";

export default {
  data: function () {
    return {
      message: "Dish:",
      currentDish: {}
    };
  },
  created: function () {
    this.indexDish()
  },
  methods: {
    indexDish: function () {
      console.log('showing dish')
      axios.get(`/dishes/2`, this.currentDish).then(response => {
        console.log(response.data)
        this.currentDish = response.data
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p><b>Name: </b> {{ this.currentDish.name }}</p>
    <p><b>Description:</b> {{ this.currentDish.description }}</p>
    <p><b>Buy again?:</b> {{ this.currentDish.buy_again }}</p>
    <p><b>Restaurant:</b> {{ this.currentDish.restaurant }}</p>
    <img v-bind:src="this.currentDish.image">
  </div>
</template>

<style>
</style>