<template>
  <div class="wrapper">
    <div>
      <div><input type="checkbox" v-model="checked" /> <span>画像を表示する</span></div>
      <!-- v-model="checked" は v-on:checked="checked" と v-bind="checked" 両方指定した場合の省略記法  -->
      <div><img v-if="checked" src="https://picsum.photos/100" /></div>
      <!-- v-else 、 v-else-if や v-show もある -->
      <!-- v-ifは頻繁に切り替わらないもの、v-showは頻繁に切り替えるものに使うと良い -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    }
  },
}
</script>

<style lang="sass" scoped>
.wrapper
  >div
    height: 150px
    display: grid
    grid-template-rows: 50px 100px
</style>
