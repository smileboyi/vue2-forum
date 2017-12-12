<template>
  <mu-appbar class="tc pre">
    <img class="logo pab centre1" src="../assets/images/logo.png" alt="logo">
    <mu-flat-button label="发布" slot="right"/>
  </mu-appbar>
</template>

<script>
export default {
  
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
