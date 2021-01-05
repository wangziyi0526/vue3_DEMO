<!-- 按钮 -->
<template>
  <div>
    <el-button :type='btnType' :icon="btnIcon">{{ btnText }}</el-button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

  props: {
    
    btnText: {
      type: String,
      default: "",
    },
    btnType: {
      type: String,
      default: "",
    },
    btnIcon:{
      type: String,
      default:''
    }
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
</style>