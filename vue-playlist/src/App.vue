<template>
	
  <div id="app">
  	<Head></Head>
  	<div class="tabs">
  		
  	
  	<div class="tab">
  		<ul>
  			<li  v-for="(operate,path,index) in paths.ops">
  				<router-link :to="{path:operate.path}">{{operate.name}}</router-link>
  			</li>
  		</ul>
  	</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Head from '@/components/Head';
export default {
  name: 'App',
  components:{
    "Head":Head,
  },
  data(){
  	return{
  		paths:{
  			ops:[
  				{path:"/HelloWorld",name:"ddhome"},
  				{path:"/Baner",name:"Baner"},
  				{path:"/Hello",name:"热点"},
  				{path:"/Hello",name:"Hello"},
  				{path:"/Hello",name:"Hello"},
  				{path:"/Hello",name:"Hello"},
  				{path:"/Hello",name:"Hello"},
  				{path:"/Hello",name:"Hello"},
  				{path:"/Hello",name:"Hello"},
  				{path:"/Hello",name:"Hello"},
  			]
  		}
  		
  		
  	}
  	
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
li{
	list-style: none;
}
.tabs{
	overflow: hidden;
	width: 100%;
	height: 50px;
}
.tab{
	background: #f4f5f6;
	overflow:hidden;
	padding: 15px 0;
	
	ul{
		overflow:hidden;
		padding: 0;
		margin: 0;
   		overflow-x: scroll;
   		white-space: nowrap;
   		overflow-scrolling: touch;
   		
		li{
			display: inline-block;
			margin-left: 15px;
			a{
				text-decoration: none;
				color: #505050;
			}
		}
	}
}
.tab ul::-webkit-scrollbar{
	display: none;
}
</style>
