<template>
  <div>
    <h2>Register {{main}} User </h2>
    <input type="text" name="" id="" key="username" placeholder="Username" v-model="username">
    <br>
    <input type="email" name="" id="" key="email" placeholder="Email" v-model="email">
    <br>
    <input type="password" name="" id="" key="password" placeholder="Password" v-model="password">
    <br>
    <input type="button" value="Register" key="registerBtn" v-on:click="register">
  </div>
</template>
<script>
import Http from '@/services/Http'
export default {
  name: "register",
  data() {
    return {
      main: 'Vue',
      username: '',
      email: '',
      password: ''
    }
  },
  watch: {

  },
  computed: {
    userInfo: function() {
      return {
        username: this.username,
        email: this.email,
        password: this.password,
      }
    }
  },
  methods: {
    register() {
      let user = this.userInfo;
      console.log("testing", user);
      Http.postInfo('register',user)
      .then(response => {
        console.log("register user response ", response.data)
      })
      .catch(e =>{
        console.error("#",e);
      })
    }
  }
}
</script>

<style scoped>

</style>


