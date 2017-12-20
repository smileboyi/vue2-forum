<template>
  <div class="no-more-data tc">
    <span class="text pre">别扯了，已经到底啦～</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .no-more-data{
    padding: 1rem 0;
    .text{
      font-size: 1rem;
      color: #8492a6;
      &::before,&::after{
        content: "";
        position: absolute;
        top: 50%;
        display: inline-block;
        width: 2.626rem;
        height: 1px;
        background-color: #99a9bf;
      }
      &::before{
        left: -3rem;
      }
      &::after{
        right: -3rem;
      }
    }
  }
</style>
