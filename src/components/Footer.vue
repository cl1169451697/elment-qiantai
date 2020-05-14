<template>
  <div class="footer" >
      <ul>                                                   <!--1 点击携带索引 -->
        <li  >
          <router-link to="/" active-class="no" exact >
            <i class="iconfont icon-shangcheng-copy1"></i>
            <span>商城</span>
          </router-link>
        </li>
         <li  >
          <router-link to="/categroy" active-class="no"  >
            <i class="iconfont icon-fenlei"></i>
            <span>分类</span>
          </router-link>
        </li>
         <li >
          <router-link :to="{name:'cartlist'}" active-class="no" >
            <i class="iconfont icon-gouwuche"></i>
            <span>商城</span>
          </router-link>
        </li>
         <li >
          <router-link to="/user" active-class="no" >
            <i class="iconfont icon-fuwu"></i>
            <span>服务</span>
          </router-link>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  position: fixed;
  background-color: #fff;
  bottom: 0px;
  z-index: 1;
  ul {
    display: flex;
    border-top: 1px solid #ccc;
    li {
      flex: 1;
      a{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #999;
        span{
          line-height: 20px;
        }
      }
    }
  }
}

   .no{
     color: red!important;
   }
</style>