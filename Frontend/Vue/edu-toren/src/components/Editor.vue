<template>
  <div class="child-wrap">
    <div id="ask" style="text-align:left">
      <p v-html="LocalAsk.cont"></p>
      <!-- <p v-text="LocalAsk.cont"></p> -->
      <p v-model="LocalAsk"></p>
    </div>
    <button v-on:click="saveLocal()" type="button" class="btn btn-default">缓存本地</button>
    <button type="button" class="btn btn-default" v-on:click="getLocal()" v-if="getLocalBtn">提取缓存</button>
  </div>
</template>

<script>
import E from 'wangeditor'
import Store from '../store.js'

export default {
  name: 'editor',
  data () {
    return {
      editorContent: Store.fetch('ask-tr'),
      LocalAsk: '',
      getLocalBtn: true,
      askKey: 'ask-tr'
    }
  },
  methods: {
    saveLocal: function() {
      Store.save(this.askKey, {cont: this.editorContent});
    },
    getLocal: function() {
      this.LocalAsk = Store.fetch(this.askKey);
      this.getLocalBtn = false;
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      let editor = new E('#ask')
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.customConfig.menus = [
        'head',  // 标题
        'bold',  // 粗体
        'italic',  // 斜体
        'underline',  // 下划线
        'strikeThrough',  // 删除线
        'foreColor',  // 文字颜色
        'backColor',  // 背景颜色
        'link',  // 插入链接
        'list',  // 列表
        'justify',  // 对齐方式
        'quote',  // 引用
        'emoticon',  // 表情
        'image',  // 插入图片
        'table',  // 表格
        'video',  // 插入视频
      ]
      // editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
      editor.create()
      editor.$textElem.attr('contenteditable', true)
    })
  }
}
</script>

<style scoped>
</style>