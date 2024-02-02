<template>
  <div>
    <section
      class="section sectionBg font_Bold"
      style="padding-bottom: 26px; position: relative; display: flex"
    >
      <div class="container">
        <div class="row txt-box" style="margin: 13% 0; z-index: 9">
          <div
            class="mb-12 col-lg-12 text_Box"
            style="width: 70%; margin-bottom: 1.25rem; text-align: left"
          >
            <h1 class="text-light big_text" style="font-size: 3em">
              Professor Ang Li's AI Research Lab
            </h1>
            <p class="text-light" style="font-size: 22px; font-weight: 400; width: 90%">
              Aim to develop and research the edge AI technology
            </p>
          </div>
        </div>
      </div>
      <div class="left_img">
        <div></div>
      </div>
      <div class="right_img">
        <img src="/assets/images/lab_logo.jpg" alt="" />
      </div>
      <div class="bottom_img">
        <div></div>
      </div>
    </section>
    <section class="section bg-img" style="padding: 0px">
      <div class="container" style="transform: scale(0.9)">
        <div class="anchor_text font_Bold" style="color: #ffffff; margin: -4rem 0">
        </div>
      </div>
    </section>
    <Press/>
  </div>
</template>

<script>
const goldline = "/assets/images/goldline.png";
const aven = "/assets/images/aven.png";
const kanba = "/assets/images/kanba.png";
const kyan = "/assets/images/kyan.png";
const spotify = "/assets/images/spotify.png";
const Surface = "/assets/images/Surface.png";
const dashboard = "/assets/images/Dashboard.png";
import Press from "../components/Press.vue";

export default {
  name: "Home",
  components: {
    anchor: () => import("./anchor"),
    Press
  },
  data() {
    return {
      slide: 0,
      framework: "",
      navgator: [
        "Community-drven AI",
        "This is the description content, andthe ubsequent  ",
        "Status Alerts",
        "Title Customization",
      ],
      navgatorIndex: 0,
      sliding: null,
      goldline,
      aven,
      kanba,
      imgList: [],
      kyan,
      spotify,
      Surface,
      dashboard,
      height: "100%",
      platforms: [
        {
          img: "/assets/images/Platforms_three.jpg",
          title: "GPU Marketplace for AI Development",
          lable:
            "Tap into a massive GPU marketplace (multi-cloud and multi-provider), offering high availability and low cost, to effortlessly launch your ML jobs. Share and monetize your idle GPUs.",
          liText: [
            "A Large number of GPUs from top providers",
            "High availability and performance",
            "Effortlessly launch your ML jobs on  the most cost-effective GPU resources",
            "Share and monetize idle GPUs",
          ],
        },
        {
          img: "/assets/images/Platforms_two.jpg",
          title: "Unified ML Job Scheduler and GPU Manager",
          lable:
            "Effortlessly launch compute-intensive AI jobs on the most cost-effective GPUs or on-prem,  without the hassle of resource provisioning, environment setup, and cluster management. ",
          liText: [
            "Quick-start with fedml launch your_job.yaml",
            "Economical GPU auto-provisioning at scale",
            "Eliminating complex environment setup and cluster management",
            "Launch on GPU marketplace, on your private/hybrid cloud, or on-prem",
          ],
        },
        {
          img: "/assets/images/Platforms_one.jpg",
          title: "Zero code LLM Studio",
          lable:
            "Embrace the power of Generative AI, and effortlessly build and deploy your private, bespoke, and vertically tailored LLMs.",
          liText: [
            "Access popular open-source LLMs",
            "Zero code fine-tuning and model serving",
            "Affordable GPU access for building scalable products and services",
            "Chatbot for testing the endpoint",
          ],
        },
        {
          img: "/assets/images/Platforms_four.jpg",
          title: "Optimized MLOps & Compute Libraries for Diverse AI Jobs",
          lable:
            "Access powerful MLOps platforms for distributed model training, scalable model serving, and federated learning.  Accelerate your development with pre-packaged compute libraries for diverse AI jobs, from training to serving to federated training.",
          liText: [
            "Robust distributed model training",
            "Scalable model serving",
            "Federated learning across data silos, smartphones, and web browsers",
            "Resource optimization & observability",
            "Job store with pre-packaged libraries",
          ],
        },
      ],
      lightIndex: 0,
    };
  },
  created() {
  },
  mounted() {},
  methods: {
    goToDetail(link) {
      if (this.$isCopy()) {
        return;
      }
      if (link.includes("http")) {
        window.open(link);
      } else if (link) {
        this.$router.push({ path: link });
      }
    },
    handleLeft(index) {
      this.navgatorIndex = index;
    },
    openPage(url) {
      window.open(url);
    },
    goToPage(url) {
      this.$router.push({ path: url });
    },
    jumpToPage(url) {
      if (url == "toBlogLLM") {
        window.open(
          "https://blog.fedml.ai/releasing-fedllm-build-your-own-large-language-models-on-proprietary-data-using-the-fedml-platform/"
        );
      } else if (url == "toLLMgit") {
        window.open("https://github.com/FedML-Inc/FedML/tree/master/python/app/fedllm");
      }
    },
    mouseOver(index) {
      console.log("移入" + index);
      this.lightIndex = index;
    },
    mouseLeave(index) {
      console.log("移出" + index);
      this.lightIndex = index;
    },
    changeHeight() {
      this.height = `${this.$refs.dashboardImg.offsetHeight + 80}px`;
    },
    onSlideStart(slide) {
      console.log(slide);
      this.sliding = true;
    },
    onSlideEnd(slide) {
      console.log(slide);
      this.sliding = false;
    },
    // navtiveTo() {
    //   if(this.currentKey != '02.Blog') {
    //     this.$router.push({ path: this.currentPath });
    //   } else {
    //     window.open('https://medium.com/@FedML');
    //   }
    // },
    change() {
      console.log(111);
    },
  },
};
</script>

<style lang="less" scoped>
.navgator .navgatorLi {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  flex-wrap: nowrap;
  color: #fff;
  text-decoration: none;
  flex-direction: column;
  font-size: 1.5rem;
  margin: 1rem 0;
}
.text_no {
  color: #fff;
  // opacity: 0.3;
  font-size: 1.5rem;
}
.text_no_index {
  opacity: 0.3;
  font-size: 1.7rem;
  float: left;
}
.text_no_right {
  margin-left: 4rem;
}
.big_text {
  font-size: 2rem;
}
.nav_info_li {
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  margin: 1rem 0;
  // margin-left: 4.1rem;
}
.nav_info {
  color: #fff;
  // opacity: 1;
  // padding-left: 13px;
  font-size: 2rem;
}
.isActive {
  height: 100%;
  background: linear-gradient(to right top, #357ddd 41%, #c69bfd 100%);
  padding: 2rem 1rem;
}
.sectionBg {
  background: #2c2f3d;
  height: 760px;
  padding: 0 !important;
  position: relative;
  z-index: 0;
}
.anchor_text {
  color: #fff;
  text-align: center;
  line-height: 6rem;
  font-weight: bold;
}

.sectionBg2 {
  // background: url("/assets/images/fourBg.png") center no-repeat;
  background-size: cover;
  background-color: #131e3d;
}
.sectionBg2 /deep/ .anchor_text {
  text-align: center;
  font-weight: bold;
  padding: 4rem 0;
}

.text-ul > ul {
  font-size: 1.2rem;
  font-weight: 400;
  color: #929292;
  line-height: 23px;
  // padding: 0.8rem 2rem  1.5rem 2rem;
  padding: 0;
  padding-left: 0.5rem;
  li {
    padding: 0.5rem 0;
  }
}

.logo-list-box {
  background-color: #fff;
  border-radius: 14px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0;
  overflow: hidden;
  height: 8rem;
}
.logo-list-box-scroll {
  height: 100%;
  display: -webkit-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  animation: 20s linear 0s infinite normal none running wordsLoop;
}

@keyframes wordsLoop {
  0% {
    transform: translateX(0px);
    -webkit-transform: translateX(0px);
  }
  100% {
    transform: translateY(-200%);
    -webkit-transform: translateX(-200%);
  }
}

.logo-list-box-scroll:hover {
  animation-play-state: paused;
}
.scroll-img {
  margin: 0 20px;
  width: 15%;
  object-fit: contain;
}
.container /deep/ .nav-tabs {
  border-bottom: 0px;
}
.container /deep/ .col-auto {
  font-family: "JostBold" !important;
}
.container /deep/.nav-item {
  position: relative;
  .nav-link {
    color: #fff;
    font-size: 1.8rem;
    border-radius: 0;
    width: 100%;
    padding-left: 1rem;
  }
}

.container /deep/ .nav-tabs .nav-link.active,
.container /deep/ .nav-tabs .nav-link.active:hover {
  color: #fff;
}
.container /deep/ .nav-tabs .nav-link.active {
  background: #c278ff;
  width: 100%;
  padding: 1.5rem 0rem 1.5rem 1rem;
  width: 18rem;
}
.container /deep/ .nav-tabs .nav-link {
  border: 0;
  position: relative;
  font-weight: bold;
}
.container /deep/ .nav-tabs .nav-link:hover {
  border: 0;
  color: #c278ff;
}
.bottom_img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 68%;
  left: 0;
  z-index: -1;
  background-image: radial-gradient(ellipse, #c278ff96, transparent 68%);
  background-image: -webkit-radial-gradient(ellipse, #c278ff96, transparent 68%);
}

.left_img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -37%;
  left: -58%;
  z-index: -1;
  background-image: radial-gradient(circle, #1682fd8a, transparent 40%);
  background-image: -webkit-radial-gradient(circle, #1682fd8a, transparent 40%);
}
.left_img img {
  transform: scale(0.9);
  position: absolute;
  left: -10%;
  top: -10%;
}
.right_img {
  width: 40%;
  height: 100%;
  position: absolute;
  bottom: 160;
  right: 64px;
  z-index: -1;
}
.llm_adv {
  position: absolute;
  background: url("/assets/images/LLM_Background.png") center no-repeat;
  background-size: cover;
  z-index: 999;
  margin-left: 47%;
  height: 220px;
  width: 530px;
  top: 540px;
  .llm_adv_header {
    font-size: 28px;
    color: white;
    margin-left: 40px;
    margin-top: 18px;
  }
  .llm_adv_label {
    width: 80px;
    height: 50px;
    top: 20px;
    left: 284px;
  }
  .llm_adv_text {
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    color: white;
    // text-align: center;
    // margin-left: 80px;
    .llm_adv_text_highlight {
      cursor: pointer;
      color: #1aecff;
    }
  }
  .llm_adv_text::before {
    content: "-";
    margin-right: 8px;
  }
}
.right_img img {
  width: 39.625rem;
  // height: 36rem;
  position: absolute;
  bottom: 120px;
  right: 120px;
}
.line-box {
  width: 9.375rem;
  height: 2px;
  background: #fff;
  margin: 1rem 0;
}
.txt-box {
  z-index: 9;
}
.project-box {
  // width: 22rem;
  height: 34rem;
}
.project-box:hover {
  background: #0366d0;
  color: red !important;
  .text-dark,
  .text-muted {
    color: #fff !important;
  }
  .text-ul ul li {
    color: #fdfdfd !important;
  }
}

.btn-top {
  margin-bottom: 15px;
  margin-top: 10.2rem;
}
.btn-s,
.btn-m {
  padding: 1.2rem 1rem 1.2rem 1.6rem;
  text-align: left;
  height: 76px;
}
.btn-m {
  margin-left: 15px;
}
.bg-img {
  background-color: #1c2034;
  background-image: -webkit-linear-gradient(135deg, #1c2034 48%, #2d3148 100%);
  background-image: -moz-linear-gradient(135deg, #1c2034 48%, #2d3148 100%);
  background-image: -o-linear-gradient(135deg, #1c2034 48%, #2d3148 100%);
  background-image: linear-gradient(135deg, #1c2034 48%, #2d3148 100%);
  margin-top: 60px;
}
.bg-anchor {
  background-color: #2c2f3d;
  background-image: -webkit-linear-gradient(135deg, #2c2f3d 48%, #4f505f 100%);
  background-image: -moz-linear-gradient(135deg, #2c2f3d 48%, #4f505f 100%);
  background-image: -o-linear-gradient(135deg, #2c2f3d 48%, #4f505f 100%);
  background-image: linear-gradient(135deg, #2c2f3d 48%, #4f505f 100%);
}
.p-3 {
  padding: 1rem 0 0 2.2rem !important;
}
@media (min-width: 769px) and (max-width: 1264px) {
  .btn-top {
    margin-bottom: 0;
    margin-top: 0rem;
  }
  .btn-s,
  .btn-m {
    font-size: 0.8rem !important;
    width: 13rem;
    margin-bottom: 0.6rem;
    margin-top: 0 !important;
    padding: 12px 16px;
  }
}
@media (min-width: 400px) and (max-width: 768px) {
  .anchor_text {
    font-size: 23px;
  }
  .btn-top {
    margin-bottom: 0;
    margin-top: 0rem;
  }
  .top_text {
    font-size: 1.5rem !important;
  }
  .big_text {
    font-size: 2.2rem !important;
  }
  .btn-top {
    margin-bottom: 0;
    margin-top: 0rem;
  }
  .btn-s,
  .btn-m {
    font-size: 0.8rem !important;
    width: 13rem;
    margin-left: 0 !important;
    margin-bottom: 0.6rem;
    margin-top: 0 !important;
    padding: 12px 16px;
  }
  .txt-box {
    margin-top: 9rem !important;
  }
  .right_img {
    width: 50%;
    img {
      width: 16rem;
      bottom: 0;
      // right: 0;
    }
  }
}
@media screen and (max-width: 820px) {
  .text_Box {
    width: 100% !important;
  }
  .buttom-dom {
    display: flex;
    justify-content: space-evenly;
  }
  .llm_adv {
    margin-left: 0;
    // width: 100%;
    height: 160px;
    bottom: -100px;
    top: auto;
    left: 6%;
    width: 88%;
    margin-bottom: 20px;
    transform: translateX(-50%);
    transform: translateY(-50%);
    .llm_adv_header {
      font-size: 16px;
      margin-left: 40px;
    }
    .llm_adv_text {
      font-size: 16px;
      // margin-left: 8px;
    }
    .llm_adv_label {
      width: 46px;
      height: 34px;
    }
    // left: 50%;
  }

  .sectionBg {
    background: #2c2f3d;
    height: 890px;
    padding: 0 !important;
    position: relative;
    z-index: 0;
  }
}
@media screen and (max-width: 399px) {
  .top_text {
    font-size: 1.8rem !important;
  }
  .big_text {
    font-size: 2.6rem !important;
  }
  .btn-top {
    margin-bottom: 0;
    margin-top: 0rem;
  }
  .btn-s,
  .btn-m {
    font-size: 0.8rem !important;
    width: 13rem;
    margin-left: 0 !important;
    margin-bottom: 0.6rem;
    margin-top: 0 !important;
    padding: 12px 16px;
  }

  .logo-list-box-scroll {
    .scroll-img {
      display: none;
    }
    .scroll-img:first-of-type {
      display: inline-block;
    }
  }
  .left_img {
    img {
      width: 23rem;
    }
  }
  .right_img {
    // width: 100%;
    img {
      width: 16rem;
      bottom: 0;
      right: -40%;
    }
  }
  .txt-box {
    margin-top: 5rem !important;
    .mb-12 {
      width: 100% !important;
    }
    .text-light {
      width: 100% !important;
    }
  }

  .container /deep/ .nav-tabs .nav-item:last-of-type a {
    margin-top: -2rem;
    padding-bottom: 1rem;
  }
}
</style>
