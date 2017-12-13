<template>
  <div class="message">
		<div class="mew-msgs">
			<h4 class="tip pre">
				新消息(0) 
				<span class="set-read-state fr">全部已读</span>
			</h4>
			<div class="list">
				<p class="no-msg tc">没有消息</p>
				<div class="item">
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
		<div class="past-msgs">
			<h4 class="tip pre">已读消息</h4>
			<div class="list">
				<p class="no-msg tc">没有消息</p>
				<div class="item">
					<div class="bar flex">
							<span class="name">来自<b>china</b></span>
							<span class="time">13天前</span>
					</div>
					<div class="main">
						回复了你的话题&nbsp&nbsp一枚UI射鸡师的前端之路。重构vue.js中文社区手机端，技术栈：vue全家桶，muse-ui
					</div>
				</div>
				<div class="item">
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
export default {
  
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
