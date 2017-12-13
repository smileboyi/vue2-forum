<template>
  <div class="user">
    <infoPopup v-show="common.infopopup.isopen" />
    <login v-if="!login.loginstate" />
    <user v-else />
    <!-- <topic /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import login from './login'
import user from './user'
import topic from './topic'
import infoPopup from "../../components/infoPopup"

export default {
  computed: {
    ...mapState([
        'common',
        'login'
    ]),
  },
  components:{
    login,
    user,
    topic,
    infoPopup
  }
}
</script>

<style lang="less">
  .user{
    background-color: #eff2f7;
  }
</style>
