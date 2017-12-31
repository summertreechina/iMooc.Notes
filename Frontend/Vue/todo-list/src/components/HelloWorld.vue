<template>
  <div class="hello">
    <h1 v-text="msg"></h1>
    <h2>用前必读</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">核心文档</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">论坛</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">社区聊天</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">模版文档</a></li>
    </ul>
    <h2>生态系统</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到您的第一个 Vue.js App'
    }
  }
  // data : function() {
  //   return {
  //     msg : '哈哈，我必须要试试呢'
  //   }
  // }
  // function data() {
  //   return {
  //     msg : '这是data数据输出的第三种方法。可惜不能用了。'
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 01px;
}
a {
  color: #42b983;
}
</style>
