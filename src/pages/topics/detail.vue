<template>
  <transition 
    enter-active-class="animated slideInUp"
    leave-active-class="animated slideOutDown"
  >
		<div class="pfi not wh100 z100 detail ova">
			<mu-circular-progress class="pfi centre1" v-if="detail.isfetching" color="#41b883" :size="40"/>
			<h3 class="title">{{detail.data.title}}</h3>
			<mu-flexbox class="info-bar">
				<i class="icon avatar" :style="'background-image:url('+ detail.data.author.avatar_url + ')'" />
				<span class="name fe">{{detail.data.author.loginname}}</span>
				<span class="time">{{detail.data.last_reply_at | filterTime}}</span>
			</mu-flexbox>
			<div class="content" v-html="detail.data.content"></div>
			<mu-appbar class="comment-bar pfi nob">
				<mu-icon-button 
					icon="arrow_back" 
					iconClass="icon" 
					slot="left" 
					@click.native="showDetailPage" 
				/>
				<div class="edit-btn" @click="openComment">说点什么吧</div>
				<div class="pre" slot="right">
					<mu-icon-button icon="chat" iconClass="icon" @click.native="openComment" />
					<div class="reply-count pab tc" v-if="detail.data.replies.length">
						{{detail.data.replies.length > 99 ? 99 : detail.data.replies.length}}
					</div>
				</div>
				<!-- 没登录时的收藏图标 -->
				<mu-icon-button 
					v-if="!login.loginstate"
					icon="star_border"
					iconClass="icon"
					@click="goToLoginPage"
					slot="right" 
				/>
				<!-- 登录后的收藏图标 -->
				<mu-icon-button 
				  v-else
					:icon="checkTopicCollected(detail.data.id) ? 'star': 'star_border'"
					:iconClass="checkTopicCollected(detail.data.id)? 'icon ac': 'icon'"
					@click="toggleCollect(detail.data.id)"
					slot="right" 
				/>
			</mu-appbar>

			<mu-bottom-sheet sheetClass="wh100 comment grail" :open="bottomSheet">
				<div class="number">{{detail.data.replies.length}}条评论</div>
				<div class="list ova fe">
					<div class="item flex" v-for="(item,i) in detail.data.replies" :key="i">
						<img class="avatar" :src="item.author.avatar_url" alt="user">
						<div class="fe">
							<div class="top">
								<b class="name">{{item.author.loginname}}</b>
								<div class="like fr" @click="giveLikeStar">
									<mu-icon class="pre" value="thumb_up" color="#d3dce6" :size="20"/>
									<span class="pre num">{{item.ups.length}}</span>
								</div>
							</div>
							<div class="time">{{item.create_at | filterTime}}</div>
							<div class="markdown" v-html="item.content" />
						</div>
					</div>
				</div>
				<mu-appbar class="comment-bar">
					<mu-icon-button 
						icon="arrow_back" 
						iconClass="icon" 
						slot="left" 
						@click.native="closeComment" 
					/>
					<div class="edit-btn">说点什么吧</div>
				</mu-appbar>
			</mu-bottom-sheet>
		</div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import { getCookie } from '../../assets/js/cookies.js'
import { filterTime } from '../../assets/js/filters'


export default {
	data() {
		return {
			bottomSheet: false
		}
	},
	computed: {
    ...mapState([
			'login',
			'detail',
		])
	},
	filters: {
    filterTime
  },
	methods: {
		showDetailPage(){
			this.$store.commit("HIDE_DETAIL_PAGE");
		},
		openComment(){
			this.bottomSheet = true;
		},
		closeComment(){
			this.bottomSheet = false;
		},
		toggleCollect(id){
			let iscollected = this.checkTopicCollected(id);
			if(this.login.loginstate){
				this.$store.dispatch('fetchToggleCollectTopic', {
					topic_id : this.detail.data.id,
					accesstoken : getCookie('accesstoken'),
					loginname : this.login.data.loginname,
					iscollected : iscollected
				})
			}else{
				this.goToLoginPage();
			}
		},
		checkTopicCollected(id){
			let topics = this.login.userinfo.collect_topics;
			//没登录
			if(!topics) return false;

			let len = topics.length;
			let state = false;
			while (len--) {
				if(topics[len].id === id){
					state = true;
					break;
				}
			}
			return state;
		},
		goToLoginPage(){
			//关闭详情页转到登录页
			this.$store.commit('HIDE_DETAIL_PAGE');
			this.$router.replace({ name: 'user' });
			this.$store.commit('SWITCH_ROUTE_PAGE', 'user');
			this.$store.dispatch('showInfoPopup', {
				msg: '请先登录',
				bottom: 56,
				state: false
			})
		},
		giveLikeStar(){

		}
	}
}
</script>


<style lang="less">
  .detail{
		padding-top: .8rem;
		padding-bottom: 56px;
    background-color: #fff;
    .title{
			margin: 1.2rem 1rem;
			line-height: 1.9;
      font-size: 1rem;
		}
    .info-bar{
			padding: .5rem 1rem;
			font-size: .875rem;
      .avatar{
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 1.1rem;
      }
      .name{
        margin-left: .5rem;
        color: #1f2d3d;
      }
      .time{
    		color: #d3dce6;
			}
    }
    .content{
			padding: .5rem 1rem 1rem;
			img{
				max-width: 100% !important;
			}
    }
	}
	.comment-bar{
		.icon{
			color: #1f2d3d;
			&.ac{
				color: #fcc015;
			}
		}
		background-color: #fff;
		box-shadow: 0px -2px 1px #ececec;
		.edit-btn{
			line-height: 42px;
			padding-left: 7px;
			font-size: .9rem;
			color: #b2c2d4;
			background-color: #eff2e7;	
		}
		.reply-count{
			top: .35rem;
			right: .35rem;
			width: 1.13rem;
			line-height: 1.13rem;
			font-size: .75rem;
			border-radius: 100%;
			background: #e96900;
		}
	}
	.comment{
		.number{
			padding: 1.2rem 1rem;
			font-size: 1rem;
			background-color: #eff2f7;
			&:before{
				content: "";
				position: relative;
				top: 2px;
				display: inline-block;
				width: 4px;
				height: 16px;
				margin-right: 5px;
				background-color: #e96900;
			}
		}
		.list{
			background-color: #eff2f7;
			.item{
				margin-top: 6px;
				padding: .75rem 1rem;
				background-color: #fff;
				&:first-of-type{
					margin-top: 0;
				}
				.avatar{
					width: 2.8rem;
					height: 2.8rem;
					margin-right: .75rem;
					border-radius: 50%;
				}
				.top{
					.name{
						font-size: .8rem;
					}
					.like{
						font-size: .85rem;
						.num{
							top: -4px;
						}
					}
				}
				.time{
					margin-top: 6px;
					font-size: .8rem;
					color: #7588a1;
				}
				.markdown{
					padding: 0 8px;
					font-size: .9rem;
					.markdown-text{
						word-wrap:break-word;
						word-break:break-all;
					}
					img{
						max-width: 100% !important;
					}
				}
			}
		}
	}
</style>