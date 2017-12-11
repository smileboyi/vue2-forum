<template>
	<transition 
		enter-active-class="animated slideInUp"
		leave-active-class="animated slideOutDown"
	>
		<mu-popup 
			position="bottom" 
			:overlay="false"
			popupClass="info-popup tc"
			:open="common.infopopup.isopen"
			:style="{ bottom: common.infopopup.bottomclass }"
		>
				<mu-content-block :class="{ 'error-info-content-class':!common.infopopup.infostate }">
					<p class="info-text">{{ common.infopopup.infomsg || '&nbsp;' }}</p>
				</mu-content-block>
		</mu-popup>
	</transition>
</template>
<style lang="less">
  .info-popup{
    line-height: 45px;
    width: 100%;
    font-size: 1rem;
    color: #fff;
		text-align: left;
    .mu-content-block{
			background-color: #42b884;
  		&.error-info-content-class{
				background-color: #e96900;
			}
      .info-text{
        padding: 0 10px;
      }
    }
  }
</style>
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
