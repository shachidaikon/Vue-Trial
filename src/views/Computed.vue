<template>
  <div class="wrapper">
    <div>
      <h3>年齢を入力してください</h3>
      <input type="number" v-model.number="age" /><br />
      <!-- .number は自動的に number 型にキャストしてくれる修飾子。なお、type="number"が書いてあったとしても HTML の input 要素は常に文字列を返す -->
      <span> {{ getText }} </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 0,
      isSubmit: false,
    }
  },
  computed: {
    getText() {
      if (this.age < 20) return '未成年にはお酒を販売できません。'
      else return 'お酒をご購入いただけます。'
    },
  },
  // computed は算出プロパティと呼び、参照しているリアクティブな変数(data内に定義した変数)が変更されると再評価される
  // 似たものに、リアクティブな変数を監視する watch (ウォッチャ)がある
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

input
  width: 40px
</style>
