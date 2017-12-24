<template>
  <div class="topics">
    <div class="wh100 grail ovh">
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
      <mu-refresh-control 
        @refresh="refreshTabTopic"      
        :refreshing="refreshing" 
        color="#41b883"
        :trigger="el" 
      />
      <!-- 只在第一次加载tab话题数据时显示，之后用正在加载显示加载状态 -->
      <mu-circular-progress
        class="pfi centre1" 
        v-if="topic.firstLoading"
        color="#41b883" 
        :size="40"
      />
      <div 
        v-for="(tabItem,i) in ['all','good','weex','share','ask','job']" 
        v-show="activeTab === tabItem" 
        class="fe topic-list" 
        :ref="tabItem"
        :key="i"  
      >
        <topicItem v-for="(data,i) in topic.listdata[tabItem]" :key="i" :data="data" />
        <noMoreData v-if="!topic.datapage[tabItem]" />
      </div>
      <mu-infinite-scroll 
        class="topic-list-load" 
        :scroller="scroller" 
        :loading="topic.isfetching && !topic.firstLoading" 
        @load="loadMore"
        loadingText="正在加载 ..."
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import topicItem from '../../components/topicItem'
import noMoreData from '../../components/noMoreData'


export default {
  data(){
    return {
      el: null,
      refreshing: false,
      activeTab: 'all',
      scroller: null,
      scrollerArr: []  //每个tab的滚动条是独立的
    }
  },
  computed: {
    ...mapState([
      'topic'
    ])
  },
  mounted(){
    this.$nextTick(function () {
      this.scrollerArr = this.$refs;
      this.el = this.$el;
      // 初始化第一个tab数据
      if(!this.topic.listdata.all.length){
        this.handleTabChange('all');
      }
		})
  },
  methods: {
    fetchTopicsData(){
      if(this.topic.isfetching) return;
      this.$store.dispatch("fetchTopics",{
        tab: this.activeTab,
        page: this.topic.datapage[this.activeTab],
        limit: 8
      });
    },
    handleTabChange(val) {
      this.activeTab = val;
      this.scroller = this.scrollerArr[val][0];
      // tab数据第一次初始化自动加载，之后上拉加载
      if(this.topic.listdata[val].length === 0){
        this.$store.commit("CHANGE_ISFIRST_STATE", { state: true });
        this.fetchTopicsData();
      }
    },
    loadMore(){
      //如果已经返回完数据，将不再请求
      if(!this.topic.datapage[this.activeTab]) return;
      this.fetchTopicsData();
    },
    refreshTabTopic(){
      this.$store.commit("CLEAR_TOPIC_TAB_DATA",{
        tab: this.activeTab
      });
      this.handleTabChange(this.activeTab);
    }
  },
  components: {
    topicItem,
    noMoreData
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
    .topic-list{
      margin: 0;
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
    .topic-list-load{
      padding: 0;
      .mu-circle{
        border-color: #41b883;
      }
      .mu-infinite-scroll-text{
        margin: .8rem 1rem;
      }
    }
  }

</style>
