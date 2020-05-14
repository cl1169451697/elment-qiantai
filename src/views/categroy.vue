<template>
    <div>
        <div class="box">
            <div class="goods" v-for="item in categroy" :key="item.id">
                <h3>{{item.name}}</h3>
                <ul>
                    <li v-for="items in item.children" :key="items.id">
                        <img @click="handel(items.id)" :src="'http://images.canon4ever.com/' +items.image" alt="">
                        <span>{{items.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
import Footer from "@/components/Footer";
export default {
    data(){
        return{
            // 获取列表数据
            categroy:[]
        }
    },
    components:{
        'my-footer':Footer
    },
    created(){
        this.$axios.get(`category`).then(res=>{
            console.log(res);
            let categroy = res.data
            this.categroy = categroy
            
        })
    },
    methods:{
        handel(id){
            console.log(id);
            this.$router.push({name:'list',params:{id:id}})
        }
    }
}
</script>
<style lang="scss" scoped>
    .box{
        background-color: #FAFAFC;
    }
    .goods{
        // border-bottom: 3px solid #FAFAFC;;
        margin-bottom: 5px;
        background-color: #fff;
        h3{
            font-weight: 600;
            color: #000;
            text-align: center;
        }
        ul{
                display: flex;
                flex-wrap: wrap;
                li{
                    width: 25%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img{
                        width: 100px;
                        height: 100px;
                    }
                }
            }
    }
</style>