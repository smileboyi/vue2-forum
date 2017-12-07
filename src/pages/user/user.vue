<template>
  <div class="login">
    <div class="accessToken">
      <mu-icon class="lock-icon" value="lock_outline"/>
      <mu-text-field 
        hintText="accessToken" 
        @change="handlechange"
      />
    </div>
    <div>
      <mu-raised-button label="Default" class="demo-raised-button"/>
      <mu-raised-button label="Primary" class="demo-raised-button" primary/>
    </div>
    <p class="how-get">
      <i></i>
      如何获取 accessToken？
    </p>
  </div>
</template>

<script>


export default {
  data(){
    return{
      accessToken:''
    }
  },
  methods: {
    handlechange(val) {

    },
    handleInput(val) {
      this.accessToken = val;
    }
  }
}
</script>

<style>

</style> 