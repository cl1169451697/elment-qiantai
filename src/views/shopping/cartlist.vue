<template>
  <div id="wrapper">
    <div class="cart-index" v-if="formList.length >0" v-cloak >
      <div class="cart-index-wrap">
        <div class="cart-list">
          <ul>
            <li class="item" v-for="(item,index) in formList" :key="item.id">
              <div class="ui-box">
                <div class="imgProduct">
                  <a href="/1/#/product/view?product_id=1153200008">
                    <img :src="'http://images.canon4ever.com/'+item.product.image" />
                  </a>
                </div>
                <div class="info ui-box-flex">
                  <div class="name">
                    <span>{{item.product.name}}</span>
                  </div>
                  <div class="price">
                    <p>
                      <span>售价：</span>
                      <span>{{item.product.price}}</span>
                      <span>合计：</span>
                      <span>{{item.product.price * item.num}}</span>
                    </p>
                    <div class="tip">
                      <span style="display: none;">请于2016/04/11 00:58前下单，逾期将失效。</span>
                    </div>
                  </div>
                  <div class="num">
                    <div class="xm-input-number">
                      <!-- 减少 -->
                      <div class="input-sub" @click="changeNum(item,'dec')"></div>
                      <div class="input-num">
                        <span>{{item.num}}</span>
                      </div>
                      <!-- 增加 -->
                      <div class="input-add active" @click="changeNum(item,'inc')"></div>
                    </div>
                    <div class="delete" @click="remove(item.id,index)">
                      <a href="javascript:;">
                        <span class="icon-iconfontshanchu"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="append"></div>
            </li>
          </ul>
        </div>
        <div class="pointBox">
          <div class="point" style="display: none;">
            <span class="act act_special">包邮</span>
            <span></span>
          </div>
          <div class="point">
            <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
          </div>
        </div>

        <!-- Navbar -->
        <div class="bottom-submit ui-box">
          <div class="price">
            <span>共{{cont.num}}件 金额：</span>
            <br />
            <strong>{{cont.zj}}</strong>
            <span>元</span>
          </div>
          <div class="btn">
            <router-link class="ui-button ui-button-disable" :to="({name:'categroy'})">继续购物</router-link>
          </div>
          <div class="btn">
            <a class="ui-button" href="/1/#/order/checkout?address_type=common">
              <span >
                <router-link :to="{name:'sett'}">去结算</router-link>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 清空 -->
    <div class="cart-index" v-if="flag" >
        <div style="height:1rem;"></div>

        <div class="cart-index-wrap">
            <div class="empt">
                <div class="b3">
                    <a href="/1/#/product/category" class="ui-button ui-button-disable">
                        <span>全部商品</span>
                    </a>
                    <a href="/1/#/index/recommend" class="ui-button">
                        <span>精选商品</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>
  
</template>
<script>
export default {
  data(){
    return{
     
      formList:[],
      count:[],
      show:true,
      flag:false  // 第二个页面默认显示关
    }
  },
  created(){
    this.info()
  },
  watch:{
      formList(){
        this.flag = this.formList.length == 0 ?true:false
      }
  },
  methods:{
    // 请求axios购物车
    info(){
      this.$axios.get(`/cart`).then(res=>{
        console.log(res);
        this.count = res.data.count
        this.formList = res.data.carts
        // this.product = res.data.carts.map(item=>{
        //   return item.product
        // })
      })
    },
    // 商品的减少和增加
changeNum(item,type){
     console.log(item.id,type);
  //  //  方法一:
  //    new Promise((resolve,reject)=>{
  //        if(type =='dec' && item.num <= 1){
  //       return false
  //     }
  //       const{data:res} = this.$axios.patch(`http://localhost:8000/api/cart`,{cart_id:item.id,type:type})
       
  //   resolve()
  //    }).then(()=>{
  //        type == 'inc' ? item.num++:item.num--
  //    })

     if(this.show){ // 夹心饼干写法
       if(type =='dec' && item.num <= 1){
        return false
      }
        this.show = false
       this.$axios.patch(`http://localhost:8000/api/cart`,{cart_id:item.id,type:type}).then(res=>{
         this.show = true
      type == 'inc' ? item.num++:item.num--
       })
      
     }
      
    
    },  
    // 删除商品
    remove(id,index){
      console.log(id);
        this.$axios.delete(`/cart?cart_id=${id}`).then(res=>{
          this.formList.splice(index,1) // 删除对应的索引值,删除一个
          if(this.formList.length <= 0 ){
            this.flag = true
          }
        })
    },
    // 继续购物
    go_shop(){
      this.$router.go(-1)
    }
  },
  computed:{
    cont(){
        let num = 0
        let zj = 0
      let form =  this.formList.map(item=>{
          num += item.num // 计算数量
          zj += item.num * item.product.price // 计算总价
          return num
          return zj
        })
        return {num:num,zj:zj}
        console.log(form);
        
    }
  }
};
</script>
<style lang="scss" scoped>
.yc{
  display: none;
}
[v-cloak] {

  display:none !important;

}
</style>