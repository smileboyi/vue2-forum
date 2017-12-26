<template>
  <div class="topic-item" @click="showDetailPage">
    <div class="flex">
      <img class="avatar" :src="data.author.avatar_url" alt="avatar">
      <p class="fe title">{{data.title}}</p>
      <span class="tip">{{data.tab}}</span>
    </div>
    <div class="info flex">
      <span class="name">{{data.author.loginname}}</span>
      <span class="fe time">{{data.last_reply_at | filterTime}}</span>
      <span class="see">
        <mu-icon value="visibility" class="pre hauto2" :size="14" color="#D3DCE6" />
        {{data.visit_count}}
      </span>
      <span class="reply">
        <mu-icon value="textsms" class="pre hauto2" :size="14" color="#D3DCE6" />
        {{data.reply_count}}
      </span>
    </div>
  </div>
</template>

<script>
import { filterTime } from '../assets/js/filters'


export default {
  props: {
    data: {
      author: {
        avatar_url: String,
        loginname: String
      },
      title: String,
      tab: String,
      last_reply_at: String,
      visit_count: Number,
      reply_count: Number
    }
  },
  mounted(){
    this.$nextTick(function() {
    })
  },
  filters: {
    filterTime
  },
  methods: {
    showDetailPage(){
      this.$store.dispatch("fetchTopicDatail",{
        id: this.data.id
      })
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
      word-wrap: break-word;
      word-break: break-all;
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
