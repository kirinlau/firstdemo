<template>
  <div class="hello">
    <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1">处理中心</el-menu-item>
		  <el-submenu index="2">
		    <template slot="title">我的工作台</template>
		    <el-menu-item index="2-1">选项1</el-menu-item>
		    <el-menu-item index="2-2">选项2</el-menu-item>
		    <el-menu-item index="2-3">选项3</el-menu-item>
		    <el-submenu index="2-4">
		      <template slot="title">选项4</template>
		      <el-menu-item index="2-4-1">选项1</el-menu-item>
		      <el-menu-item index="2-4-2">选项2</el-menu-item>
		      <el-menu-item index="2-4-3">选项3</el-menu-item>
		    </el-submenu>
		  </el-submenu>
		  <el-menu-item index="3" disabled>消息中心</el-menu-item>
		  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>
		<div class="line"></div>-->
		<el-menu
		  :default-active="activeIndex2"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#545c64"
		  text-color="#fff"
		  active-text-color="#ffd04b">
		  <el-menu-item index="1">处理中心</el-menu-item>
		  <el-submenu index="2">
		    <template slot="title">我的工作台</template>
		    <el-menu-item index="2-1">选项1</el-menu-item>
		    <el-menu-item index="2-2">选项2</el-menu-item>
		    <el-menu-item index="2-3">选项3</el-menu-item>
		    <el-submenu index="2-4">
		      <template slot="title">选项4</template>
		      <el-menu-item index="2-4-1">选项1</el-menu-item>
		      <el-menu-item index="2-4-2">选项2</el-menu-item>
		      <el-menu-item index="2-4-3">选项3</el-menu-item>
		    </el-submenu>
		  </el-submenu>
		  <el-menu-item index="3" disabled>消息中心</el-menu-item>
		  <el-menu-item index="4"><a href="#" target="_blank">订单管理</a></el-menu-item>
		</el-menu>
		
		<div class="loginPnl"> 
			<el-input
				v-focus
			  placeholder="请输入内容"
			  v-model="name"
			  clearable>
			</el-input>
			<el-input
			  placeholder="请输入内容"
			  v-model="pwd"
			  clearable>
			</el-input>
			<el-row>
			  <el-button type="primary" @click=toTest(name)>button1</el-button>
			  <el-button type="info">button2</el-button>
			</el-row>
		</div>
		
		<p><el-button @click=toTest(name) >table</el-button> <el-button @click=toForm(name)>form表单</el-button></p>
		<p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      activeIndex: '1',
    	activeIndex2: '1',
    	name:"",
    	pwd:''
    }
  },
  
  methods:{
//	toTest:function(id){
//	 	this.$router.push({
//	 		 name:'test',
//	 		 params:{userid:id}
//	 	})
//	},
 
	toTest:function(id){
	 	this.$router.push({
	 		 name:'test',
	 		 query:{userid:id}
	 	})
	},
	
	toForm:function(id){
	 	this.$router.push({
	 		 name:'form',
	 		 query:{userid:id}
	 	})
	}
	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginPnl{
  font-weight: normal;
  width: 18%;
  height: 200px;
  background-color: #2C3E50;
  margin: 5% auto;
  border-radius: 10px;
}


.el-input{
	width: 70%;	
	margin: 10px 10px auto;
}

.el-row{
	margin-top:10% ;
}

span{
	margin-left: 5%;
	background-color: gray;
	padding: 1em;
}
</style>
