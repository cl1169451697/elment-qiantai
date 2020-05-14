<template>
  <div id="wrapper">
    <div class="page-address-edit" data-log="地址">

        <div class="edit-box">
            <ul class="ui-list">
                <li class="ui-list-item">
                    <div class="label">收货人：</div>
                    <div class="ui-input"><input v-model="address.name" placeholder="真实姓名" name="consignee" maxlength="15" type="text"></div>
                </li>
                <li class="ui-list-item">
                    <div class="label">手机号码：</div>
                    <div class="ui-input"><input v-model="address.tel" placeholder="手机号" name="tel" maxlength="13" type="tel"></div>
                </li>
                <li class="ui-list-item">
                    <div class="label">所在地区：</div>
                    <div class="ui-input" @click="xs">
                        <input v-model="address.pca"  placeholder="省 市 区" name="pcd" maxlength="20" type="text" readonly="readonly" value="">
                    </div>
                </li>
                <li class="ui-list-item">
                    <div class="label" >街道地址：</div>
                    <div class="ui-input" ><input v-model="address.detail" placeholder="详细地址" name="address" maxlength="120" type="text"></div>
                </li>
            </ul>
            <div class="save-button">
                <a  class="ui-button" @click="save"><span>保存地址</span></a>
            </div>
        </div>


        <div class="ui-mask" v-if="show" ></div>
        <div class="ui-pop" v-if="show">
            <div class="ui-pop-content">
                <div class="region-list">
                   <v-distpicker type="mobile" @selected="show_modeal"></v-distpicker>
                </div>
            </div>
            <div class="ui-pop-title">选择所在地区</div>
            <div class="ui-pop-close"><a><span class="icon-10chahaokuang" @click="gb"></span></a></div>
        </div>


        <div class="popup-risk-check"></div>
    </div>
</div>

</template>

<script>
export default {
    data(){
        return{
            show:false,
            address:{
                pca:''
            }
        }
    },
    created(){

    },
    methods:{
        // 把当前 添加的地址  选中地址页面
        save(){
            this.$axios.post(`/address`,this.address).then(res=>{
                this.$router.push({name:'address'})
                
            })
        },
        show_modeal(data){ // 选完最后一项  保存到  v-mode;里面
            console.log(data);
            this.address.pca = data.province.value +' '+data.city.value + ' '+data.area.value
             this.show = false
        
        },
        // 模态框显示和隐藏
        xs(){
            this.show = true
        },
        // 模态框关闭隐藏
        gb(){
            this.show = false
        }
    },
}
</script>

<style>

</style>