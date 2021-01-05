<!-- 布局 -->
<template>
  <div class="layout">
    <el-container>
      <el-header>头部组件</el-header>
      <el-container>
        <el-aside width="200px">侧边栏</el-aside>
        <el-main>
          <Table />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Table from "./Table"
export default defineComponent({
  data() {
    return {};
  },

  components: {
    Table
  },

  computed: {},

  created() {},
  mounted() {},

  methods: {},
});
</script>
 