<template>
  <div id="app" class="h100 grail">
    <appBar />
    <!-- 信息发表组件 -->
    <releasePage class="dn" />
    <!-- 底部导航切换的页面组件 -->
    <router-view class="main fe ovh" />
    <bottomNav />
  </div>
</template>

<script>

export default {
  components:{

  }
}
</script>

<style lang="less" scoped>

</style>
