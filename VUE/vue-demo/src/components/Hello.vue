<template>
  <div>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
        <li><a href="http://chat.vuejs.org/" target="_blank" rel="noopener">Vue Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank" rel="noopener">Docs for This Template</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank" rel="noopener">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank" rel="noopener">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
      </ul>
    </div>
    <div class="blocks">

      <div class="block">
        <h6>点击按钮-翻转列表</h6>
        <ul v-for="datalist in datalists">
          <li>{{datalist.name}}</li>
        </ul>
        <button class="reverse-button" @click="reverseList()"> 翻转</button>
      </div>

    <div class="block">
      <h6>二级表单联动</h6>
      <select style="width:100px" @change="chooseProvice($event)">
          <!--<option v-for="item in proviceList">{{item}}</option>-->
        <option v-for="(value,name) in proviceList">{{name}}</option>
      </select>

      <select style="width:100px" @change="chooseCity($event)">
        <option v-for="item in city" v-bind="res">{{item}}</option>
      </select>
      <p>{{res1}}-{{res2}}</p>
    </div>
    <div class="block">
      <h6>功能说明title</h6>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        datalists: [{'name': '1'}, {'name': '2'}, {'name': '3'}, {'name': '4'}],
        msg: 'Welcome to Your Vue.js PWA',
        proviceList: {'北京': ['海淀区', '昌平区', '朝阳区'], '天津': ['天津1', '天津2', '天津3'], '山东': ['济南', '聊城', '青岛']},
        city: ['海淀区', '昌平区', '朝阳区'],
        res1: '北京',
        res2: '海淀'
      }
    },
    methods: {
      reverseList: function () {
        this.datalists = this.datalists.reverse()
      },
      chooseProvice: function (event) {
        this.city = []
        this.city.push(...this.proviceList[event.target.value])
        this.res1 = event.target.value
        this.res2 = []
      },
      chooseCity: function (event) {
        this.res2 = event.target.value
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .blocks {
    width: 100%;
    overflow: hidden;
    display: inline-block;
  }

  .block {
    width: 300px;
    height: 300px;
    float: left;
    border: 1px green solid;

  }
  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }

  .reverse-button {
    width: 100px;
    height: 40px;
  }
</style>
