<template>
  <div class="go-to-login tc">
    <img class="photo" src="/static/mountain.png" alt="login">
    <p class="text">登录后可查看未读消息</p>
    <mu-flat-button label="登录" class="btn" @click="goToLoginPage" />
  </div>
</template>

<script>
export default {
  methods:{
    goToLoginPage(){
      this.$router.replace({ name: 'user' });
    }
  }
}
</script>

<style lang="less">
  .go-to-login{
    padding-top: 6rem;
    .photo{
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }
    .text{
      margin: 1rem 0;
      font-size: 1.1rem;
      color: #475669;
    }
    .btn{
      width: 8.125rem;
      font-size: .8rem;
      color: #fff;
      background-color: #41b883;
    }
  }
</style>
