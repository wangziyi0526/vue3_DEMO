<template>
  <Button :btnText="btn.btnText" :btnType="btn.btnType" :btnIcon="btn.btnIcon"/>
  <Button :btnText="btnCancel.btnText" :btnType="btnCancel.btnType" :btnIcon="btnCancel.btnIcon"/>
</template>
<script>
import Button from "./components/Button.vue";
import { reactive } from "vue";
export default {
  name: "App",
  data() {
    return {};
  },
  setup() {
    const btn = reactive({ btnText: "确定",btnIcon:'el-icon-check',btnType:'goon' });
    const btnCancel =  reactive({ btnText: "取消",btnIcon:'' ,btnType:'cancel' });
    return {
      btn,
      btnCancel
    };
  },

  components: {
    Button,
  },
};
</script>

<style>
</style>
