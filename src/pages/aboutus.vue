<template>
<div>
  <section class="section sectionBg" style="padding-bottom: 26px">
    <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="texts-light font_Bold">Members</div>
      </div>
    </div>
    </div>
  </section>
  <!-- <section class="center-bg">
    <div class="center-title font_Bold">Milestones</div>
  </section> -->
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="team-title font_Bold">Team Members</div>
        </div>
      </div>
      <div class="row" style="text-align: center;">
        <div class="" style="padding-right: 2rem;">
          <img src="" height="100px" />
          <div class="img-lable font_Bold">Professor <br/> Boss</div>
          <div class="item-text color_text">Professor Li is a leading expert in machine learning, federated/decentralized learning, information theory, security/privacy</div>
        </div>
        <!-- <div class="col-lg-6 bottom_cto" style="padding-left: 2rem;">
          <img src="/assets/cto.png" height="100px" />
          <div class="img-lable font_Bold" sty>Chaoyang He <br/> Co-founder and CTO </div>
          <div class="item-text color_text">
            
            Chaoyang He has dual vision in business and tech, product and research. He has rich experience in machine learning, distributed systems, blockchain, and edge/cloud computing. For these topics, he has published papers at ICML, NeurIPS, CVPR, ICLR, AAAI, MLSys, and VLDB, among others.
            Previously, he worked closely with researchers/engineers at Google, Facebook, and Amazon. He was an R&D Team Manager and Principal Software Engineer at Tencent (2014-2018), a Team Leader and Senior Software Engineer at Baidu (2012-2014), and a Software Engineer at Huawei (2011-2012). 
            He received his Ph.D. in Computer Science from the University of Southern California. Homepage: https://ChaoyangHe.com</div>
        </div> -->
      </div>
    </div>
  </section>
  <section style="padding: 60px 0px 0px 0px">
    <div class="container">
      <div class="row">
        <div class="col-lg-4" v-for="(item,index) in psersonList" :key="index">
            <div class="person-list">
              <img :src="item.url" width="200px" height="200px" />
              <div style="height: 200px">
                <div class="person-list-text font_Bold" style="margin-bottom: 20px">{{item.text}}</div>
                <div class="person-list-lable color_text">{{item.lable}} </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
export default {
    name: 'aboutus',
    components: {},
    data() {
      return {
        psersonList: [
          {
            text: 'Mike ',
            lable: 'Backend Architect ',
            // url: new URL("/assets/01.png", import.meta.url).toString(),
          },
          {
            text: 'Ryan',
            lable: 'Software Engineer ',
            // url: new URL("/assets/02.png", import.meta.url).toString(),
          },
          {
            text: 'Sam',
            lable: 'Product Manager ',
            // url: new URL("/assets/03.png", import.meta.url).toString(),
          },
          {
            text: 'Li ',
            lable: 'Operation&Project Manager ',
            // url: new URL("/assets/04.png", import.meta.url).toString(),
          },
          {
            text: 'Shark  ',
            lable: 'Software Engineer ',
            // url: new URL("/assets/05.png", import.meta.url).toString(),
          },
          {
            text: 'Theta ',
            lable: 'Researcher, PhD student ',
            // url: new URL("/assets/06.png", import.meta.url).toString(),
          },
        ]
      }
    },
    created() {},
    mounted() {},
    methods: {}
}
</script>
<style lang="less" scoped>
.sectionBg{
  background: url("/assets/images/second_banner.png") center no-repeat;
  background-size: cover;
      height: 400px;
}
.texts-light{
  text-align: left;
  font-size: 50px;
  font-weight: 600;
  color: black;
  margin: 50px 0px;
}
.title{
  text-align: center;
  padding: 80px 0px 50px 0px;
  font-size: 32px;
  font-weight: bold;
  color: #000000;
}
.p-text{
  font-size: 18px;
  font-weight: 400;
  // color: #929292;
}
.center-bg{
  margin-top: 60px;
  padding: 50px 0px 550px 0px;
  background: url("/assets/history.png") center no-repeat;
  background-size: cover;
}
.center-title{
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #FFFFFF;
}
.team-title{
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #000000; 
  padding: 60px 0px 50px 0px;
}
.img-lable{
  font-size: 24px;
  font-weight: 400;
  color: #333333;
}
.item-text{
  font-size: 20px;
  font-weight: 400;
  // color: #929292;
  line-height: 26px;
  // text-align: left;
  text-align: justify;
}
.person-list{
  display: flex;
  align-items: center;
  padding-bottom: 60px;
}
.person-list-text{
  margin-left: 10px;
  font-size: 24px;
  font-weight: 400;
  color: #333333;
  line-height: 30px;
}
.person-list-lable{
  margin-left: 10px;
  font-size: 18px;
  font-weight: 400;
  // color: #929292;
  line-height: 30px;
}
@media screen and (max-width: 768px) {
  .img-lable{
    padding: 1rem 0;
  }

  .bottom_cto{
    margin-top: 1rem;
  }
}  
</style>
