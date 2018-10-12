<template>
	
  <div class="hello">
    <div>
    	<input v-model="userName" placeholder="username" />
    	<span>{{userName}}</span>
    </div>
    <div>
    	<template v-if="user=='test1'">
    		<label>user</label>
    		<input placeholder="user" />
    	</template>
    	<template v-else>
    		<label>telphone</label>
    		<input placeholder="telphone" />
    	</template>
    	<button v-on:click="reverseType">click</button>
    </div>
    
    <div>
    	<transition v-if="show" name="bounce">
    	<p>toot</p>	
    	</transition>
    	<button v-on:click="show=!show">toogle</button>
    </div>
    <div>
    		<div v-if="name.length">
    			<p v-for="itm in name">{{itm.name}}</p>
    		</div>
    		<div v-else>not found</div>
    </div>
    <input v-on:focus="" />
    <div id="">
    	------------------
    </div>
    <div>
    	<div>
    		<p>任务计划表</p>
    	</div>
    	<div>
    		<p>添加任务</p>
    		<div id="">
    			<input type="" v-model="todo" placeholder="待办项" name="" id="" value="" />
    			<button v-on:click="addTodo(todo)">添加</button>
    		</div>
    	</div>
    	<div>
    		<button v-on:click="changeList(1)">所有任务</button>
    		<button v-on:click="changeList(2)">待完成</button>
    		<button v-on:click="changeList(3)">已完成</button>
    	</div>
    	<div class="list">
    		<p v-if="!list.length">无待办</p>
    		<div v-else>
    			<p>{{listname}}</p>
    			
    			<p v-for="it in filterList">
    				<span  v-show="!it.editable" v-bind:style="styleObject" >{{it.title}}</span>
    				<input v-model="it.title" v-show="it.editable" />
    				<span @click="editTodo(it)">edit</span>
    				<span @click="okEdit(it)">ok</span>
    			</p>
    		</div>
    	</div>
    	<button @click="apii">click</button>
    	<ul>
    		<li v-for="item in gridData">
    			{{item.author_name}}
    		</li>
    	</ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js Ap',
      userName:'leon',
      user:'test1',
      name:[
      	{name:"123"},
      	{name:"456"}
      ],
      
      gridData:[],
      styleObject:{
      	marginRight:'10px'
      },
      show:true,
      list:[],
      listname:'',
      value:1,
      todo:'',
      param:{
      	type:"top",
      	key:"85959052810d0f61872d8a51a358166a"
      },
      
      apiurl: 'http://v.juhe.cn/toutiao/index'
    }
  },
  methods:{
      	reverseType:function(){
      		console.log("456")
      		this.user=this.user.split('').reverse().join('');
      	},
      	test:function(){
      		console.log("123")
      	},
      	addTodo:function(todo){
      		this.list.push({
      			title:this.todo,
      			editable: false,
      			isfinished: false
      		})
      		this.todo='';
      	},
      	changeList:function(val){
  				this.value=val;
  			},
  			editTodo:function(todo){
  				todo.editable=true;
  			},
  			okEdit:function(todo){
  				todo.editable=false;
  			},
  			apii:function(){
  				this.$http.post('/api/toutiao/index',{type:"top","key":"85959052810d0f61872d8a51a358166a"}).then(function(response){
  					//this.$set('gridData',response.data.result.data);
  					console.log(response);
  					this.gridData=response.data.result.data;
  					console.log(this.gridData);
  				}).catch(function(response) {
        			console.log(response);
    			})
  				
  			
  			}
  },
  computed:{
  	filterList(){
  		if(this.value===1){
  			this.listname='全部';
  			return this.list
  		}else if(this.value===2){
  			this.listname='待办';
  			//return this.list.filter(item => !item.isfinished)
  			return	this.list.filter(function(item){
  				return !item.isfinished;
  			})
  			//}
  		}else if(this.value===3){
  			this.listname='已完成';
  			return this.list.filter(item => item.isfinished)
  		}
  		
  	},
  	
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
