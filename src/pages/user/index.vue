<template>
  <div class="user">
    <login v-if="!login.loginstate" />
    <user v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import login from './login'
import user from './user'


export default {
  computed: {
    ...mapState([
      'login'
    ]),
  },
  components:{
    login,
    user
  }
}
</script>

<style lang="less">
  .user{
    background-color: #eff2f7;
  }
</style>
