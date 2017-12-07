<template>
  <div id="app" class="h100 grail">
    <appBar />
    <!-- 信息发表组件 -->
    <releasePage/>
    <div class="fe">
      <!-- 底部导航切换的页面组件 -->
      <router-view />
    </div>
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
