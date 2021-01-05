<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <Button :btnText="btn.btnText" :btnType="goon"/>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/Button.vue";
import { ref, reactive } from "vue";
export default {
  name: "App",
  data() {
    return{
      goon:'goon'
    }
  },
  setup() {
    const count = ref(0);
    const btn = reactive({ btnText: "确定" });
    return {
      count,
      btn,
    };
  },

  components: {
    HelloWorld,
    Button,
  },
};
</script>

<style>
</style>
