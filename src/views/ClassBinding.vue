<template>
  <div class="wrapper">
    <div>
      <div id="shape">
        <h4>形</h4>
        <template v-for="shape in shapes" :key="shape">
          <input type="radio" :value="`shape-${shape.toLowerCase()}`" v-model="selectedShape" />
          <label>{{ shape }}</label>
          <br />
        </template>
      </div>
      <div id="color">
        <h4>色</h4>
        <template v-for="color in colors" :key="color">
          <input type="radio" :value="`color-${color.toLowerCase()}`" v-model="selectedColor" />
          <label>{{ color }}</label>
          <br />
        </template>
      </div>
      <div id="style">
        <div :class="{ [selectedColor]: true, [selectedShape]: true }"><span>スタイル</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedShape: 'shape-tile',
      selectedColor: 'color-gray',
      shapes: ['Tile', 'Rounded', 'Circle'],
      colors: ['Gray', 'Skyblue', 'Olivedrab', 'Crimson', 'Pink'],
    }
  },
}
</script>

<style lang="sass" scoped>
// class binding で利用している style
.shape
  &-tile
    border-radius: 0
  &-rounded
    border-radius: 30px
  &-circle
    border-radius: 100%

$white: #f2f2f2
$black: #1c1c1c

.color
  &-gray
    background: gray
    color: $white
  &-skyblue
    background: skyblue
    color: $black
  &-olivedrab
    background: olivedrab
    color: $white
  &-crimson
    background: crimson
    color: $white
  &-pink
    background: pink
    color: $black
</style>

<style lang="sass" scoped>
// レイアウトで利用している style
.wrapper
  >div
    display: grid
    grid-template-columns: 1fr 1fr
    grid-template-rows: 175px 1fr

#shape
  grid-row: 1 / 2
  grid-column: 1 / 2
  text-align: left
  padding-left: 20px

#color
  grid-row: 1 / 2
  grid-column: 2 / 3
  text-align: left
  padding-left: 20px

#style
  grid-row: 2 / 3
  grid-column: 1 / 3
  display: flex
  justify-content: center
  align-items: center
  >div
    line-height:100px
    width: 100px
    height: 100px
</style>
