<template>
  <div >
    <login v-if="!login.loginstate" />
    <message v-else  />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import login from './login'
import message from './message'


export default {
  computed: {
    ...mapState([
        'login'
    ]),
  },
  components:{
    login,
    message
  }
}
</script>

<style lang="less">

</style>
