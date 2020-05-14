<template>
  <div>
  <div class="home">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in slides" :key="item.id">
        <img :src="'http://images.canon4ever.com/' + item.image" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
    <!-- 商品展示 -->
    <div class="nav">
      <div v-for="item in banners" :key="item.id">
        <img
          :src="'http://images.canon4ever.com/' + item.image" alt=""/>
      </div>
    </div>
    <!-- s商品条 -->
    <div class="box">
    <div class="list" v-for="items in showList" :key="items.id">
      <div class="pictu">
        <img :src="'http://images.canon4ever.com/' + items.image" alt="">
        <i v-if="items.is_new" class="new_log">新品</i>
      </div>
      <div class="titme_list">
        <ul>
          <li>{{items.name}}</li>
          <li><p>{{items.description}}</p></li>
          <li>{{items.price}}元 起</li>
        </ul>
      </div>
    </div>
    <div @click="toggle" class="show">
      <span>{{expand}}</span>
    </div>
   </div>
  </div>
  <my-footer></my-footer>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Footer from "@/components/Footer";
export default {
  name: "swiper-example-loop",
  title: "Loop mode / Infinite loop",
  data() {
    return {
      // 接受banners数据
      banners: [],
      // 轮播图图片
      slides: [],
      // 列表
      recommends:[],
      activeClass: 0,
      // 轮播图
      show:false,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        // 自动播放
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        // 分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 左右按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  created() {
    // //  this.$http.get(`/api`).then(res=>{
    // //    console.log(res);

    //  })
    this.$axios.get("http://localhost:8000/api").then((res) => {
      console.log(res);
      let banners = res.data.banners;
      let slides = res.data.slides;
      let recommends = res.data.recommends
      this.banners = banners;
      this.slides = slides;
      this.recommends = recommends
      console.log(this.banners);
    });
  },
  components: {
    Swiper,
    SwiperSlide,
    'my-footer':Footer
  },
  methods:{
    // 点击展示
    toggle(){
      this.show = !this.show
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    // 展示和隐藏
    expand(){
       return this.show?'关闭':'展开'
    },
    showList(){
      if(this.show === false){
        var showList = []
        // 如果数组的数据大于6
        if(this.recommends.length >6){
          // 就遍历这6个数据
          for(var i =0; i< 6; i++){
            // 增加到空数组里面
            showList.push(this.recommends[i])
          }
        }else{
          // 不大于6个的话,就把原来的数据赋值给他
          showList = this.recommends
        }
        return showList // 最后返回这个数组
      }else{
        return this.recommends
      }
    }
  },
  mounted() {
    this.swiper.slideTo(1, 1000, false);
  },
};
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  margin-top: -8px;
  margin-bottom: 5px;
  border-top: 2px solid #fafafc;
  border-bottom: 3px solid #fafafc;;
  div {
    flex: 1;
    img{
      width: 100%;
    }
  }
  div:nth-of-type(2) {
    border-left: 3px solid #fafafc;
    border-right: 3px solid #fafafc;
  }
}
.swiper-slide {
  width: 100%;
  height: 220px;
  img {
    width: 100%;
  }
}

/* 商品条 */
 .box{
    margin-bottom: 70px;
  }
.list {
  display: flex;
  margin-bottom: 5px;
  background-color: #fff;
  align-items: center;
  border-bottom: 3px solid #fafafc;
  .pictu {
    position: relative;
    width: 100px;
    img{
      width: 100%;
      margin-left: 20px;
    }
    .new_log{
      position: absolute;
      left: 0px;
      top:0px;
      width: 35px;
      height: 35px;
      text-align: center;
      line-height: 35px;
      border-radius: 50%;
      background-color: #91C255;
      color: #fff;
      font-size: 14px;
      z-index: 1;
    }
  }
 
  .titme_list {
    box-sizing: content-box;
    flex: 2;
    ul {
      display: flex;
      flex-direction: column;
      li {
        text-align: center;
        flex: 1;
      }
       li:nth-of-type(1){
         font-weight: 600;
         font-size: 14px;
       }
      li:nth-of-type(2){
        line-height: 15px;
        padding: 0px 45px;
        color: #999;
      }
      li:nth-of-type(3){
        font-weight: 600;
        color: #D1592F;
      }
    }
  }
  
}
.show{
  position: relative;
  span{
    color: #999;
  }
  span::after{
    position: absolute;
    top: 6px;
    left: 37px;
    content: '';
    width: 7px;
    height: 7px;
    border-top: 2px solid #999;
    border-right: 2px solid #999;
    transform: rotate(135deg);
  }
}
// 解决插槽闪动
[v-cloak]{
  display: none;
}



</style>
