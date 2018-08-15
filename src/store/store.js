import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// 引入 axios
import axios from 'axios'

axios.defaults.timeout = 6000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置请求头

const state={
	place:"school"
}

const mutations={
	
}

const actions={
	
}

const getters = {
	getNetType(state){
		return state.place+"...";
	}
}

const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});

export default store


