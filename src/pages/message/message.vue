<template>
  <div class="message wh100 ova">
		<mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
		<!-- 有2个list貌似不好做分页加载 -->
		<div class="mew-msgs">
			<h4 class="tip pre">
				新消息({{HAS_NOT_READ_MESSAGES_COUNT}}) 
				<span class="set-read-state fr" v-if="HAS_NOT_READ_MESSAGES_COUNT" @click="markAllRead">全部已读</span>
			</h4>
			<div class="list">
				<p class="no-msg tc" v-if="!HAS_NOT_READ_MESSAGES_COUNT">没有消息</p>
				<div class="item" 
					v-for="(item,i) in message.data.hasnot_read_messages" 
					@click="showDetailPage(item.topic.id)"
					:key="i"
				>
					<div class="bar flex">
						<span class="name">来自<b>{{item.author.loginname}}</b></span>
						<span class="time">{{item.reply.create_at | filterTime}}</span>
					</div>
					<div class="main">
						回复了你的话题&nbsp;&nbsp;{{item.topic.title}}
					</div>
				</div>
			</div>
		</div>
		<div class="past-msgs">
			<h4 class="tip pre">已读消息</h4>
			<div class="list">
				<p class="no-msg tc" v-if="!HAS_READ_MESSAGES_COUNT">没有消息</p>
				<div class="item" 
					v-for="(item,i) in message.data.has_read_messages" 
					@click="showDetailPage(item.topic.id)"
					:key="i"
				>
					<div class="bar flex">
						<span class="name">来自<b>{{item.author.loginname}}</b></span>
						<span class="time">{{item.reply.create_at | filterTime}}</span>
					</div>
					<div class="main">
						回复了你的话题&nbsp;&nbsp;{{item.topic.title}}
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { getCookie } from '../../assets/js/cookies.js'
import { filterTime } from '../../assets/js/filters.js'


export default {
  data () {
		let accesstoken = getCookie('accesstoken');
    return {
      refreshing: false,
			trigger: null,
			accesstoken
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
		// 使用mounted并不能保证钩子函数中的this.$el在document中。为此还应该引入Vue.nextTick/vm.$nextTick
		this.$nextTick(function () {
			this.trigger = this.$el;
		})
	},
	filters: {
    filterTime
  },
  methods: {
    refresh() {
      this.refreshing = true;
			this.$store.dispatch('fetchMessage', {
				accesstoken: this.accesstoken
			}).then((res) => {
				// finally不是原生的
				this.refreshing = false;
			}).catch((err) => {
				this.refreshing = false;
			})
		},
		markAllRead(){
			this.$store.dispatch('fetchMarkAllMsg', {
				accesstoken: this.accesstoken
			})
		},
		showDetailPage(id){
			this.$store.dispatch("fetchTopicDatail",{id});
		}
  }
}
</script>

<style lang="less">
	.message{
		-webkit-overflow-scrolling: touch;
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
