<template>
  <div id="wrapper">
    <div class="cart-index">
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

    <!-- 使用组件 -->
    <my-footer></my-footer>
</div>
</template>

<script>
// 1.引入组件
import Footer from '@/components/Footer'
export default {
    data(){
        return{

        }
    },
    //2. 注册组件
    components:{
        'my-footer':Footer
    }
}
</script>

<style lang="scss" scoped>

</style>