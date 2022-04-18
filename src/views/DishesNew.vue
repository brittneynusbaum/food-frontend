<script>import axios from "axios";

export default {
  data: function () {
    return {
      newDishParams: {}
    };
  },
  created: function () {
  },
  methods: {
    createDish: function () {
      console.log('creating dish')
      axios.post(`/dishes`, this.newDishParams).then(response => {
        console.log(response.data)
        this.newDishParams = {}
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h3>New Dish</h3>
    <p>Name: <input v-model="this.newDishParams.name"></p>
    <p>Description: <input v-model="this.newDishParams.description"></p>
    <p>Buy again?: <input v-model="this.newDishParams.buy_again"></p>
    <p>Restaurant: <input v-model="this.newDishParams.restaurant"></p>
    <p>Image: <input v-model="this.newDishParams.image"></p>
    <button v-on:click="createDish()">Create new dish</button>
  </div>
</template>

<style>
</style>