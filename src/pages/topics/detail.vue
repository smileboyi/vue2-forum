<template>
  <div class="pfi not wh100 z100 detail">
    <h3 class="title">这是title这是title</h3>
    <mu-flexbox class="info-bar">
      <img class="avatar" src="/static/avatar2.jpg" alt="user">
      <span class="name fe">smileboyi</span>
      <span class="time">1天前</span>
    </mu-flexbox>
    <div class="content">
			你好我是content
    </div>
    <mu-appbar class="comment-bar pab nob" title="说点什么吧">
      <mu-icon-button icon="arrow_back" iconClass="icon" slot="left"/>
      <div class="edit-btn" @click="openComment">说点什么吧</div>
      <div class="pre" slot="right">
        <mu-icon-button icon="chat" iconClass="icon" @click.native="openComment" />
        <div class="reply-count pab tc">32</div>
      </div>
      <mu-icon-button icon="star_border" iconClass="icon" slot="right" @click="toggleCollect" />
    </mu-appbar>
		<mu-bottom-sheet sheetClass="wh100 comment grail" :open="bottomSheet">
			<div class="number">32条评论</div>
			<div class="list ova fe">
				<div class="item flex">
					<img class="avatar" src="/static/avatar2.jpg" alt="user">
					<div class="fe">
						<div class="top">
							<b class="name">fdgsrd</b>
							<div class="like fr">
								<mu-icon class="pre" value="thumb_up" color="#d3dce6" :size="20"/>
								<span class="pre num">3</span>
							</div>
						</div>
						<div class="time">2017-12-23</div>
						<div class="words">这是一句话，凑成一段话。这是一句话，凑成一段话。这是一句话，凑成一段话。这是一句话，凑成一段话。这是一句话，凑成一段话。这是一句话，凑成一段话。</div>
					</div>
				</div>
			</div>
			<mu-appbar class="comment-bar" title="说点什么吧">
				<mu-icon-button icon="arrow_back" iconClass="icon" slot="left" @click.native="closeComment" />
				<div class="edit-btn">说点什么吧</div>
			</mu-appbar>
		</mu-bottom-sheet>
  </div>
</template>

<script>


export default {
	data() {
		return {
			bottomSheet: false
		}
	},
	methods: {
		openComment(){
			this.bottomSheet = true;
		},
		closeComment(){
			this.bottomSheet = false;
		},
		toggleCollect(){

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
    }
	}
	.comment-bar{
		.icon{
			color: #1f2d3d;
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
				.words{
					padding: 0 8px;
					font-size: .9rem;
				}
			}
		}
	}
</style>