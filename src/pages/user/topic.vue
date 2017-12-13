<template>
  <transition 
    enter-active-class="animated slideInUp"
    leave-active-class="animated slideOutDown"
  >
    <div class="pfi not user-topic z50 wh100">
      <mu-appbar :title="'我收藏的话题(5)'">
        <mu-icon-button icon="close" slot="left" />
      </mu-appbar>
      <div>
        <div class="user-topic-item flex">
          <div class="user-photo">
            <img class="wh100" src="/static/avatar2.jpg" alt="user">
          </div>
          <div class="fe">
            <p class="title">新人第一次发帖，问题比较多比较杂！</p>
            <p class="bar">dsggeh 4天前</p>
          </div>
        </div>
        <div class="user-topic-item flex">
          <div class="user-photo">
            <img class="wh100" src="/static/avatar2.jpg" alt="user">
          </div>
          <div class="fe">
            <p class="title">新人第一次发帖，问题比较多比较杂！新人第一次发帖，问题比较多比较杂！</p>
            <p class="bar">dsggeh 4天前</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>


export default {
  
}
</script>

<style lang="less">
  .user-topic{
    background-color: #fff;
    .mu-appbar{
      padding: 0;
      background-color: #41b883;
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
