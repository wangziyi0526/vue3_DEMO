<!-- 布局 -->
<template>
  <div class="layout">
    <el-container>
      <el-header>头部组件</el-header>
      <el-container>
        <el-aside width="200px">侧边栏</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },

  components: {},

  computed: {},

  created() {},
  mounted() {},

  methods: {},
});
</script>
<style scoped>

</style>