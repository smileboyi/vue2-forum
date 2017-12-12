<template>
  <div>
    <mu-flexbox class="user-flex">
      <div class="user-photo">
        <img class="wh100" src="/static/avatar2.jpg" alt="user">
      </div>
      <div class="user-info pre fe">
        <div class="user-name"><b>smileboyi</b></div>
        <div class="user-id">ID: c6f42acd-2681-43f2-a4e8-0e66360649c0</div>
        <div class="user-score pab nor flex">
          <mu-icon value="stars" color="#fcc015" :size="18" />
          563
        </div>
      </div>
    </mu-flexbox>
    <mu-list class="topic-list">
      <mu-list-item title="我收藏的话题" afterTextClass="topic-num" afterText="65">
        <mu-icon value="star" :size="20" style="color: #fcc015" slot="left"/>
        <mu-icon value="navigate_next" color="#D3DCE6" slot="right" />
      </mu-list-item>
      <mu-list-item title="我参与的话题" afterTextClass="topic-num" afterText="5">
        <mu-icon value="chat" :size="20" style="color: #00b1fe" slot="left"/>
        <mu-icon value="navigate_next" color="#D3DCE6" slot="right" />
      </mu-list-item>
      <mu-list-item title="我最近的话题" afterTextClass="topic-num" afterText="5">
        <mu-icon value="bubble_chart" :size="20" style="color: #f86161" slot="left"/>
        <mu-icon value="navigate_next" color="#D3DCE6" slot="right" />
      </mu-list-item>
    </mu-list>
    <mu-flat-button label="退出登录" class="logout-button w100" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
        'common'
    ]),
  }
}
</script>

<style lang="less">
  .user-flex{
    height: 4.375rem;
    margin-top: 1rem;
    padding: 0 12px;
    background-color: #fff;
    .user-photo{
      height: 3.125rem;
      width: 3.125rem;
    }
    .user-info{
      height: 2.875rem;
      margin-left: 12px;
      font-size: 1rem;
      .user-score{
        top: 0.2rem; 
        padding: 1px 6px;
        white-space:nowrap;
        font-size: .85rem;
        background-color: #eff2f7;
        border-radius: 18px;
        .material-icons{
          line-height: 20px;
          margin-right: 2px;
        }   
      }
    }
  }
  .topic-list{
    padding: 0;
    margin: 1rem 0;
    background-color: #fff;
    .mu-item{
      position: relative;
      padding-left: 45px;
      line-height: 45px;
      border-bottom: 1px solid #e6eaf2;
      .mu-item-content{
        font-size: .85rem;
      }
    }
    .topic-num{
      position: absolute;
      right: -1rem;
      height: 21px;
      min-width: 21px;
      justify-content: center;
      background-color: #e5e9f2;
      border-radius: 50%;
    }
  }
  .logout-button{
    height: 45px;
    background-color: #fff;
  }
</style>
