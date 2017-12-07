<template>
  <mu-paper>
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="topics" title="话题" to="/topics/话题" icon="whatshot"/>
      <mu-bottom-nav-item value="message" title="未读消息" to="/message/未读消息" icon="drafts">
        <span class="message-num db pab tc">{{num}}</span>
      </mu-bottom-nav-item>
      <mu-bottom-nav-item value="user" title="个人中心 " to="/user/个人中心" icon="face"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>


export default {
  data () {
    return {
      bottomNav: 'topics',
      num:5
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style lang="less" scoped>
  .mu-bottom-nav-shift{
    background-color: #1f2d3d;
    .mu-buttom-item-wrapper{
      position: relative;
      .message-num{
        top: .5em;
        right: 1.8em;
        width: 1.1rem;
        height: 1.1rem;
        line-height: 1.1rem;
        font-size: .6rem;
        border-radius: 50%;
        color: #fff;
        background-color: #f44336;
     }
    }
  }
</style>
