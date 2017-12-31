<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-text='title'></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew()" placeholder="add a new item">
    <ul>
      <li v-for="item in items" v-bind:class="{ finished : item.isFinished }" v-on:click="item.isFinished=!item.isFinished">{{ item.label }}</li>
    </ul>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Store from "./store.js";

export default {
  name: 'app',
  data: function() {
    return {
      title : 'This is a ToDo-List',
      items : Store.fetch(),
      newItem : ''
    }
  },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items);
      },
      deep: true
    }
  },
  methods: {
    toggleFinish : function(item) {
      item.isFinished = !item.isFinished;
    },
    addNew : function() {
      if ('' != this.newItem) {
        this.items.push({
          label : this.newItem,
          isFinished : false
        })
        this.newItem = ''
      }
    }
  }
}
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
#app>img {
  width: 1.6rem;
  position: relative;
  left: -10rem;
  top: 3.9rem;
}
#app>ul {
  list-style: none;
}
#app .finished {
  color: #9E9E9E;
  text-decoration: line-through;
}
</style>
