<template>
  <div class="login">
    <infoPopup v-show="common.infopopup.isopen">65987967</infoPopup>
    <div class="access-token tc">
      <mu-icon 
        class="lock-icon pre" 
        :class="{ac:active}" 
        value="lock_outline"
      />
      <mu-text-field 
        hintText="accessToken" 
        v-model="accessToken"
        @change="handlechange"
        @focus="handlefocus"
        @blur="handleblur"
        class="tl"
      />
    </div>
    <div class="pre">
      <mu-raised-button label="注册" class="tc wauto" href="https://www.vue-js.com/" />
      <mu-raised-button label="登录" class="tc wauto" @click="handleLogin" />
      <mu-circular-progress class="pfi centre1" v-if="isLogin" color="#41b883" :size="40"/>
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
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import infoPopup from "../../components/infoPopup"

export default {
  data(){
    return{
      accessToken:'',
      active:false,
      isShow:false,
      isLogin:false,
      isopen:false,
    }
  },
  computed: {
    ...mapState([
        'login',
        'common'
    ])
  },
  methods: {
    handlechange(val){
      this.accessToken = val;
    },
    handleInput(val){
      this.accessToken = val;
    },
    handlefocus(val){
      this.active = true;
    },
    handleblur(){
      this.active = false;
    },
    handleHowGet(){
      this.isShow = !this.isShow;
      // this.$store.commit("SHOW_INFOPOPUP");
      this.$store.dispatch('showInfoPopup', {
        isopen: true,
        msg: 'accesstoken 不能为空',
        state: false,
        position: '55px'
      })
    },
    handleLogin(){
      let at = this.accessToken.trim();
      if(at==""){
        
      }
    }
  },
  components: {
    infoPopup
  }
}
</script>

<style lang="less">
  .login{
    background-color: #eff2f7;
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
