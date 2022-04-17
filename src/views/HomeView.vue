<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      dishes: []
    };
  },
  created: function () {
    this.indexDishes()
  },
  methods: {
    indexDishes: function () {
      console.log('all products')
      axios.get("/dishes").then(response => {
        console.log(response.data)
        this.dishes = response.data
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>All dishes</h3>
    <div v-for="dish in dishes" v-bind:key="dish.id">
      <p>{{ dish.name }}</p>
    </div>
  </div>
</template>

<style>
</style>