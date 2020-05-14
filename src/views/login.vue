<template>
  <div>
    <!-- 头部 -->
    <div class="main">
      <div class="hander">
        <div class="log">
          <img src="https://s02.mifile.cn/assets/static/image/mi-logo.png" alt="" />
        </div>
        <h3>小米账号登录</h3>
      </div>
      <!-- 注册框 -->
      <div class="registered">
        <div class="login_area">
          <input type="email" placeholder="邮箱/手机号码/小米ID" v-model="customer.email" />
        </div>
        <div class="login_psd">
          <input type="password" placeholder="密码" v-model="customer.password"/>
        </div>
        <div class="login">
            <button type="submit" @click="onSubmit">登录</button>
        </div>
        <div class="forget">
            <ul>
                <li>
                    <router-link :to="{name:'regis'}">立即注册</router-link>
                </li>
                <li>|</li>
                <li>忘记密码</li>
            </ul>
        </div>
        <div class="other_login">
           <fieldset>
                <legend>其他方式登录</legend>
         </fieldset>
        </div>
        <div class="icon_login">
            <ul>
                <li>
                    <a href="" class="icon wb"></a>
                </li>
                <li>
                    <a href="" class="icon zfb"></a>
                </li>
                <li>
                    <a href="" class="icon wx"></a>
                </li>
            </ul>
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
</template>
<script>
export default {
  data() {
    return {
        customer:{
            email:'',
            password:''
        }
    }
  },
  methods:{
      onSubmit(){
          // 请求接口的参数
          const data={
            grant_type: 'password', //oauth的模式
            client_id: 1,   //上面所说的client_id
            client_secret: "DI4TzBdeOQw6vRot5zHP3IrvSwEk8nBSgSNHpSzd",
            username: this.customer.email,
            password:this.customer.password
          }
          // 请求接口
          this.$axios.post(`http://localhost:8000/oauth/token`,data).then(res=>{
              console.log(res);
              if(res.status == 200){ // 如果请求成功了
                localStorage.token_type = res.data.token_type; // 令牌类型
                localStorage.access_token = res.data.access_token; // 访问令牌
                // 登录成功进行跳转到首页
                this.$router.push({name:"home"})
              }
          }).catch(err=>{
              if(err){
                  console.log('登录失败');
              }
          })
      }
  }
};
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
        .icon_login{
            ul{
                text-align: center;
            }
            li{
                display: inline-block;
                margin: 0px 10px;
                // width: 30px;
                // height: 30px;
                // border-radius: 50%;
                // background-color: #ED9090;
                .icon{
                    display: block;
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;;
                    // background-color: #ED9090;
                    background: url('https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png')no-repeat;
                }
                .wb{
                    background-color: #ED9090;
                    background-position: -34px 3px;
                }
                .zfb{
                    background-color: #6BB6EA;
                    background-position: -56px 3px;
                }
                .wx{
                    background-color: #00BE00;
                    background-position: -82px 3px;
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
