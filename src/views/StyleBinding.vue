<template>
  <div class="wrapper">
    <div>
      <div class="filter">
        <input type="checkbox" v-model="blur" /> ブラー<br />
        <input type="checkbox" v-model="contrast" /> コントラスト<br />
        <input type="checkbox" v-model="saturate" /> サチュレート<br />
        <input type="checkbox" v-model="grayscale" /> グレースケール<br />
        <input type="checkbox" v-model="invert" /> インバート<br />
      </div>
      <div>
        <img src="https://picsum.photos/260/130" :style="getStyle" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blur: false,
      contrast: false,
      grayscale: false,
      invert: false,
      saturate: false,
    }
  },
  computed: {
    getStyle() {
      let str = 'filter: '
      str += this.blur ? 'blur(5px)' : ''
      str += this.contrast ? 'contrast(200%)' : ''
      str += this.saturate ? 'saturate(200%)' : ''
      str += this.grayscale ? 'grayscale(100%)' : ''
      str += this.invert ? 'invert(100%)' : ''
      str += ';'
      return str
    },
  },
}
</script>

<style lang="sass" scoped>
.wrapper
  >div
    display: grid
    grid-template-rows: 1fr 1fr
.filter
  text-align: left
  width: 200px
  margin: 0 auto
</style>
