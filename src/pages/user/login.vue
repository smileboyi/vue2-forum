<template>
  <transition 
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    mode="in-out"
  >
    <div class="login">
      <div class="access-token tc">
        <mu-icon 
          class="lock-icon pre" 
          :class="{ac:active}" 
          value="lock_outline"
        />
        <mu-text-field 
          hintText="accessToken" 
          v-model="accessToken"
          @focus="handlefocus"
          @blur="handleblur"
          class="tl"
        />
      </div>
      <div class="pre">
        <mu-raised-button label="注册" class="tc wauto" href="https://www.vue-js.com/" />
        <mu-raised-button label="登录" class="tc wauto" @click="handleLogin" />
        <mu-circular-progress class="pfi centre1" v-if="login.isfetching" color="#41b883" :size="40"/>
      </div>
      <p class="how-get" @click="handleHowGet">
        <mu-icon value="help" :size="18" color="#e96900"></mu-icon>
        如何获取 accessToken？
      </p>
      <transition enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
        <div class="tip" v-show="isShow">
          <a class="vue-link" href="https://www.vue-js.com/">官方网站</a>登录后，
          在设置页面可以看到自己的<b>accessToken</b>。<br />
          将<b>accessToken</b>复制，粘贴到⬆文本框，即可登录。
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data(){
    return{
      accessToken:'deb24ad1-62ec-4f17-99c3-d5d9bdd1f48e',
      active:false,
      isShow:false,
    }
  },
  computed: {
    ...mapState([
        'login',
        'common'
    ])
  },
  methods: {
    handlefocus(val){
      this.active = true;
    },
    handleblur(){
      this.active = false;
    },
    handleHowGet(){
      this.isShow = !this.isShow;
    },
    handleLogin(){
      let at = this.accessToken.trim();
      if(at==""){
        this.$store.dispatch('showInfoPopup', {
          msg: 'accesstoken 不能为空',
          bottom: '56px'
        })
      }else{
        this.$store.dispatch('fetchUserLogin', {
          accesstoken : at
        });
      }
    }
  }
}
</script>

<style lang="less">
  .login{
    .access-token{
      margin-top: 30px;
      .lock-icon{
        bottom: -8px;
        padding: 0 10px;
        color: #7a7777;
        &.ac{
          color: #41b883;
        }
      }
      .mu-text-field{
        width: 200px;
        .mu-text-field-focus-line{
          background-color: #41b883;
        }
      }
    }
    .mu-raised-button{
      display: block;
      width: 70%;
      margin-top: 12px;
      &:nth-child(2){
        color: #fff;
        background-color: #41b883;
      }
    }
    .how-get{
      width: 22rem;
      margin: 30px auto 15px;
      font-size: 1rem;
      font-weight: bold;
      .material-icons{
        position: relative;
        top: 2px;
      }
    }
    .tip{
      padding: 0 40px;
      line-height: 1.6;
      font-size: .95rem;
    }
  }

</style>
