<template>
  <div class="topics ovh">
    <mu-tabs 
      :value="activeTab" 
      lineClass="tabs-line"
      @change="handleTabChange"
    >
      <mu-tab value="all" title="全部"/>
      <mu-tab value="good" title="精华"/>
      <mu-tab value="weex" title="weex"/>
      <mu-tab value="share" title="分享"/>
      <mu-tab value="ask" title="问答"/>
      <mu-tab value="job" title="招聘"/>
    </mu-tabs>
    <div class="ova" v-show="activeTab === 'all'">
      <div  v-for="(item,i) in topic.listdata.all" :key="i" >
        {{item}}
        <!-- <topicItem /> -->
      </div>
      <!-- <topicItem v-for="(item,i) in topic.listdata.all" :key="i" :data="item"> -->
    </div>
    <div v-show="activeTab === 'good'">
      <topicItem />
    </div>
    <div v-show="activeTab === 'weex'">
      <topicItem />
    </div>
    <div v-show="activeTab === 'share'">
      <topicItem />
    </div>
    <div v-show="activeTab === 'ask'">
      <topicItem />
    </div>
    <div v-show="activeTab === 'job'">
      <topicItem />
    </div>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import topicItem from '../../components/topicItem'


export default {
  data(){
    return {
      activeTab: 'all',
      loading: false,
      scroller: null,
      page:{
        all: 1,
        good: 1,
        weex: 1,
        share: 1,
        ask: 1,
        job: 1
      }
    }
  },
  computed: {
    ...mapState([
      'topic'
    ])
  },
  created(){
    // 初始化第一组数据
    if (this.topic.listdata[this.activeTab].length === 0) {
      this.$store.dispatch("fetchTopics",{
        tab: this.activeTab,
        page: this.page[this.activeTab],
        limit: 5
      })
    }
  },
  mounted(){
    this.$nextTick(function () {
      this.scroller = this.$el;
      this.trigger = this.$el;
		})
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val;
    },
    loadMore(){
      this.$store.dispatch("fetchTopics",{
        tab: this.activeTab,
        page: this.page[this.activeTab],
        limit: 5
      })
    }    
  },
  components: {
    topicItem
  }
}
</script>

<style lang="less">
  .topics{
    background-color: #eff2f7;
    .mu-tabs{
      background-color: #fff;
      .mu-tab-link{
        color: rgba(31,45,61,.7);
      }
    }
    .tabs-line{
      background-color: #41b883;
    }
  }

</style>
