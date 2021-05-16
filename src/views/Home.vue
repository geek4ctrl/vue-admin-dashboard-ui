<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Header/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
// import SignIn from "@/views/SignInFlow/SignIn.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Header,
  },
};
</script>
