<template>
  <div>
        <div>
    <!-- 头部 -->
    <div class="main">
      <div class="hander">
        <div class="log">
          <img src="https://s02.mifile.cn/assets/static/image/mi-logo.png" alt="" />
        </div>
        <h3>小米账号注册</h3>
      </div>
      <!-- 注册框 -->
      <div class="registered">
        <div class="login_area">
          <input type="email" placeholder="邮箱/手机号码/小米ID" v-model="customer.email" />
          <!-- <div>{{errorform.email}}</div> -->
        </div>
        <div class="login_psd">
          <input type="password" placeholder="密码" v-model="customer.password"/>
          <p>{{errorform.password}}</p>
        </div>
        <div class="login">
            <button type="submit" @click="onSubmit">注册</button>
        </div>
       
      </div>
      <!-- footer -->
      <div class="footer1">
          <ul>
              <li>简体</li>|
              <li>繁体</li>|
              <li>English</li>|
              <li>常见问题</li>|
              <li>隐私政策</li>
          </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            // 接受input注册框的值
            customer:{},
            // 接受错误信息
            errorform:{
              email:'',
              password:''
            }
        }
    },
    // d点击注册
    methods:{
        onSubmit(){
       this.$axios.post('/register',this.customer).then(res=>{
         alert('注册成功')
         this.$router.push({name:'login'})
       }).catch(err=>{
         alert('注册失败')
         // 错误的原因
         this.errorform.email = err.errors.email ?err.errors.email[0]:'' // 如果账号不正确就抛错
         this.errorform.password = err.errors.password ?err.errors.password[0]:'' // 如果账号不正确就抛错
         console.log(err);
         
       })
    }
    }
    
}
</script>

<style lang="scss" scoped>

.main{
    box-sizing: content-box;
    padding: 0px 15px;
   
}
    .hander{
        width: 100px;
        margin: 25px auto;
        .log{
            width: 48px;
            height: 48px;
            background-color: #FF6700;
            margin: 0 auto;
        }
        h3{
            font-weight: 500;
            color: #000;
            font-size: 16px;
            text-align: center;
        }
    }
    .registered{
        .login_area{
            
        }
        input{
                width: 100%;
                border: none;
                padding: 10px 0px;
                margin-bottom: 15px;
                border-bottom: 1px solid #ccc;
                background-color: #fafafc;
            }
        .login{
            button{
                width: 100%;
                padding: 10px 0px;
                background-color: #FF6700;
                border: none;
                border-radius: 7px 7px 7px 7px;
                color: #fff;
                font-weight: 600;
                font-size: 16px;
            }
            margin-bottom: 15px;
        }
        .forget{
             margin-bottom: 30px;   
            ul{
                text-align: center;
            li{
                display: inline-block;
                font-size: 15px;
            }
            li:nth-of-type(2){
                margin: 0px 10px;
            }
        }
        }
        .other_login{
            margin: 10px 0px 20px 0px;
            fieldset{
                border: none;
                border-top: 1px solid #ccc;
                legend{
                    font-size: 13px;
                    color: #b0b0b0;
                   text-align: center;
                }
            }
        }
        
        
        }
        .footer1{
            position: absolute;
            bottom: 50px;
            left: 48px;
            // left: 50%;
            // transform: translateX(-50%);
            ul{
                li{
                    display: inline-block;
                    padding: 0px 10px;
                }
            }
    }
</style>