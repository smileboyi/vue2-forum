<template>
  <div class="message">
		<mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
		<div class="mew-msgs">
			<h4 class="tip pre">
				新消息({{HAS_NOT_READ_MESSAGES_COUNT}}) 
				<span class="set-read-state fr">全部已读</span>
			</h4>
			<div class="list">
				<p class="no-msg tc" v-if="!HAS_NOT_READ_MESSAGES_COUNT">没有消息</p>
				<div class="item" v-for="(item,i) in message.hasnot_read_messages" :key="i">
					<div class="bar flex">
						<span class="name">来自<b></b></span>
						<span class="time">13天前</span>
					</div>
					<div class="main">
						回复了你的话题&nbsp&nbsp一枚UI射鸡师的前端之路。重构vue.js中文社区手机端，技术栈：vue全家桶，muse-ui
					</div>
				</div>
			</div>
		</div>
		<div class="past-msgs">
			<h4 class="tip pre">已读消息</h4>
			<div class="list">
				<p class="no-msg tc" v-if="!HAS_READ_MESSAGES_COUNT">没有消息</p>
				<div class="item" v-for="(item,i) in message.has_read_messages" :key="i">
					<div class="bar flex">
						<span class="name">来自<b>china</b></span>
						<span class="time">13天前</span>
					</div>
					<div class="main">
						回复了你的话题&nbsp&nbsp一枚UI射鸡师的前端之路。重构vue.js中文社区手机端，技术栈：vue全家桶，muse-ui
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'


export default {
  data () {
    return {
      list: [],
      num: 10,
      refreshing: false,
      trigger: null
    }
	},
	computed: {
    ...mapState([
			'message'
		]),
		...mapGetters([
			'HAS_NOT_READ_MESSAGES_COUNT',
			'HAS_READ_MESSAGES_COUNT'
    ])
  },
  mounted() {
    this.trigger = this.$el
  },
  methods: {
    refresh() {
      this.refreshing = true;
      setTimeout(() => {
        const list = []
        for (let i = this.num; i < this.num + 10; i++) {
          list.push('item' + (i + 1))
        }
        this.list = list
        this.num += 10
        this.refreshing = false
      }, 2000)
    }
  }
}
</script>

<style lang="less">
	.message{
		.tip{
			line-height: 2.125rem;
			font-size: .85rem;
			font-weight: normal;
			text-indent: 12px;
			background-color: #eff2f7;
			&:before{
				content:"";
				display: block;
				position: absolute;
				height: 100%;
				width: 6px;
				background-color: #d3dce6;
			}
			.set-read-state{
				margin-right: 12px;
				color: #41b883;
			}
		}
		.list{
			.no-msg{
				padding: 14px 0;
				font-size: .9rem;
			}
			.item{
				padding: 1rem;
				border-bottom: 1px solid #eff2f7;
				color: #d0d7df;
				.bar{
					margin-bottom: 0.375rem;
					.name{
						color: #b1bdcb;
					}
				}
			}
		}
		.mew-msgs{
			.bar{
				.time{
					color:#b1bdcb;
				}
			}
			.main{
				color: #475669;
			}
		}
	}
</style>
