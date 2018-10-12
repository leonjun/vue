<template>
	<scroller id="lists" :on-refresh="refresh" :on-infinite="loadMore">
		<div>
			<div>
				<section class="listContent" v-for="(list,index) in lists">

					<a v-if="list.imgs.length==1">
						<div class="leftContent cbox hasCommon">
							<h3>{{list.title}}</h3>
							<div class="intemInfo">
								<span>{{list.address}}</span>
								<span>{{list.commont}}</span>
								<span>{{list.commontTotal}}</span>
							</div>
						</div>
						<div class="rightContent cbox hasCommon" v-for="imgs in list.imgs">
							<img v-bind:src="imgs.src" />
							<img src="../assets/a.jpg" />
						</div>
					</a>
					<a v-if="list.imgs.length==0">
						<div class="noImg hasCommon">
							<h3>{{list.title}}</h3>
							<div class="intemInfo">
								<span>{{list.address}}</span>
								<span>{{list.commont}}</span>
								<span>{{list.commontTotal}}</span>
							</div>
						</div>

					</a>
					<a v-if="list.imgs.length==3">
						<div class="moreImg hasCommon">
							<h3>{{list.title}}</h3>
							<div class="imgBox">

								<div class="img" v-for="imgs in list.imgs">
									<img v-bind:src="imgs.src" />
								</div>

							</div>
							<div class="intemInfo">
								<span>{{list.address}}</span>
								<span>{{list.commont}}</span>
								<span>{{list.commontTotal}}</span>
							</div>
						</div>

					</a>
				</section>
			</div>
			<div id="listButtom">
				<section id="loading">
					<a>加载中...</a>
				</section>
			</div>
		</div>
		
	</scroller>

</template>

<script>
	import Vue from 'vue'
	import VueScroller from 'vue-scroller'
	Vue.use(VueScroller)
	export default {
		data() {
			return {
				items:[],
				HelloMsg: 'hello',
				lists: [{
						title: "国足夺冠了，当然不是男足...",
						address: "今体育",
						commont: "评论",
						commontTotal: "20",
						imgs: [{
							src: "../assets/a.jpg"
						}]
					},
					{
						title: "国足夺冠了，当然不是男足个人的说法因特网...",
						address: "今体育",
						commont: "评论",
						commontTotal: "20",
						imgs: [

						],

					},

					{
						title: "国足夺冠了，当然不是男足...",
						address: "今体育",
						commont: "评论",
						commontTotal: "20",
						imgs: [{
								src: "../assets/a.jpg"
							},
							{
								src: "../assets/a.jpg"
							},
							{
								src: "../assets/a.jpg"
							}
						]
					},
				]
			}
		},
		methods: {
			//无限加载函数
			refresh(done) {
				
			},
			loadMore(done) {
				
			}
		},
		
	}
</script>

<style lang="scss">
	.listContent {
		margin: 0 1rem;
		>a {
			display: block;
			overflow: hidden;
			padding: 1rem 0;
		}
		border-bottom: 1px solid #eeeeee;
		overflow:hidden;
		.cbox {
			display: inline-block;
			vertical-align: middle;
			margin: 0;
			padding: 0;
			border: 0;
		}
		.noImg {
			width: 100%;
		}
		.hasCommon {
			.intemInfo {
				text-align: left;
				margin-top: 5px;
				span {
					font-size: 12px;
				}
			}
			h3 {
				padding: 0;
				margin: 0;
				text-align: left;
			}
		}
		.leftContent {
			width: 65%;
			.intemInfo {
				text-align: left;
				span {
					font-size: 12px;
				}
			}
			h3 {
				padding: 0;
				margin: 0;
				text-align: left;
			}
		}
		.rightContent {
			width: 33%;
			overflow: hidden;
			img {
				width: 100%;
			}
		}
		.moreImg {
			.imgBox {
				margin-top: 5px;
				overflow: hidden;
				.img {
					display: inline-block;
					float: left;
					padding-right: 4px;
					width: -webkit-calc((100% - 12px)/3);
					img {
						width: 100%;
					}
				}
			}
		}
	}
	
	#lists {
		top: 114px;
	}
</style>