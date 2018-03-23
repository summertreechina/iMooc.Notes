<template>
  <div id="app">
    <h1 v-text="pageTitle"></h1>
    <div class="row">
      <div class="col-md-7">

        <p>第一步.</p>
        <div class="ask-wrap">
          <editor></editor>
        </div>

        <p>第二步.</p>
        <div class="ans-wrap">
          <p>选择题答案列表：<small class="text-muted">(双击设置选项正确与否：红色正确，灰色错误；单击进入编辑模式，鼠标失去焦点时自动缓存)</small></p>
          <ol class="show-ans text-muted">
            <li contenteditable="true" v-for="(item, index) in ansList" v-text="item.ans" v-bind:class="{'animated flash text-danger':item.isRight}" v-on:dblclick="item.isRight=!item.isRight" v-on:blur="blurFun($event, item, index)" ></li>
          </ol>
          <div class="submit-ans">
            <textarea class="form-control" rows="4" placeholder="在这里填写答案选项" v-model="currentAns"></textarea>
            <button type="button" class="btn btn-default" v-on:click="submitAns()">缓存本地</button>
          </div>
        </div>

        <p>第三步.</p>
        <div class="explain-wrap">
          <textarea class="form-control" rows="5" placeholder="在这里填写答案分析" v-model="explain"></textarea>
          <button type="button" class="btn btn-default" v-on:click="submitExplain()">缓存本地</button>
        </div>

        <p>第四步.</p>
        <div class="explain-wrap">
          <div class="form-group">
            <label class="col-sm-2 control-label">题目作者：</label>
            <div class="col-sm-10">
              <input v-model="author" type="text" class="form-control" placeholder="姓名和单位">
            </div>
          </div>
        </div>


        <p>第五步.</p>
        <div class="submit-wrap">
          <button type="button" class="btn btn-info" v-on:click="submitServer()">已审查过，确认无误，提交服务器</button>
        </div>
      </div>
      <div class="col-md-5">
        <read-me></read-me>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "./components/Editor";
import readMe from "./components/readMe";
import Axios from 'axios'
import Store from "./store.js";

export default {
  name: 'app',
  data: function() {
    return {
      pageTitle: '管理员.出题页面',
      ansKey: 'ans-tr',
      expKey: 'exp-tr',
      ansList: Store.fetch('ans-tr'),
      explain: Store.fetch('exp-tr'),
      currentAns : '',
      author: '',
    }
  },
  mounted: function() {
    this.$nextTick(function(){
      // Store.delAll();
    });
  },
  components: {
    Editor,
    readMe
  },
  filters: {},
  watch: {
    ansList: {
      handler: function (items) {
        Store.save(this.ansKey, items);
      },
      deep: true
    }
  },
  methods: {
    submitAns: function() {
      if ('' != this.currentAns) {
        this.ansList.push({
          'ans': this.currentAns,
          'isRight' : false,
        });
      }
      this.currentAns = '';
    },
    submitExplain : function() {
      if ('' != this.explain) {
        Store.save(this.expKey, this.explain);
      } else {
        alert('题目解析还未填写');
      }
    },
    blurFun : function($event, item, index) {
      this.ansList[index].ans = $event.srcElement.innerText;
      // 当内容为空时，删除该条目
      if ('' == this.ansList[index].ans) {
        this.ansList.splice(index, 1);
      }
    },
    submitServer : function() {
      let data = {
        askContent: Store.fetch('ask-tr'),
        ansList: Store.fetch('ans-tr'),
        explain: Store.fetch('exp-tr'),
        author: this.author,
      };
      if (data.askContent && data.ansList.length && data.explain) {
      // console.log(data, URL.add);
      // console.log(URL.add);
        Axios.post(URL.add, data).then( (response) => {
          if (response.data.status) {
            alert(response.data.info);
            this.ansList.length = 0;
            this.explain = '';
            this.author = '';
            Store.delAll();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      } else {
        alert('请检查，还有项目未填写');
      }
    } 
  }
}
</script>

<style>
  h1, h2 {
    font-weight: normal;
  }
  .ask-wrap,
  .ans-wrap,
  .submit-wrap {
    margin-bottom: 80px;
    padding: 20px;
    margin: 20px 0  40px 0;
    border: 1px solid #eee;
    border-left-width: 5px;
    border-radius: 3px;
    border-left-color: #1b809e;

    display: flex;
    flex-direction: column;
  }
  .explain-wrap {
    margin-bottom: 100px;
    padding: 20px 20px 80px 20px;
    margin: 20px 0  40px 0;
    border: 1px solid #eee;
    border-left-width: 5px;
    border-radius: 3px;
    border-left-color: #1b809e;
  }
  .submit-wrap {
    margin: 20px 0  40px 0;
    padding: 20px 60px;
  }
  .ans-wrap ol {
    padding: 6px 0px 5px 30px;
    border: 1px solid #eee;
  }
  .ans-wrap li {
    padding: 10px 0px 2px 0px;
    border-bottom: 1px solid #bbb;
    margin-right: 10px;
  }
  .show-ans {
    border-radius: 4px;
  } 
  .ask-wrap .btn,
  .ans-wrap .btn,
  .explain-wrap .btn {
    margin: 10px 0px 20px 10px;
    float: right;
  }
  label {
    font-weight: normal;
  }
</style>