<template>
  <transition 
    enter-active-class="animated slideInUp trans"
    leave-active-class="animated slideOutDown trans"
  >
    <div class="pfi not user-topic z50 wh100 grail">
      <mu-appbar :title="title+'('+ count +')'">
        <mu-icon-button icon="close" slot="left" @click.native="closeSelf" />
      </mu-appbar>
      <div class="ova fe">
        <!-- 这里是一次性加载完，没有做分页加载 -->
        <div class="user-topic-item flex" v-for="item in login.userinfo[this.type]">
          <div class="user-photo">
            <img class="wh100" :src="item.author.avatar_url" alt="user">
          </div>
          <div class="fe">
            <p class="title">{{item.title}}</p>
            <p class="bar">{{item.author.loginname}} {{item.last_reply_at | filterTime}}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import { filterTime } from '../../assets/js/filters.js'


export default {
  props: {
    title: "",
    count: 0,
    type: ""
  },
  computed: {
    ...mapState([
      'login'
    ]),
  },
  filters: {
    // 想要在template里面（不是在script里面）使用外部函数，请注册
    filterTime
  },
  methods: {
    closeSelf(){
      this.$emit('closeChild');
    }
  }
}
</script>

<style lang="less">
  .user-topic{
    background-color: #fff;
    .mu-appbar{
      padding: 0;
      .mu-appbar-title{
        padding: 0;
      }
    }
  }
  .user-topic-item{
    padding: 1rem;
    background-color: #fff;
    margin-top: 6px;
    &:first-of-type{
      margin-top: 0;
    }
    .user-photo{
      align-self: center;
      width: 2.8125rem;
      height: 2.8125rem;
      margin-right: 12px;
    }
    .title{
      font-size: .9rem;
    }
    .bar{
      margin-top: .3rem;
      font-size: .65rem;
      color: #92a8c1;
    }
  }
</style>
