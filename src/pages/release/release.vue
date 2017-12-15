<template>
  <div class="pfi z50 wh100 release">
    <dialogAlert />
    <mu-appbar title="发布">
      <mu-icon-button icon="arrow_back" slot="left"/>
    </mu-appbar>
    <mu-flexbox orient="vertical" align="center">
      <mu-select-field 
        v-model="moduleVal" 
        labelFocusClass="label-focus"
        underlineFocusClass="underline-focus"
        label="选择模块"
      >
        <mu-menu-item value="q&a" title="问答"/>
        <mu-menu-item value="share" title="分享"/>
        <mu-menu-item value="recruit" title="招聘"/>
      </mu-select-field>
      <mu-text-field 
        label="标题" 
        v-model="title" 
        labelFocusClass="label-focus"
        underlineFocusClass="underline-focus"
        hintText="10个字符以上"
      />
      <div class="edit-btn" @click="isopen=true">
        点击编辑正文
      </div>
      <mu-flat-button label="发布" class="fetch-btn"/>
    </mu-flexbox>
    <mu-bottom-sheet sheetClass="wh100 grail release-edit-page" :open="isopen">
      <mu-tabs
        lineClass="tabs-line"
        :value="activeTab" 
        @change="handleTabChange"
      >
        <mu-tab value="tab1" title="编辑"/>
        <mu-tab value="tab2" title="预览"/>
      </mu-tabs>
      <div class="fe ova content" v-show="activeTab === 'tab1'">
        <mu-text-field 
          label="正文" 
          hintText="话题内容。。。"
          class="edit-main" 
          labelFocusClass="label-focus"
          underlineFocusClass="underline-focus"
          :value="input" 
          @input="update"
          multiLine
          :rows="15" 
        />
      </div>
      <div class="fe context ova" v-show="activeTab === 'tab2'">
        <div v-html="compiledMarkdown"></div>
      </div>
      <mu-flexbox justify="flex-end">
        <mu-flat-button label="保存" class="save-btn" @click="saveEdit"/>
        <mu-flat-button label="取消" class="cancel-btn" @click="cancelEdit" />
      </mu-flexbox>
    </mu-bottom-sheet>
  </div>
</template>

<script>
import Marked from 'marked'
import highlightjs from 'highlight.js'     //很大，500kb
import 'highlight.js/styles/googlecode.css'
import dialogAlert from '../../components/dialogAlert'
import debounce from 'lodash/debounce'


export default {
  data(){
    return{
      moduleVal: "q&a",
      title: "",
      input: "",
      isopen: true,
      activeTab: 'tab1'
    }
  },
  computed: {
    compiledMarkdown: function () {
      return Marked(this.input, { sanitize: true });
    }
  },
  methods: {
    handleTabChange(val){
      this.activeTab = val;
    },
    update: debounce(function (e) {
      this.input = e;
    }, 300),
    saveEdit(){
      // 替换上一次保存的文本
      this.isopen = false;
    },
    cancelEdit(){
      // 换为上一次保存的文本
      this.isopen = false;
    }
  },
  components: {
    dialogAlert,
    highlightjs
  }
}
</script>

<style lang="less">
  .release{
    background-color: #fff;
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
  .release-edit-page{
    .mu-tabs{
      background-color: #1ba167;
    }
    .tabs-line{
      background-color: #fff;
    }
    .content{
      .edit-main{
        width: 88%;
        margin-top: 1rem;
        margin-left: 6%;
      }
    }
    .context{
      padding: 1rem;
    }
    .save-btn{
      color: #41b883;
    }
    .cancel-btn{
      margin: 1rem 1rem 1rem .2rem;
      color: #8492a6;
    }
  }
</style>
