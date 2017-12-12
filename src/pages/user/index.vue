<template>
  <div class="user">
    <!-- <login :v-if="true" /> -->
    <!-- <user :v-if="true" /> -->
    <topic />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import login from './login'
import user from './user'
import topic from './topic'

export default {
  computed: {
    ...mapState([
        'common'
    ]),
  },
  components:{
    login,
    user,
    topic
  }
}
</script>

<style lang="less">
  .user{
    background-color: #eff2f7;
  }
</style>
