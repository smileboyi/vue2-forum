<template>
	<transition 
		enter-active-class="animated slideInUp"
		leave-active-class="animated slideOutDown"
	>
		<mu-content-block 
			class="info-popup pfi nob z50" 
			:class="{ 'error-info-content-class':!common.infopopup.infostate }"
			:style="{ bottom: common.infopopup.bottom }"
		>
			<p class="info-text">
				{{ common.infopopup.infomsg }}
			</p>
		</mu-content-block>
	</transition>
</template>
<style lang="less">
  .info-popup{
    line-height: 45px;
    width: 100%;
    font-size: 1rem;
    color: #fff;
		text-align: left;
		background-color: #42b884;
		&.error-info-content-class{
			background-color: #e96900;
		}
		.info-text{
			padding: 0 10px;
			font-size: .85rem;
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
