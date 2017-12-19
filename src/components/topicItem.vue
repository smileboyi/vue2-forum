<template>
  <div class="topic-item" @click="gotoTopicDetail">
    <div class="flex">
      <img class="avatar" src="/static/avatar2.jpg" alt="avatar">
      <p class="fe title">基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用</p>
      <span class="tip">share</span>
    </div>
    <div class="info flex">
      <span class="user">dfgs</span>
      <span class="fe time">6天前</span>
      <span class="see">
        <mu-icon value="visibility" class="pre hauto2" :size="14" color="#D3DCE6" />1000
      </span>
      <span class="reply">
        <mu-icon value="textsms" class="pre hauto2" :size="14" color="#D3DCE6" />36
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {}
  },
  mounted(){
    this.$nextTick(function () {
    })
  },
  methods: {
    gotoTopicDetail(){

    }
  }
}
</script>

<style lang="less">
  .topic-item{
    padding: 1.125rem;
    border-top: .56rem solid #eff2f7;
    background-color: #fff;    
    .avatar{
      width: 3.625rem;
      height: 3.625rem;
      border-radius: 50%;
    }
    .title{
      margin: 0 .8rem;
      padding-top: .5rem;
    }
    .tip{
      display: inline-block;
      align-self: flex-start;
      padding: 0 .3em;
      margin-top: .7rem;
      font-size: .8rem;
      color: #fff;
      background-color: #d3dce6;
      border-radius: 15%;
    }
    .info{
      margin-top: .8rem;
      font-size: .75rem;
      color: #92a8c1;
      .time{
        margin-left: .85rem;
      }
      .see,.reply{
        margin-left: 10px;
        .mu-icon{
          margin-right: 3px;
        }
      }
    }
  }
</style>
