<template>
	<div>
		<!--<span>ID:{{this.userId}}</span> 
		<span class="logout">注销</span>-->
		  <el-table
		    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
		    stripe
		    border
		    style="width: 100%">
		    <el-table-column
		      fixed
		      prop="date"
		      label="日期"
		      width="150">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="姓名"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="province"
		      label="省份"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="city"
		      label="市区"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="地址"
		      width="300">
		    </el-table-column>
		    <el-table-column
		      prop="zip"
		      label="邮编"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      fixed="right"
		      label="操作"
		      width="100">
		      <template slot-scope="scope">
		        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
		        <el-button type="text" size="small">编辑</el-button>
		      </template>
		    </el-table-column>
		  </el-table>
		  
		  <div class="block">
		    <span class="demonstration">显示总数</span>
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page.sync="currentPage"
		      :page-size = pagesize
		      layout="total, prev, pager, next"
		      :total=tableData.length>   
		    </el-pagination>
		  </div>
		  
		  <p v-show="false">{{this.$store.state.place}}</p>
		  <p v-show="false">{{place}}</p>
	</div>
</template>

<script>
	import store from '../store/store'
  export default {
    name: 'test',
    data() {
      return {
      	place:this.$store.getters.getNetType,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎1',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎2',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎3',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎4',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },{
          date: '2016-05-03',
          name: '王小虎5',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎6',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎7',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎8',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },{
          date: '2016-05-03',
          name: '王小虎9',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎10',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎11',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎12',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        
        currentPage:1,
        pagesize:5,
//      userId:this.$route.params.userid
        userId:this.$route.query.userid
      }
    },
    
    mounted(){
//  	getTableData(){
//  		
//  	}
    	this.$Axios.get('http://192.168.10.58/account/api/User', {
		    PageIndex: this.currentPage ,
    		PageSize: 8,
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
    },
    
    methods: {
      handleClick(row) {
        console.log(row);
      },
       onSubmit() {
        console.log('submit!');
      },
      
      handleSizeChange(size) {
        console.log(`每页 ${size} 条`);
        	this.pagesize = val;
      },
      handleCurrentChange(currentPage) {
        console.log(`当前页: ${currentPage}`);
        this.currentPage = currentPage;
      }
    },
  }
</script>

<style scoped="scoped">
	span{
		text-align: right;
		font-size: 0.8em;
	}
	.logout{
		color: orangered;
	}
	
	.el-form{
		width: 20%;
		margin: 5% auto;
		background-color: #f0f0f0;
	}
</style>