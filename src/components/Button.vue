<!-- 按钮 -->
<template>
  <div>
    <el-button type=`$btnType` icon="el-icon-check">{{ btnText }}</el-button>
    <el-button type="primary">{{ btnText }}</el-button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

  props: {
    size: {
      type: String,
      default: "middle",
    },
    color: {
      type: String,
      default: "goon",
    },
    btnText: {
      type: String,
      default: "",
    },
    btnType: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  created() {},
  mounted() {},

  methods: {},
})
</script>
<style scoped>
@import "../assets/css/button.css";
</style>