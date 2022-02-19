<template>
  <div class="wrapper">
    <div>
      <span>カウンター: {{ counter }}</span> <br />
      <button v-on:click="increment">+1</button>
      <button @click="decrement">-1</button>
      <!-- "v-on:" は "@" に省略可能 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
  },
}
</script>

<style lang="sass">
button
  margin: 0 5px
</style>
