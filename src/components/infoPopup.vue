<template>
	<transition 
		enter-active-class="animated slideInUp"
		leave-active-class="animated slideOutDown"
	>
		<mu-popup 
			position="bottom" 
			:overlay="false"
			:popupClass="popupClass"
			:open="openpopup"
		>
				<mu-content-block>
					<p class="info-text">{{ infotext }}</p>
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
      .info-text{
        padding: 0 10px;
      }
    }
  }
  .error-info-class{
		bottom: 55px;
		.mu-content-block{
			background-color: #e96900;
		}
	}
</style>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    props: {
        openpopup: Boolean,
        infostate: Boolean,
				infotext: String
		},
		data: function(){
			return {
				isexist: false,
				popupClass: "info-popup tc "
			}
		},
		mounted: function(){
			let _popupClass = this.popupClass;
			_popupClass = this.$props.infostate 
				? _popupClass + "error-info-class"
				: _popupClass;
			this.popupClass = _popupClass;
			this.timer = setTimeout(function(){
				this.isexist = true;
			},2000)
		 },
		 watch: {
			 isexist: function(val){
				 
			 }
		 }
}
</script>
