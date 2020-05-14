<template>
  <div>
      <div id="wrapper">
    <div class="page-list" data-log="商品列表">
        <ol class="version">
            <li v-for="item in formList" :key="item.id" >
                <router-link :to="{name:'view',params: {id:item.id}}">
                <a class="version-item" href="#">
                    <div class="version-item-img">
                        <img :src="'http://images.canon4ever.com/'+item.image">
                    </div>
                    <div class="version-item-intro">
                        <div class="version-item-name"><p>{{item.name}}</p></div>
                        <div class="version-item-intro-price"><span>{{item.price}}</span></div>
                    </div>
                </a>
                </router-link>
            </li>
        </ol>
    </div>
</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            // 获取列表数据
            formList:[]
        }
    },
    created(){
        this.gitList()
    },
    methods:{  
      async  gitList(){
            let id = this.$route.params.id // 接受当前路由的参数
         const {data: res} = await this.$axios.get(`/product/list?id=${id}`)
            // 给当前的私有数据赋值
            this.formList = res
        },
        // handel(id){
        //     console.log(id);
        //     this.$router.push({name:'view',params:{id:id}})
        // }
    }
}
</script>

<style lang="scss" scoped>
    
// .version-item{
//     display: flex;
//     justify-content: center;
//    align-items: center;
//     div{
//         flex: 1;
//         p{
//             line-height: 15px;
//         }
//     }
// }
</style>