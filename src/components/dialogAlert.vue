<template>
<div>
  <mu-dialog :open="common.dialogalert.isopen" title="提示">
    {{common.dialogalert.msg}}
    <mu-flat-button label="确定" slot="actions" primary @click="close"/>
  </mu-dialog>
</div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  computed: {
    ...mapState([
      'common',
    ]),
  },
  methods: {
    close () {
      this.$store.commit("HIDE_DIALOGALERT");
    }
  }
}
</script>

<style lang="less">

</style>