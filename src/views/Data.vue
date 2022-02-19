<template>
  <div class="wrapper">
    <div>
      <!-- {{ 変数 }}でHTMLにデータを展開できる -->
      <span style="display: block">カウンター: {{ counter }}</span>
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
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
}
</script>
