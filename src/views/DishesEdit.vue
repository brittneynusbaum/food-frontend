<script>import axios from "axios";

export default {
  data: function () {
    return {
      editDishParams: {}
    };
  },
  created: function () {
    axios.get(`/dishes/${this.$route.params.id}`).then(response => {
      console.log(response.data)
      this.editDishParams = response.data
    })
  },
  methods: {
    updateDish: function () {
      console.log('updating dish')
      axios.patch(`/dishes/${this.$route.params.id}`, this.editDishParams).then(response => {
        console.log(response.data)
        this.$router.push(`/dishes/${this.$route.params.id}`)
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ "Update dish:" }}</h1>
    <p>Name: <input v-model="editDishParams.name"></p>
    <p>Description: <input v-model="editDishParams.description"></p>
    <p>Buy again?: <input v-model="editDishParams.buy_again"></p>
    <p>Restaurant: <input v-model="editDishParams.restaurant"></p>
    <p>Image: <input v-model="editDishParams.image"></p>
    <img v-bind:src="editDishParams.image">
    <p><button v-on:click="updateDish()">Update dish</button></p>
  </div>
</template>

<style>
</style>