<template>
    <div>
        <section class="section sectionBg" style="padding-bottom: 26px">
      <div class="container">
        <div class="row" style="margin: 50px 0px">
          <div class="mb-5 col-lg-6" style="width: 50%; margin-bottom: 20px">
            <h1 class="text-light font_Bold">Projects</h1>
          </div>
        </div>
      </div>
    </section>  
      <ProjectList />
    </div>
  </template>
  
  <script>
  import ProjectList from '../components/ProjectList.vue';
  export default {
    components: {
       ProjectList,
    },
    data() {
      return {
        slide: 0,
        currentBtn: 0,
        navgatorIndex: 0,
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

  .text-light{
    color: black !important;
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
  