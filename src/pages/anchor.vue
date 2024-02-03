<template>
  <div class="anchor">
    <div class="leftBox font_Bold">
      <div id="navgator" class="navgatorDiv">
        <ul  class="navgator">
          <li class="navgatorLi" :class="{'isActive': index===navgatorIndex}" @click="handleLeft(index)" v-for="(item,index) in howitworks" :key="index">
          <!-- <div class="text_no" v-if="index===navgatorIndex"><i class="zi zi_caretLeft" style="margin-left: 5px;"></i></div> -->
          <span style="padding-left: 15px;">{{index+1}}. {{item.feature}}</span>
          <div class="text_border" v-if="index===navgatorIndex">
          </div>
          </li>
        </ul>
      </div>
    </div>
    <ul class="rightList">
      <li :id="'id'+index" v-for="(item,index) in howitworks" :key="index">
        <div>
          <div class="right_title font_Bold">
            {{index+1}}. {{ item.feature }}

          </div>
          <div class="right_info">
            {{ item.subtitle }}
          </div>
        </div>
        <div class="scrolling-tab__video">
          <video loop="loop" muted preload="metadata" autoplay="autoplay" style="display: block;width: 100%;border-radius: 14px;">
            <source :src="item.video" type="video/mp4">
          </video>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
data() {
  return {
    navgatorIndex: 0,
    listBox: [
      // video: new URL("/video/features_1.mp4",
      // video: new URL("/video/features_2.mp4",
      // video: new URL("/video/features_3.mp4",
      // video: new URL("/video/features_4.mp4",
      // video: new URL("/video/features_5.mp4",
      // video: new URL("/video/features_6.mp4",
      // video: new URL("/video/features_7.mp4",
      // video: new URL("/video/features_8.mp4",
      // video: new URL("/video/features_9.mp4",
    ],
    listBoxState: true,//点击导航栏时，暂时停止监听页面滚动
    howitworks: [
        {
          feature: "Nexus AI Platform",
          // subtitle:
          //   "FedML is a unified and scalable distributed computing framework for machine learning anywhere at any scale",
          video: "/video/platform.mp4",
        },
        {
          feature: "Launch",
          // subtitle:
          //   "State-of-the-art models from the open-source community, compatible with FedML platforms",
          video: "/video/launch.mp4",
        },
        // {
        //   feature: "Studio",
        //   subtitle:
        //     "After 'pip install fedml', you can run FedML on a single machine or a cluster of devices with a simple CLI: 'fedml login $account_id'",
        //   video: "/video/features_3.mp4",
        // },
        {
          feature: "Studio",
          // subtitle:
          //   "It is not easy to build a collaborator network in an geo-distributed environment over the Internet. No worries, FedML MLOps can invite collaborators and create a group across accounts anywhere in the world",
          video: "/video/studio_v2.mp4",
        },
        {
          feature: "Train",
          // subtitle:
          //   "It is not easy to build a collaborator network in an geo-distributed environment over the Internet. No worries, FedML MLOps can invite collaborators and create a group across accounts anywhere in the world",
          video: "/video/train.mp4",
        },
        {
          feature: "Deploy",
          // subtitle:
            // "Run Anywhere: FedML MLOps can ship and synchronize AI applications across devices in the group automatically. You just focus on the AI model development.",
          video: "/video/deploy.mp4",
        },
        {
          feature: "Federate Cross-Silo",
          subtitle:
            "Create a project, select edge devices and aggregation server, and start training your AI model across devices in the group. Hope to have a self-hosted aggregation server? Just run 'fedml login $account_id -s'",
          video: "",
        },
        {
          feature: "Federate Smartphone",
          subtitle:
            "We provide a full-stack of experimental tracking abilities: monitoring device status, real-time training results, distributed system profiling, and distributed logging",
          video: "/video/beehive_index.mp4",
        },
        // {
        //   feature: " Cross-platform Support",
        //   subtitle:
        //     "FedML Edge AI SDK provides support for edge/cloud devices (e.g., Linux, Windows, Mac OS), smartphones (iOS/Android), IoTs (e.g., Raspberry Pi, NVIDIA Jetson), and Web Browsers (e.g., Chrome, Firefox, Safari)",
        //   video: "/video/features_8.mp4",
        // },
        // {
        //   feature: " Serve Anywhere",
        //   subtitle:
        //     "Federated model inference, a new paradigm for model serving, is pioneered by FedML team. It leverages the community CPU/GPU resources to serve large models collaboratively.",
        //   video: "/video/features_9.mp4",
        // },
      ],
    
  };
},
created() {

},
mounted() {
  let timeId;
  window.addEventListener('scroll', () => {
    // 页面滚动停止100毫秒后才会执行下面的函数。
    clearTimeout(timeId);
    // this.scrollToTop();
    timeId = setTimeout(() => {
      this.scrollToTop();
    }, 100);
  } , true);
  // window.addEventListener('scroll', this.suspension);
},
destroyed(){
  // window.removeEventListener("scroll",this.suspension);
},
methods: {
  // 点击导航菜单，页面滚动到指定位置
  handleLeft(index) {
    this.navgatorIndex = index;

    this.$el.querySelector(`#id${index}`).scrollIntoView({
      behavior: "smooth",  // 平滑过渡
      block:    "center"  // 上边框与视窗顶部平齐。默认值
    });
    this.listBoxState=false;

    let timeId;
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      this.listBoxState=true;
    },200);
  },
  // 监听页面元素滚动，改变导航栏选中
  scrollToTop() {
    
    // 获取视窗高度
    // var domHight = document.body.offsetHeight;
    // dom滚动位置
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    
    if (this.listBoxState) {//作用是点击导航栏时，延迟这里执行。
      
      this.howitworks.map((v,i) => {
        // var domm = document.getElementById(`id${i}`)
        // console.log(domm)
        // 获取监听元素距离视窗顶部距离
        var offsetTop = document.getElementById(`id${i}`).offsetTop + document.getElementById(`id${i}`).offsetParent.offsetTop - 500;
        // 获取监听元素本身高度
        var scrollHeight = document.getElementById(`id${i}`).scrollHeight;

        // 如果 dom滚动位置 >= 元素距离视窗距离 && dom滚动位置 <= 元素距离视窗距离+元素本身高度
        // 则表示页面已经滚动到可视区了。
        if (scrollTop >= offsetTop && scrollTop<=(offsetTop+scrollHeight)) {
          // 导航栏背景色选中
          this.navgatorIndex = i;
        }
      })
    }
  },
  suspension(){
    // this.domTop=document.documentElement.scrollTop || document.body.scrollTop;
    // const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    // var scrollHeight = document.getElementById(`navgator`).scrollHeight;
    // if(scrollTop<this.menuTop){
    //   this.supply=""
    //   this.supply="supply-2"
    // } else {
    //   this.supply=""
    //   this.supply="supply-2-top"
    // }
  }
},
}
</script>

<style lang="less" scoped>
.anchor {
  width: 100%;
  display: flex;
  margin-bottom: -2px;
}
.navgator {
  border-radius: 14px 14px 0 0;
  height: 100%;
    /* background: #fff; */
    padding-left: 0;
}
.navgator .navgatorLi:first-child {
  border-radius: 14px 14px 0 0;
}
  .navgator .navgatorLi {
    /* background-color: #fff; */
    width: 100%;
    // height: 3rem;
    display: flex;
    justify-content: flex-start;
    /* align-items: center; */
    cursor: pointer;
    flex-wrap: nowrap;
    /* color: #022638; */
    color: #C0C1C4;
    text-decoration: none;
    flex-direction: column;
    font-size: 20px;
    // margin: 2rem 0;
    margin-bottom: 1.8rem;
  }
  .navgator .isActive {
    /* color: #fff; */
    /* background: #0466D1; */
    background: linear-gradient(to right, #1682FF 0%, #C278FF 50%, #1682FF 100%);
    -webkit-background-clip: text;
    color: transparent;
    background-clip: text;
    /* font-weight: 700; */
    font-size: 23px;
    /* font-size: 2.2rem; */
    height: 5rem;
    span{
      font-size: 1.5rem;
      margin-bottom: 0.4rem;
    }
  }
  .text_no{
    color: #536582;
    font-size: 24px;
    // padding-left: 15px;
    text-align: left;
    padding-right: 40px;
  }
  .text_border{
    // margin-left: 15px;
    width: 80%;
    background: linear-gradient(to right, #1682FF 0%, #C278FF 50%, #1682FF 100%);
    height: 1px;
  }
  .navgator .navgatorLi:hover{
    /* color: #B40F63; */
  }
.leftBox{
  width: 325px;
  display: block;
  height: 100vh;
  top: calc(50vh - 230px);
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  position: sticky;
  // margin-left: 5rem;
  
}
.scrolling-tab__video{
  border-radius: 14px;
}
@media screen and (max-width:768px) {
.leftBox{
  display: none;
}
ul{
  padding-left: 0;
}
}
.navgatorDiv{
  position: sticky;
  top: calc(50vh - 234px);
  height: 100%;
}
.rightList {
  width: 100%;
}
.rightList li {
    width: 100%;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  }
.right_title{
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
}
.right_info{
  color: #fff;
  font-size: 1rem;
  line-height: 20px;
  margin: 20px 0;
}
</style>