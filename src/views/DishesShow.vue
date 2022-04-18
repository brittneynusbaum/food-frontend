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
      axios.get(`/dishes/${this.$route.params.id}.json`).then(response => {
        console.log(response.data)
        this.currentDish = response.data
      })
    },
    destroyDish: function () {
      console.log('delete product')
      axios.delete(`/dishes/${this.$route.params.id}.json`).then(response => {
        console.log(response.data)
        this.currentDish.destroy
        this.$router.push('/dishes')
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p><b>Name: </b> {{ currentDish.name }}</p>
    <p><b>Description:</b> {{ currentDish.description }}</p>
    <p><b>Buy again?:</b> {{ currentDish.buy_again }}</p>
    <p><b>Restaurant:</b> {{ currentDish.restaurant }}</p>
    <img v-bind:src="currentDish.image">
    <p>
      <router-link v-bind:to="`/dishes/${this.$route.params.id}/edit`">Update dish</router-link>
    </p>
    <hr />
    <p><button v-on:click="destroyDish()">Delete Dish</button></p>
  </div>
</template>

<style>
</style>