<template>
  <div>
    <breadcrumb :data="['课件下载']"></breadcrumb>
    <el-table :data="tableData" :default-sort="{prop:'cw_name'}">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="cw_name" sortable label="文件名"></el-table-column>
      <el-table-column prop="create_time" sortable label="上传时间" :formatter="formatter" width="180px"></el-table-column>
      <el-table-column label="操作" fixed="right" width="70px">
        <template slot-scope="scope">
          <a :href="scope.row.downloadUrl" :download="scope.row.cw_name">
            <el-button type="text" size="small" @click="downloadFileFn(scope)">下载22</el-button>
          </a>
          <!-- <a :href="change_url(scope.row.downloadUrl)" :download="scope.row.cw_name">
            <el-button type="text" size="small" @click="downloadFileFn(scope)">下载</el-button>
          </a> -->
          <!-- <el-button type="text" size="small" @click="downloadFileFn(scope)">下载11</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Courseware",
  data() {
    return {
      tableData: []
    };
  },
  created() {
    $httpc.get(`/course/${this.$route.params.c_id}/courseware`).then(res => {
      console.log("课件信息")
      console.log(res)
      this.tableData = res;
    });
  },
  methods: {
    // downloadFileFn(item){
    //   console.log("开始下载....")
    //   console.log(item)
    //   console.log(this.change_url(item.row.downloadUrl))
    //   console.log(this.axios)

    //   $httpc.get("liuxiangyuown_url" + this.change_url(item.row.downloadUrl)).then(res => res.blob().then(blob => {
    //     console.log(blob)
    //     // var a = document.createElement('a');
    //     // var url = window.URL.createObjectURL(blob);
    //     // var filename = 'file.png';
    //     // a.href = url;
    //     // a.download = filename;
    //     // a.click();
    //     // window.URL.revokeObjectURL(url);
    //   }));
    // },
    formatter(row) {
      return this.$moment
        .unix(row.create_time / 1000)
        .format("YYYY-MM-DD HH:mm");
    },
    download(row) {
      window.open(row.downloadUrl);
    },
    change_url(item){
      return window.Tmp_host + item.replace("/files" , "")
    }
  }
};
</script>
