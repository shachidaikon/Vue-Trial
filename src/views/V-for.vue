<template>
  <div class="wrapper">
    <div>
      <h3>フルーツリスト</h3>
      <ul>
        <li v-for="fruit in fruits" :key="fruit.id">{{ fruit.name }}</li>
        <!-- ":" は "v-bind:" の省略記法 -->
        <!-- v-for にはユニークな key が必要です -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: [
        {
          name: 'みかん',
          id: 0,
        },
      ],
    }
  },
  mounted() {
    setTimeout(() => {
      this.fruits.push({
        name: 'りんご',
        id: 1,
      })
    }, 1000)
    setTimeout(() => {
      this.fruits.push({
        name: 'ぶどう',
        id: 2,
      })
    }, 2000)
  },
}
</script>

<style lang="sass">
.wrapper
  position: relative
  display: inline-block
  width: 300px
  height: 300px
  margin: 0 auto
  box-shadow: 0 2px 5px rgba(0,0,0,0.26)
  >div
    position: absolute
    width: 100%
    top: 50%
    left: 50%
    transform: translateY(-50%) translateX(-50%)

ul
  width: 100px
  margin: 0 auto
</style>
