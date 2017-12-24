<template>
	<mu-snackbar 
		class="info-popup bsb" 
		:class="{ 'error-info-class':!common.infopopup.infostate }"
		:style="{ bottom: common.infopopup.bottom + 'px' }"
		:message="common.infopopup.infomsg"
	/>
</template>
<style lang="less">
  .info-popup{
		width: 100%;
		height: 65px;
		padding: 10px;
		font-size: .95rem;
		color: #fff;
		text-align: left;
		background-color: #42b884;
		&.error-info-class{
			background-color: #e96900;
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