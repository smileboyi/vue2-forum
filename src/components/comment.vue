<template>
  <transition 
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div class="comment pab wh100" :class="{'dn': !detail.isopen}">
      <div class="close-bg wh100" @click="closeComment"></div>
      <div class="main pab wauto2 grail">
        <textarea v-model="val"></textarea>
        <mu-flat-button label="发送" class="send" @click="sendCommentData" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'


export default {
  props: {
    topicid: {
      type: String,
      default: ''
    },
    accesstoken: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      val: ''
    }
  },
  computed: {
    ...mapState([
      'login',
      'detail'
    ]),
    issuccess: function(){
      return this.detail.issuccess;
    }
  },
  watch: {
    issuccess: function(){
      //如果评论成功，删除评论文字。不成功，先不删除。
      if(this.detail.issuccess) this.val="";
    }
  },
  methods: {
    closeComment(){
      this.$store.commit('HIDE_COMMENT_PAGE');
    },
    sendCommentData(){
      if(this.$store.isfetching) return;
      let val = this.val.trim();
      if(val === '') return;
      this.$store.dispatch('sendCommentData', {
        content: val,
        topicid: this.topicid,
        accesstoken: this.accesstoken,
        reply_id: this.detail.reply_id
      });
    },
  }

}
</script>

<style lang="less">
  .comment{
    z-index: 600;
    .close-bg{
      background-color: rgba(22, 22, 22, .5)
    }
    .main{
      top: 120px;
      width: 80%;
      min-height: 14.5rem;
      padding: .875rem;
      background-color: #fff;
      textarea{
        height: 9.375rem;
        margin-bottom: .9rem;
        font-size: .9rem;
        color: #222;
        background-color: #f6f8fa;
        border: none;
      }
      .send{
        align-self: center;
        width: 36%;
        color: #41b883;
      }
    }
  }

</style>
