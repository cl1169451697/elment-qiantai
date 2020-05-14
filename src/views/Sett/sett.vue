<template>
  <div class="wrap">
    <div class="page-order-checkout">
        <div class="page-order-checkout-wrap">
            <div class="b1 icon_arrow">
                <router-link :to="{name:'address'}">
                    <template v-if="address">
                         <div class="b11"><p><span>{{address.name}}</span><span>{{address.tel}}</span></p></div>
                         <div class="b13"><p><span>{{address.province}}</span><span>{{address.city}}</span><span>{{address.area}}</span></p></div>
                    </template>
                    <template v-else>
                        <div class="b11"><span>没有收货地址</span></div>
                        <div class="b13">
                            <p id="address">
                                <span style="color:red">亲,请先填写一个收货地址</span>
                            </p>
                        </div>
                    </template>
                </router-link>   
            </div>
            <div class="ui_line"></div>
            <div class="b2">
                <ul>
                    <li class="on"><a href="javascript:;" class="alipaywap">微信支付</a></li>
                    <li class=""><a href="javascript:;" class="">货到付款</a></li>
                </ul>
            </div>
            <div class="ui_line"></div>

            <!--
            <div class="b3 icon_arrow">
                <dl>
                    <dt><span>电子发票</span><strong>发票类型</strong></dt>
                </dl>
            </div>
            <div class="b3 icon_arrow">
                <dl>
                    <dt><span>不限送货时间</span><strong>送货时间</strong></dt>
                </dl>
            </div>
            <div class="ui_line"></div>
            -->

            <div class="b8">
                <div class="b8w" v-for="item in carts" :key="item.id">
                    <div class="b81">
                        <div class="img"><img :src="'http://images.canon4ever.com/'+item.product.image">
                        </div>
                    </div>
                    <div class="b82">
                        <div class="name"><p>
                            <span>{{item.product.name}}X</span><span>{{item.num}}</span></p></div>
                    </div>
                    <div class="b83">
                        <div class="price"><strong>{{item.product.price * item.num}}元</strong></div>
                    </div>
                </div>
            <div class="ui_line"></div>
            <div class="b5">
                <div class="b51"><p><strong>商品价格：</strong><span>{{count.total_price}}</span></p></div>
                <div class="b53"><p><strong>配送费用：</strong><span>0元</span></p></div>
            </div>
            <div class="b7">
                <div class="b71"><span>共{{carts.length}}件 合计: </span><strong>{{count.total_price}}</strong></div>
                <div class="b72"><a href="javascript:;" class="ui-button"><span>去付款</span></a></div>
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
            address:{},
            carts:[],
            count:{}
        }
    },
    created(){
        this.getSettList()
    },
    methods:{
        getSettList(){
            this.$axios.get(`/order/checkout`).then(res=>{
                console.log(res);
                this.address = res.data.address 
                this.carts = res.data.carts  // 购物车列表
                this.count = res .data.count // 商品数量 和总额
            })
        }
    }
}
</script>

<style lang="sass" scoped>

</style>