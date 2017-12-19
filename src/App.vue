<template>
  <div id="app" class="h100 grail" :title="this.$route.params.title">
    <appBar />
    <!-- 信息发表组件 -->
    <releasePage v-show="common.releasepage.isopen" />
    <!-- 话题详情页组件 -->
    <!-- <topicPage class="dn" /> -->
    <!-- 底部导航切换的页面组件 -->
    <router-view class="main fe ovh" />
    <!-- 提示弹窗 -->
    <infoPopup v-show="common.infopopup.isopen" />

    <!-- <detail /> -->
    <bottomNav />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import appBar from './components/appBar'
import releasePage from './pages/release/release'
import bottomNav from './components/bottomNav'
import infoPopup from "./components/infoPopup"

import detail from "./pages/topics/detail"


export default {
  name: 'app',
  computed: {
    ...mapState([
      'common',
    ]),
  },
  components:{
    appBar,
    releasePage,
    bottomNav,
    infoPopup,
    detail
  }
}
</script>

<style lang="less">

</style>
