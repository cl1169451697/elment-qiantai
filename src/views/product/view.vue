<template>
  <div>
      <div id="wrapper" style="display: block">
    <div class="page-product-view" data-log="商品详情">

        <div class="header"><div class="left"><a @click=" $router.go(-1)" class="home" data-stat-id="346f31c749f6e40d"><img src="http://s1.mi.com/m/images/m/icon_back_n.png" class="ib"></a><!--vue-if--><!--vue-if--></div><div class="tit"><!--vue-if--></div><div class="right"><a href="javascript:;" data-event="30000000110001001" data-stat-id="6c93ea1c6bb6eb01" onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-6c93ea1c6bb6eb01', 'javascript:;', 'pcpid']);"><div class="icon icon-search"></div></a></div></div>

        <div class="product-view">
            <div class="b1">
                <img :src="product.image?'http://images.canon4ever.com/'+product.image:''">
            </div>
            <div class="b2">
                <div class="b21">
                    <div class="b211">
                        <div class="name"><p>{{product.name}} </p></div>
                        <div class="price"><strong>{{product.price}}</strong></div>
                    </div>
                    <div class="b212">
                        <div class="icon-fenxiang"></div>
                    </div>
                </div>
                <div class="b22">
                    <p>{{product.description}}</p>
                </div>
            </div>
            <div class="mt20" style="display: none;"></div>

            <!--<ul class="b3">-->
            <!--<li><span class="on">白色</span></li>-->
            <!--</ul>-->

            <ul class="b3" style="display: none;">
                <li><span>通用</span></li>
            </ul>

            <div class="ui-b7">
                <h3>为您推荐</h3>
                <div class="ui-carousel-container">
                    <div class="ui-carousel-viewport">
                        <swiper class="swiper" :options="swiperOption">
                            <swiper-slide v-for="item in recommends" :key="item.id">
                                <router-link :to="{name:'view',params:{id:item.id}}">
                                <img :src="'http://images.canon4ever.com/' + item.image" alt="">
                                </router-link>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
            <div class="b5">
                <div class="b51"></div>
                <div class="b52">
                    <div class="blc">
                        <ul>
                            <li>
                                <div class="img">
                                    <p v-html="product.markdown_html_code"></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div v-if="product.stock > -20" class="b7 chack"   >
                <div class="b70">
                    <a href="/1/#/index">
                        <div class="icon-home"></div>
                    </a>
                </div>
                <div class="b72" @click="addShoop(product.id)">
                    <!--<a href="javascript:;" class="off">暂时缺货</a>-->
                    <a href="javascript:;">立即购买</a>
                </div>

                <div class="b73">
                    <a href="/1/#/cart/index">
                        <div class="icon-gouwuche"></div>
                    </a>
                </div>
            </div>
            <a href="javascript:;" id="top" style="visibility: visible;">
                <img src="http://s1.mi.com/m/images/m/top.png">
            </a>
        </div>
        <div class="share-component"></div>
    </div>
</div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
export default {
      name: 'swiper-example-free-mode',
    title: 'Free mode / No fixed positions',
    components: {
      Swiper,
      SwiperSlide
    },
    data(){
        return{
            product:{},
            // 存储图片
            recommends:[],
             swiperOption: {
                  slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
        }
    },
    created(){
        this.getList()
    },
    // 侦听器,路由id发生变化,就重新加载页面
    watch:{
        "$route":"getList"
    },
    methods:{
      async  getList(){
        let id = this.$route.params.id;// 接受路由id
       const {data:res} = await this.$axios.get(`/product/view?id=${id}`)
        console.log(res);
        this.product = res.product
        
        // 保存图片
        this.recommends = res.recommends
        },
        // 点击添加购物车
        addShoop(id){
            this.$axios.post(`/cart`,{product_id:id}).then(res=>{
                console.log(res);
                this.$router.push({name:'cartlist'})
            })
        }
        
    },
    
}
</script>

<style lang="scss" scoped>
.swiper-container div{
    width: 100px!important;
    height: 100px!important;
    
}
.page-product-view .ui-b7 .ui-carousel-viewport img{
    width: 100%;
    height: 100%;
}
.chack{
    width: 100%;
  position: fixed;
  background-color: #fff;
  bottom: 0px;
  z-index: 3;
}
</style>
