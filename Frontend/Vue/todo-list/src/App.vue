<template>
  <div id="app">
    <h1>{{ ask }}</h1>
    <!-- 双花括号语法是一种间简写，完整语法如下： -->
    <h2 v-text="ans"></h2>
    <h2 v-html="ans"></h2>
    <!-- v-text 和 v-html 的区别 -->
  </div>
</template>

<script>
export default {
  // name: 'app',
  data: function() {
    return {
      ask : '你在哪里？',
      ans : '我在这里。<hr>马上回来！',
    }
  }
}
// 上面 相当于  
// new Vue({
//   data : data
// });

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
