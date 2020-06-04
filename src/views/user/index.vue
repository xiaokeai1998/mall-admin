<template>
  <div class="user_grow">
        <!-- 面包屑 -->
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/wel' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
        <!-- 搜索框 -->
    <el-input placeholder="请输入搜索内容" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
     <el-button type="success" plain>添加用户</el-button>
     <!-- 表格栏 -->
      <el-table :model="tableData" :border="true" :data="tableData" style="width: 100%">
        <el-table-column  prop="id" label="#" width="40" type="index" ></el-table-column>
        <el-table-column prop="name" label="姓名" width="140"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="140"></el-table-column>
        <el-table-column prop="number" label="电话" width="140"></el-table-column>
        <el-table-column label="修改状态">
           <el-switch active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-table-column>
        <el-table-column label="操作">
           <template>
             <el-tooltip class="item" effect="dark" content="修改" placement="top">
                <el-button type="primary" icon="el-icon-edit"></el-button>
             </el-tooltip>
             <el-tooltip class="item" effect="dark" content="删除" placement="top">
               <el-button type="danger" icon="el-icon-delete"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="添加" placement="top">
                <el-button type="warning" icon="el-icon-check"></el-button>
            </el-tooltip>
           </template>
        </el-table-column>
    </el-table>
        <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="10">
    </el-pagination>
  </div>
</template>
<script>
import { userList } from '@/api/user_api.js'
export default {
  data () {
    return {
      pagesize: 5,
      pagenum: 1,
      // 搜索
      query: '',
      // 表格的数据
      tableData: [{
        id: 1,
        name: '小可爱',
        email: 'w3c@123',
        number: 12345678901

      },
      {
        id: 2,
        name: '小可爱',
        email: 'w3c@123',
        number: 12345678901

      }
      ]
    }
  },
  mounted () {
    this.getListMockApi()
  },
  methods: {
    // 列表接口
    getListMockApi () {
      userList()
        .then(res => {
          console.log(res)
        })
    },
    handleSizeChange () {},
    handleCurrentChange () {}
    //  handleEdit(index, row) {
    //     console.log(index, row)
    //   },
    //   handleDelete(index, row) {
    //     console.log(index, row)
    //   }
  }
}
</script>

<style lang="less" scoped>
.el-button{
    margin:0 5px;
}
.el-breadcrumb{
    background:#d2dbe6;
    height:40px;
    line-height:40px;
    padding:0 10px;
}
.el-input{
    width:300px;
}
</style>
