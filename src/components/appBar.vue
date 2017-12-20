<template>
  <mu-appbar class="tc pre">
    <img class="logo pab centre1" src="../assets/images/logo.png" alt="logo">
    <mu-flat-button label="发布" slot="right" @click.native="releaseTopic" />
  </mu-appbar>
</template>

<script>
import { mapState } from 'vuex'


export default {
  computed: {
    ...mapState([
      'login'
    ]),
  },
  methods: {
    releaseTopic(){
      if(!this.login.loginstate){
        this.$router.replace({ name: 'user' });
        this.$store.commit('SWITCH_ROUTE_PAGE', 'user');
        this.$store.dispatch('showInfoPopup', {
          msg: '请先登录',
          bottom: 56,
          state: false
        })
      }else{
        this.$store.commit('SHOW_RELEASEPAGE');
      }
    }
  }

}
</script>

<style lang="less">
  .mu-appbar{
    background-color: rgba(2, 151, 86, 0.9);
    .mu-appbar-title{
      .logo{
        width: 30px;
        height: 30px;
      }
    }
  }

</style>
