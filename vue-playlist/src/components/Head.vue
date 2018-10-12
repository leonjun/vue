<template>
	<div class="head">
		<div class="logo">
			<span>logo</span>
		</div>
		<div class="searchBox">
			<div>
				<button><i class="fa fa-search"></i></button>
				<input placeholder="关键词搜索" />			
			</div>
		</div>
	</div>
</template>

<script>
	export default{
			
		data(){
			return{
				HelloMsg:'hello',
				
			}
		},
		
	}
</script>
	
<style lang="scss">
	::-webkit-input-placeholder{
		color: #9a9a9a;
 	}
	.head{
		padding: 1rem;
		overflow: hidden;
		background-color: #d43d3d;
		height: 64px;
	}
	.logo{
		float: left;
		width: 10%;
		span{
			display: block;
			
			color: white;
			width: 30px;
			height: 30px;
			line-height: 30px;
		}
	}
	.searchBox{
		float: right;
		
		width: 90%;
		input{
			border: none;
			padding: 7px 10px;
			float: right;
			margin-right: 5px;
			width: 75%;
		}
		button{
			color: white;
			background: none;
			border: none;
			font-size: 20px;
			float: right;
			line-height: 30px;
			outline:none;
		}
		div{
			text-align: right;
			
			overflow: hidden;
		}
	}
	body{
		margin: 0;
	}
</style>