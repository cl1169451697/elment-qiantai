<template>
  <div id="wrapper">
    <div class="page-address-list" data-log="地址列表">
        <div class="address-choose">
            <ul class="ui-list" v-for="item in listTabl" :key="item.id" @click="getxz(item.id)">
                <li class="ui-list-item"><p class="ui_fz30"><span class="consignee">{{item.name}}</span><span>{{item.tel}}</span>
                </p>
                    <p><span>{{item.province}}</span><span>{{item.city}}</span><span>{{item.area}}</span></p>
                    <p>{{item.detail}}</p></li>
            </ul>
        </div>
        <div class="add"><router-link :to="{name:'newaddress'}" class="ui-button ui-button-active"><span>新建地址</span></router-link></div>
        <div class="popup-risk-check"></div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            listTabl:[]
        }
    },
    created(){
        this.getAddressList()
    },
    methods:{
        getAddressList(){
            this.$axios.get(`/address`).then(res=>{
                console.log(res,11);
                this.listTabl = res.data
            })
        },
        getxz(id){
            console.log(id);
            this.$axios.patch(`/address`,{address_id:id}).then(res=>{
                this.$router.push('sett')
            })
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>