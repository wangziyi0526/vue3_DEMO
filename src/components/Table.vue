<!-- 表格 
    表格组件 初步来看需要接受两个参数 实现动态化，
    1. 表格数据
    2. 表格lable的 数组，与表格数据对应，并利用循环遍历出表头，
-->
<template>
  <div>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <div v-for="(item, index) in tableTitle" :key="index">
        <el-table-column
      :prop="item.prop"
      :label="item.label"
      :width="item.width">
    </el-table-column>
    </div>
    
    <el-table-column
      label="操作"
      width="100">
      <template #default="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default  defineComponent({
  data () {
    return {
        tableTitle:[
            {
                prop:"date",
                label:"日期",
                width:'150'
            },
            {
                prop:"name",
                label:"姓名",
                width:'120'

            },
            {
                prop:"province",
                label:"省份",
                width:'120'
            },
            {
                prop:"city",
                label:"市区",
                width:'120'
            },
             {
                prop:"address",
                label:"地址",
                width:'300'
            },
            {
                prop:"zip",
                label:"邮编",
                width:'120'
            }
        ],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
    };
  },

  components: {},

  computed: {},

  created() {}, 
  mounted() {},

  methods: {}
})

</script>
<style scoped>
</style>