<template>
<div>
	<section class="section sectionBg" style="padding-bottom: 26px">
		<div class="container">
			<div class="row" style="padding:80px 0px"></div>
		</div>
	</section>
	<section>
		<div class="container">
			<div class="row">
				<div class="title font_Bold">Introducing</div>
				<div style="text-align: center;">
					<img src="/assets/product-icon.png" height="100px" />
				</div>
				<div class="texts-light">
					AI Cloud is a new approach built for the demands, challenges and opportunities of AI today. A single system of record, accelerating the delivery of AI to production for every organization. All users collaborate in a unified environment built for continuous optimization across the entire AI lifecycle.
				</div>
				<div style="text-align: center;padding: 40px 0px 0px 0px;">
					<img src="/assets/line.png" height="50px" />
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="container">
			<div class="row" style="margin-bottom: 60px">
				<img src="/assets/center-prodect.jpg" />
			</div>
		</div>
	</section>
	<section>
		<div class="container">
			<div class="row">
				<div class="col-lg-6" v-for="(item,index) in videoList" :key="index">
					<div class="scrolling-tab__video">
            <video loop="loop" muted preload="metadata" autoplay="autoplay" style="display: block;width: 100%;border-radius:14px">
              <source :src="item.videoUrl" type="video/mp4">
            </video>
          </div>
					<div class="video-title">{{item.title}}</div>
					<div class="video-lable">{{item.lable}}</div>
				</div>
			</div>
		</div>
	</section>
</div>
</template>
<script>
export default {
	name: 'product',
	data() {
		return {
			videoList: [
				{
					title: 'Train on the Edge',
					lable: 'Tracing a model issue through the data it is built and acts upon is a time-consuming feat. Reduce time-to-resolution for even the most complex models with purpose-built workflows for root cause analysis',
					videoUrl: 'https://arize.com/wp-content/uploads/2022/08/ML-Performance-Tracing.mp4'
				},
				{
					title: 'Train on the Edge',
					lable: 'Tracing a model issue through the data it is built and acts upon is a time-consuming feat. Reduce time-to-resolution for even the most complex models with purpose-built workflows for root cause analysis',
					videoUrl: 'https://arize.com/wp-content/uploads/2022/08/ML-Performance-Tracing.mp4'
				},
				{
					title: 'Serve Anywhere',
					lable: 'Tracing a model issue through the data it is built and acts upon is a time-consuming feat. Reduce time-to-resolution for even the most complex models with purpose-built workflows for root cause analysis',
					videoUrl: 'https://arize.com/wp-content/uploads/2022/08/ML-Performance-Tracing.mp4'
				},
				{
					title: 'Observability &Continual Improvement',
					lable: 'Tracing a model issue through the data it is built and acts upon is a time-consuming feat. Reduce time-to-resolution for even the most complex models with purpose-built workflows for root cause analysis',
					videoUrl: 'https://arize.com/wp-content/uploads/2022/08/ML-Performance-Tracing.mp4'
				},
			]
		}
	},
	created() {},
	mounted() {},
	methods: {

	}
}
</script>
<style scoped>
.sectionBg{
	background: url("/assets/product.jpg") center no-repeat;
	background-size: cover;
}
.title{
	font-size: 50px;
	font-weight: bold;
	color: #333333;
	padding: 60px 0px 30px 0px;
	text-align: center;
}
.texts-light{
	text-align: center;
	font-size: 18px;
	font-weight: 400;
	color: #929292;
	line-height: 26px;
	margin-top: 20px;
}
.video-title{
	padding: 25px 0px 5px 0px;
	font-size: 20px;
	font-weight: 600;
	color: #000000;
}
.video-lable{
	font-size: 16px;
	font-weight: 400;
	color: #929292;
	margin-bottom: 50px;
}
</style>
