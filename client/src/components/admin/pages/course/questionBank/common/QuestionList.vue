<template>
  <el-table :data="data">
    <el-table-column type="index"></el-table-column>
    <el-table-column prop="ql_id" label="题号"></el-table-column>
    <el-table-column prop="q_simple_description" label="描述"></el-table-column>
    <el-table-column label="分值">
      <template slot-scope="scope">
        <input @input="change($event , scope.row)" class="my_input" v-model="scope.row.score" type="number">
        <!-- <el-input @input="change($event , scope.row)" v-model="scope.row.score"></el-input> -->
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="text" @click="deleteOne(scope.row)" size="mini">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'QuestionList',
  props: ['data'],
  methods: {
    deleteOne(item) {
      this.data.splice(this.data.indexOf(item), 1);
    } , 
    change(e , bbb){
      console.log("开始发射事件")
      
      // bbb.score = e - 0
      this.$forceUpdate()
      // this.$emit("change_score" , bbb)
    }
  }
}
</script>

<style scope>
  .my_input{
    /* border: 1px solid red;
    background-color: yellow */
    outline: none;
  }
</style>
