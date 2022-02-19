<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      これはVueに実際に触れながら、Vueの仕組みについて理解を深めるためのお試しアプリケーションです。<br />
      ページ上部にあるリンク先にVueの各特徴を知るための簡単な機能があります。<br />
      src/viewsから、それぞれの機能に対応するvueファイルを参照して変更したりしながら、Vueの挙動について体験してみましょう。
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
