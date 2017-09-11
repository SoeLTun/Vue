<template>
  <div>
    <h2>Register {{main}} </h2>
    <input type="text" name="" id="" key="username" placeholder="Username" v-model="username"> 
    <br>
    <input type="email" name="" id="" key="email" placeholder="Email" v-model="email">
    <br>
    <input type="password" name="" id="" key="password" placeholder="Password" v-model="password">
    <br>
    <input type="button" value="Register" key="registerBtn" v-on:click="registerUser()">
  </div>
</template>
<script>
export default {
  name: "register",
  data (){
    return {
      main: 'Vue',
      username: '',
      email:'',
      password:''
    }
  },
  watch: {

  },
  computed:{

  },
  methods:{
    registerUser:function(){
      console.log("testing");
      console.log(this.username, this.email,this.password);
    }
  }
}
</script>

<style scoped>

</style>


