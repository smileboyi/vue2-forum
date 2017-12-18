<template>
  <div class="pfi not wh100 z100 detail">
    <h3 class="title">这是title</h3>
    <mu-flexbox class="info-bar">
      <img src="/static/avatar2.jpg" alt="user">
      <span class="name fe">smileboyi</span>
      <span class="time">1天前</span>
    </mu-flexbox>
    <div class="content">

    </div>
    <mu-appbar class="bottom-bar">
      <mu-icon-button icon="arrow_back" slot="left"/>
      <mu-flat-button label="说点什么吧"/>
      <div class="pre" slot="right">
        <mu-icon-button class="pre" icon="chat">
        </mu-icon-button>
        <div class="reply-count pab not nor">2</div>
      </div>
      <mu-icon-button icon="star_border" slot="right"/>
      <mu-icon-button icon="star" slot="right"/>
    </mu-appbar>
  </div>
</template>

<script>


export default {
  
}
</script>


<style lang="less">
  .detail{
    background-color: #fff;
  }
</style>