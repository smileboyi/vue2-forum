<template>
  <div class="pfi z50 wh100 release">
    <mu-appbar title="发布">
      <mu-icon-button icon="arrow_back" slot="left"/>
    </mu-appbar>
    <mu-flexbox orient="vertical" align="center">
      <mu-select-field 
        v-model="module" 
        labelFocusClass="label-focus"
        underlineFocusClass="underline-focus"
        label="选择模块"
      >
        <mu-menu-item value="1" title="问答"/>
        <mu-menu-item value="2" title="分享"/>
        <mu-menu-item value="3" title="招聘"/>
      </mu-select-field>
      <mu-text-field 
        label="标题" 
        v-model="title" 
        labelFocusClass="label-focus"
        underlineFocusClass="underline-focus"
        hintText="10个字符以上"
      />
      <div  class="edit-btn">
        点击编辑正文
      </div>
      <mu-flat-button label="发布" class="fetch-btn"/>
    </mu-flexbox>
  </div>
</template>

<script>


export default {
  data(){
    return{
      module: "",
      title: ""
    }
  }
}
</script>

<style lang="less">
  .release{
    background-color: #fff;
    .label-focus{
      color: #41b883;
    }
    .underline-focus{
      background-color: #41b883;
    }
    .mu-text-field{
      width: 88%;
      margin-top: 1rem;
      margin-bottom: 0;
    }
    .edit-btn{
      width: 88%;
      line-height: 2.82rem;
      padding-left: .5rem;
      margin: .5rem 0 1.5rem;
      text-align: left;
      color: #475669;
      background-color: #eff2f7;
    }
  }
  .mu-menu-item-wrapper.active{
    color: #41b883;
  }
</style>
