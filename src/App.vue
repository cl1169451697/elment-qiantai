<template>
  <div id="app">
    <!-- <home></home> -->
    <router-view></router-view>
    
  </div>
</template>
<script>
// import Home from "./views/Home";

export default {
  name: "app",
  data() {
    return {
      
    };
  },
  components: {
    // home: Home,
  },
  methods:{
    // handle(index){
    //   // 2. 接受当前点击的索引,然后改变 activeClass的值
    //   this.activeClass = index
    // }
  }
};
</script>
<style lang="scss">

body {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: 400 16px/1.5 PingFangSC-regular, Tahoma, "Lucida Grande", Verdana,
    "Microsoft Yahei", STXihei, hei;
  color: #000;
  // background: #fafafc;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  // height: 2000px;
}

</style>
