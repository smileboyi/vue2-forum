<template>
<div>
  <mu-dialog :open="dialog" title="提示">
    话题标题字数不能小于10个
    <mu-flat-button label="确定" slot="actions" primary @click="close"/>
  </mu-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      dialog: true
    }
  },
  methods: {
    close () {
      this.dialog = false
    }
  }
}
</script>

<style lang="less">

</style>