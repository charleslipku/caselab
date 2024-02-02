<template>
    <div>
      <section class="section sectionBg" style="padding-bottom: 26px">
        <div class="container">
          <div class="row justify-content-center" style="margin: 7rem 0">
            <div class="mb-5 col-lg-6 small_text" style="width: 50%">
              <!-- <h1 class="text-light font_Bold">FedML BeeHive</h1> -->
              <h1 class="text-light font_Bold">Platform</h1>
              <!-- <h2>Federated learning Platform for sensitive data across smartphones</h2> -->
              <!-- <h2>For iOS, Android, keep data on device for privacy preserving training</h2> -->
              <!-- <p>Unified ML Job Scheduler and GPU Manger</p> -->
              <ul>
                  <li>Unified ML Job Scheduler and GPU Manger</li>
                  <li>Zero-code LLM studio</li>
                  <li>Optimized MLOps and compute libraries for any AI jobs (Train, Deploy, or Federate)</li>
              </ul>
              <div class="btn-box">
                <b-button
                  variant="outline-secondary"
                  class="btn_top font_Bold"
                  :class="{ actived: index === currentBtn }"
                  v-for="(item, index) in bottoms"
                  :key="index"
                  @click="changeBtn(index, item.url, item.isShowBox)"
                  @mouseover="mouseOver(index)"
                  @mouseleave="mouseLeave(index)"
                  >{{ item.title }}</b-button
                >
              </div>
            </div>
            <div class="mb-7 col-lg-6">
              <div class="scrolling_video">
                <video
                  ref="myVideo"
                  preload="metadata"
                  @play="videoPlay"
                  loop="loop"
                  muted
                  style="display: block; width: 100%; border-radius: 20px"
                  controls
                >
                  <source
                    src="/video/platform_v2.mp4"
                    type="video/mp4"
                  />
                </video>
                <div v-if="videoPauseShow" @click="videoPlay">
                  <img
                    src="/assets/images/play.png"
                    alt=""
                    class="prism-big-play-btn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <section class="section" style="padding: 3rem 0; padding-top: 0px">
        <div class="container">
          <section class="section" style="padding: 3rem 0">
            <div class="anchor_text">Product</div>
          </section>
          <div class="row">
            <div
              class="col-lg-4 col-md-4"
              v-for="(item, index) in characteristic"
              :key="index"
            >
              <ul
                class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
                style="
                  list-style: none;
                  margin: 0;
                  margin-top: 3rem;
                  padding: 0;
                  padding: 0px 2rem;
                "
              >
                <div class="relative mb-6">
                  <img
                    alt="Catalog"
                    :src="item.img"
                    width="592"
                    height="355"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                    style="color: transparent; max-width: 100%; height: auto"
                  />
                </div>
                <h1 class="mb-4 text-2xl text-black font_Bold">
                  {{ item.title }}
                </h1>
                <div
                  class="
                    prose prose-lg
                    prose-p:text-neutral-400
                    prose-a:light:text-link prose-a:dark:text-black
                    max-w-none
                  "
                >
                  <p style="color: #a3a3a3; font-size: 20px">
                    {{ item.info }}
                  </p>
                </div>
                <ul
                  class="mt-4 pt-8 space-y-4 border-t border-neutral-900"
                  style="
                    list-style: none;
                    padding-left: 0px;
                    border-top: 1px solid;
                  "
                >
                  <li v-for="(o, i) in item.itemList" :key="i">
                    <span class="flex space-x-4"
                      ><svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12.3013"
                          r="12"
                          fill="#D1AAD7"
                        ></circle>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.3789 6.8376C17.7601 6.52701 18.3248 6.49878 18.7201 6.82348C19.1718 7.20466 19.2283 7.86819 18.833 8.31995L11.3789 17.2705C11.2518 17.4258 11.1106 17.567 10.9412 17.68C9.96712 18.3294 8.65418 18.0611 8.00477 17.087L5.0683 12.6823C4.74359 12.2023 4.88477 11.5388 5.36477 11.2141C5.73183 10.9741 6.19771 10.9882 6.53653 11.2141L9.6283 13.2611L17.3648 6.82348L17.3789 6.8376Z"
                          fill="black"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 24.3013C18.6274 24.3013 24 18.9287 24 12.3013C24 5.67385 18.6274 0.30127 12 0.30127C5.37258 0.30127 0 5.67385 0 12.3013C0 18.9287 5.37258 24.3013 12 24.3013ZM12 24.3013C5.37882 24.3013 0 18.9224 0 12.3013C0 5.68009 5.37882 0.30127 12 0.30127C18.6212 0.30127 24 5.68009 24 12.3013C24 18.9224 18.6212 24.3013 12 24.3013Z"
                          fill="#E5E5E5"
                        ></path>
                      </svg>
                      <p class="flex-1 text-base leading-relaxed text-black">
                        {{ o }}
                      </p></span
                    >
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <ProductBeeHiveHowItWorks /> -->
      <!-- <Pricing :message=priceData /> -->
  
      <!-- <WhyFedML /> -->
      
      <!-- <div class="children">
        <useCase></useCase>
      </div>
   -->
    </div>
  </template>
  
  <script>
  import useCase from "../components/useCase.vue";
  import ProductBeeHiveHowItWorks from '../components/ProductBeeHiveHowItWorks.vue';
  import WhyFedML from '../components/WhyFedML.vue';
  import Pricing from '../components/Pricing.vue'
  export default {
    components: {
      useCase, ProductBeeHiveHowItWorks, WhyFedML
    },
    data() {
      return {
        slide: 0,
        currentBtn: 0,
        priceData: {
            header: "Train Features",
            content: [
            {
                header: "Scalability & GPU Access",
                item: [
                ["Access to cheapest GPU. No vendor lock-in", {flag: true, content: "Includes 2 nodes per job"}, {flag: true, content: "Unlimited GPUs per job"}, {flag: true, content: "Unlimited GPUs"}],
                ["Serverless billing, precision down to second", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Priority for high-end GPU resources", {flag: false, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Multi-cloud, geo-distributed GPUs", {flag: false, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Dedicated GPU cluster allocation", {flag: false, content: ""}, {flag: false, content: ""}, {flag: true, content: ""}],
                ]
            },
            {
                header: "Queue & Cluster management",
                item: [
                ["Fault Tolerance, Failover, and Auto Recovery", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Custom clusters & queuing", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Elastic training", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ]
            },
            {
                header: "Distributed training frameworks",
                item: [
                ["Support for popular distributed training libraries", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Cross-cloud training capability", {flag: false, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Optimized training over geo-distributed & heterogeneous resources", {flag: false, content: ""}, {flag: false, content: ""}, {flag: true, content: ""}],
                ]
            },
            {
                header: "Train as a service",
                item: [
                ["Zero-code LLM fine-tuning", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Pre-training (United LLM)", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Geo-distributed training on low-end GPUs", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Tracing APIs & dashboard", {flag: false, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ]
            },
            {
                header: "Privacy & On-Prem",
                item: [
                ["Private artifacts storage on on-prem servers", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Train on your own private infrastructure", {flag: false, content: ""}, {flag: true, content: "Includes 8 nodes"}, {flag: true, content: "Unlimited nodes"}],
                ]
            },
            {
                header: "Observability",
                item: [
                ["Training logs & metrics", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Dashboards with table & chart visualizations", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Detailed resource monitoring and management", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ]
            },
            {
                header: "Collaboration",
                item: [
                ["Experiment & project sharing", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Compute sharing with team members", {flag: false, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ]
            },
            {
                header: "Support",
                item: [
                ["Community support (Slack, Discord...)", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ["Dedicated professional support", {flag: true, content: ""}, {flag: true, content: ""}, {flag: true, content: ""}],
                ]
            },
            ]
        },
        characteristic: [
          {
            title: "Open Source Library",
            info: "FedML is a unified and scalable distributed computing framework for machine learning anywhere at any scale. ",
            img: "/assets/images/octopus-open-source.png",
            itemList: [
              "Diverse federated learning optimizers for data and system heterogeneity",
              "Support Any Machine Learning Framework (PyTorch, TensorFlow, etc.)",
              "Various communication backends (MPI, gRPC, PyTorch RPC, MQTT + S3)",
            ],
          },
          {
            title: "Industrial Grade MLOps",
            info: "Easy deployment and model development experience; expertise in distributed computing is not required",
            img: "/assets/images/octopus-mlops.png",
            itemList: [
              "Easy deployment and model development experience; expertise in distributed computing is not required",
              "Simplifying collaboration with cross-device binding and grouping",
              "A full stack of experimental tracking capability for large-scale distributed systems",
            ],
          },
          {
            title: "No Compromise on Privacy and Security",
            info: "Fuel engagement, discoverability, and conversion with clean, rich product data.",
            img: "/assets/images/octopus-privacy.png",
            itemList: [
              "Start-of-the-art secure aggregation algorithms",
              "Privacy/security all in one at FedML Ecosystem: DP (differential privacy), HE (homomorphic encryption), SMPC (Secure Multi-party computing), TEE (Trust Execution Environment)",
              "Defending against malicious collaborators with SOTA algorithms",
            ],
          },
        ],
        navgatorIndex: 0,
        platforms: [
          {
            img: "/assets/images/Image-39.png",
            title: "Industrial-grade Open MLOps Platform",
            lable:
              "This is the content of the subtitle, which needs to be added la",
            liText: [
            "highly simplified user experience from rapid experimentation to real-world deployment",
            "deployable across edge/cloud servers, mobile and IoT devices, and web browsers for state-of-the-art ML models and applications",
          ],
          },
          {
            img: "/assets/images/Image-39.png",
            title: "Innovative Technology",
            lable:
              "This is the content of the subtitle, which needs to be added la",
              liText: [
            "backed by solid research spanning 50+ publications that bring innovation across all layers of the design",
            "invented and founded by leading AI and system experts",
          ],
          },
          {
            img: "/assets/images/Image-39.png",
            title: "Open Source and Community",
            lable:
              "This is the content of the subtitle, which needs to be added la",
              liText: [
            "A vibrant and large open-source community of ML researchers and developers",
            "A community-driven AI development that enables sharing and monetization data, compute, and AI models",
          ],
          },
        ],
        bottoms: [
          {title:"Get Started", url: 'https://nexus.fedml.ai', isShowBox: true}
        ],
        infoList: [
          {
            num: "3",
            title: "Products",
            content: "including open-source, edge AI SDK, and MLOps platform",
          },
          {
            num: "50+",
            title: "Scientific Publications",
            content:
              "in ML/FL algorithms, security/privacy, systems, and applications",
          },
          {
            num: "1800+",
            title: "Open-source Community Users",
            content: "from all over the world",
          },
          {
            num: "10+",
            title: "Industrial Collaborators",
            content: "from top-tier companies",
          },
        ],
        videoPauseShow: true,
      };
    },
    created() {},
    mounted() {},
    methods: {
      handleLeft(index) {
        this.navgatorIndex = index;
      },
      videoPlay() {
        this.videoPauseShow = false;
        this.$refs.myVideo.play();
      },
      changeBtn(index, url, show) {
        this.currentBtn = index;
        if (show) {
          window.open(url)
        }
      },
      mouseOver(index) {
        this.currentBtn = index;
      },
      mouseLeave(index) {
        this.currentBtn = index;
      },
    },
  };
  </script>
  
  <style lang="less" scoped>
  .btn-box {
    .btn_top {
      background: #c772da;
      border: 1px solid #c772da !important ;
      padding-left: 0.8rem;
      border-radius: 0;
    }
    .actived {
      background: #0366d0 !important;
      border: 1px solid #0366d0 !important ;
    }
  }
  
  .anchor_text {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }
  
  .sectionBg {
    background: url("/assets/images/training.jpg") center no-repeat;
    background-size: cover;
    //     background-color: #cfdff6;
    // background-image: -webkit-linear-gradient(146deg, #cfdff6 30%, #E0C3FC 56%);
    // background-image: -moz-linear-gradient(146deg, #cfdff6 30%, #E0C3FC 56%);
    // background-image: -o-linear-gradient(146deg, #cfdff6 30%, #E0C3FC 56%);
    // background-image: linear-gradient(146deg, #cfdff6 30%, #E0C3FC 56%);
  }
  .section_center {
    background: url("/assets/images/534.png") center no-repeat;
    background-size: cover;
  }
  .section {
    padding-bottom: 0;
  }
  
  .container-text-top {
    padding-top: 2rem;
    position: relative;
  }
  .container-text-top h6 {
    color: #929292;
    padding-top: 1.5rem;
    min-height: 8rem;
  }
  .icon-box {
    width: 40px;
    height: 40px;
  }
  .top-box-text {
    position: absolute;
    top: 8rem;
    left: 5rem;
    color: #fff;
  }
  .top-box-text h2 {
    font-size: 40px;
  }
  .top-box-text h4 {
    font-size: 20px;
  }
  .right_title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .content_text {
    text-align: center;
  }
  .right_info_bottom {
    width: 50%;
  }
  .nav-top-box {
    display: flex;
    margin-bottom: 1rem;
  }
  .case-box h1 {
    font-size: 50px;
    font-weight: bolder;
  }
  .case-box h2 {
    font-size: 22px;
  }
  .case-box h3 {
    font-size: 18px;
    font-weight: 300;
  }
  
  .children /deep/ .anchor_text {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    padding: 4rem 0;
  }
  .children /deep/ .text-white_info {
    color: #343a40;
  }
  .children /deep/ .text-white,
  .children /deep/ .zi_circlePlay,
  .children /deep/ .anchor_text {
    color: black !important;
  }
  .container /deep/ .nav-tabs .nav-link.active,
  .container /deep/ .nav-tabs .nav-link.active:hover {
    color: #0366d0;
    border: 0;
    border-bottom: 1px solid #dee2e6;
  }
  .container /deep/ .nav-tabs .nav-link.active::before {
    content: "";
    display: block;
    width: 12%;
    height: 3px;
    background: #0366d0;
    position: absolute;
    bottom: 0;
    left: 44%;
  }
  .container /deep/ .nav-tabs .nav-link {
    border: 0;
    position: relative;
    font-weight: bold;
    font-size: 1.4rem;
  }
  .container /deep/ .nav-tabs .nav-link:hover {
    border: 0;
    color: #0366d0;
  }
  .justify-content-center {
    .text-light {
      font-size: 3rem;
      color: black !important;
      font-weight: bold;
    }
    .mb-5 {
      padding-top: 3rem;
    }
    h2 {
      color: black;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .scrolling_video {
    position: relative;
    .prism-big-play-btn {
      position: absolute;
      top: 35%;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
    }
  }
  .nav-box {
    padding-top: 2rem;
  }
  .btn-box {
    margin-top: 5rem;
    .btn.btn-outline-secondary {
      color: #fff !important;
      font-weight: bold;
      margin-right: 1rem;
      font-size: 15px !important;
      line-height: 15px;
    }
    .btn.btn-outline-secondary:active,
    .btn.btn-outline-secondary:hover,
    .btn.btn-outline-secondary:focus {
      background: #0366d0 !important;
    }
  }
  .scrolling-tab__video {
    padding: 1rem 0;
  }
  .right-box {
    // margin: 10rem 0;
    // margin: 160px 0;
    margin-top: 21%;
  }
  @media screen and (max-width: 768px) {
    .container {
      .justify-content-center {
        margin-top: 0 !important;
      }
      .small_text {
        width: 100% !important;
      }
      .btn-box {
        margin-top: 2rem;
        .btn {
          width: 100%;
          margin-bottom: 1rem;
        }
      }
      .right-box {
        padding-left: 1rem;
      }
    }
  }
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  .relative {
    position: relative;
  }
  .text-2xl {
    font-size: 1.5rem;
    line-height: 1.5;
  }
  
  .mb-4 {
    margin-bottom: 1rem;
  }
  .max-w-none {
    max-width: none;
  }
  .prose-lg {
    font-size: 1.125rem;
    line-height: 1.7777778;
  }
  .pt-8 {
    padding-top: 2rem;
  }
  .border-neutral-900 {
    --tw-border-opacity: 1;
    border-color: #333;
  }
  .border-t {
    border-top-width: 1px;
  }
  .mt-4 {
    margin-top: 1rem;
  }
  .flex {
    display: flex;
  }
  .leading-relaxed {
    line-height: 1.625;
  }
  .text-base {
    font-size: 16px;
    line-height: 1.65;
    margin-left: 10px;
  }
  .flex-1 {
    flex: 1 1;
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
    color: #333;
    text-decoration: none;
    flex-direction: column;
    font-size: 1.5rem;
    // margin: 2rem 0;
    border-radius: 3px;
    padding: 1rem 1rem;
  }
  .text_no {
    color: #fff;
    // opacity: 0.3;
    font-size: 1.5rem;
  }
  .text_no_index {
    opacity: 0.3;
    font-size: 1.7rem;
  }
  .big_text {
    font-size: 2rem;
  }
  .nav_info_li_else {
    font-size: 16px;
    font-weight: 400;
    margin: 1rem 0;
    margin-left: 4.1rem;
    color: #343a40;
    font-family: "Poppins", sans-serif !important;
  }
  .nav_info_li {
    font-size: 16px;
    font-weight: 400;
    color: #343a40;
    margin: 1rem 0;
    margin-left: 4.1rem;
    font-family: "Poppins", sans-serif !important;
  }
  .nav_info_else {
    color: #343a40;
    // opacity: 1;
    padding-left: 13px;
    font-size: 20px;
  }
  .nav_info {
    color: #343a40;
    // opacity: 1;
    padding-left: 13px;
    font-size: 20px;
  }
  .isActive {
    height: 100%;
    background: linear-gradient(to right top, #cfdff6 41%, #f3dcf6 100%);
    // padding: 2rem 1rem;
  }
  .study-box {
    // background: linear-gradient(to right top, #f3dcf6 41%, #cfdff6 100%);
    width: 100%;
    height: 17rem;
    border-radius: 3px;
    display: flex;
    padding: 0 3rem;
  }
  .duration-300 {
    transition-duration: 0.3s;
  }
  .delay-300 {
    transition-delay: 0.3s;
  }
  .transition {
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
      backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }
  .opacity-100 {
    opacity: 1;
  }
  .opacity-0 {
    opacity: 0;
  }
  .z-0 {
    z-index: 0;
  }
  .z-10 {
    z-index: 10;
  }
  
  .text-ul {
    color: #0366d0;
    font-weight: bold;
    cursor:pointer;
  }
  </style>
  