<template>
  <div id="readMe">
    <h2>使用说明</h2>
  </div>
</template>

<script>
export default {
  name: 'readMe',
  data () {
    return {
      msg: '使用说明'
    }
  }
}
</script>

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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
