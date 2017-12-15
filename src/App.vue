<template>
  <div id="app" class="h100 grail">
    <appBar />
    <!-- 信息发表组件 -->
    <!-- <releasePage /> -->
    <!-- 话题详情页组件 -->
    <!-- <topicPage class="dn" /> -->
    <!-- 底部导航切换的页面组件 -->
    <router-view class="main fe ovh" />
    <bottomNav />
  </div>
</template>

<script>
import appBar from './components/appBar'
import releasePage from './pages/release/release'
import bottomNav from './components/bottomNav'

export default {
  name: 'app',
  components:{
    appBar,
    releasePage,
    bottomNav
  }
}
</script>

<style lang="less" scoped>

</style>
