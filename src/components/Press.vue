<template>
    <div>
      <section
        class="section bg-lightHi"
        style="padding-bottom: 0; margin-bottom: -100px; background: #2c2f3d"
      >
        <div class="container tab_box">
          <b-tabs content-class="mt-3" justified vertical class="pc_box">
            <b-tab title="PRESS" active @click="findCurrentKey('01.PRESS')">
              <div class="row">
                <div
                  class="col-lg-4"
                  md="4"
                  v-for="(item, index) in pressList"
                  :key="index"
                >
                  <div class="project-box-bottom" @click="goToDetail(item.link)">
                    <div class="position-relative overflow-hidden" style="height: 50%">
                      <img
                        :src="item.pictureUrl"
                        alt=""
                        class="img-fluid d-block mx-auto shadow img_contain"
                        style="
                          border-radius: 14px 14px 0 0;
                          width: 100%;
                          height: 15.625rem;
                        "
                      />
                    </div>
                    <div
                      class="p-3"
                      style="
                        background-clip: border-box;
                        width: 100%;
                        height: 230px;
                        overflow-y: auto;
                      "
                    >
                      <h4
                        class="f-17 mb-1"
                        style="text-align: center; width: 100%"
                      >
                        {{ item.title }}
                      </h4>
                      <div class="text-muted" style="margin: 1rem 0">
                        {{ item.description }}
                      </div>
                      <div class="text-ul">
                        Read article
                        <img
                          src="/assets/images/icon_right_blue.png"
                          alt=""
                          style="transform: scale(0.8)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab title="Blog" @click="findCurrentKey('02.Blog')">
              <div class="row">
                <div
                  class="col-lg-4"
                  md="4"
                  v-for="(item, index) in blogList"
                  :key="index"
                >
                  <div class="project-box-bottom" @click="goToDetail(item.link)">
                    <div class="position-relative overflow-hidden" style="height: 50%;">
                      <img
                        :src="item.pictureUrl"
                        alt=""
                        class="img-fluid d-block mx-auto shadow img_contain"
                        style="
                          border-radius: 14px 14px 0 0;
                          width: 100%;
                          height: 250px;
                        "
                      />
                    </div>
                    <div
                      class="p-3"
                      style="
                        background-clip: border-box;
                        width: 100%;
                        height: 230px;
                        overflow-y: auto;
                      "
                    >
                      <h4
                        class="f-17 mb-1"
                        style="text-align: center; width: 100%"
                      >
                        {{ item.title }}
                      </h4>
                      <div class="text-muted" style="margin: 1rem 0">
                        {{ item.description }}
                      </div>
                      <div class="text-ul">
                        Read article
                        <img
                          src="/assets/images/icon_right_blue.png"
                          alt=""
                          style="transform: scale(0.8)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab
              title="Research Paper"
              class="small_tab"
              @click="findCurrentKey('03.Research Paper')"
            >
              <div class="row">
                <div
                  class="col-lg-4"
                  md="4"
                  v-for="(item, index) in researchPaper"
                  :key="index"
                >
                  <div class="project-box-bottom" @click="goToDetail(item.link)">
                    <div class="position-relative overflow-hidden" style="height: 50%">
                      <img
                        :src="item.pictureUrl"
                        alt=""
                        class="img-fluid d-block mx-auto shadow img_contain"
                        style="
                          border-radius: 14px 14px 0 0;
                          width: 100%;
                          height: 250px;
                        "
                      />
                    </div>
                    <div
                      class="p-3"
                      style="
                        background-clip: border-box;
                        width: 100%;
                        height: 230px;
                        overflow-y: auto;
                      "
                    >
                      <h4 class="f-17 mb-1">
                        {{ item.title }}
                      </h4>
                      <div class="text-muted" style="margin: 1rem 0">
                        {{ item.description }}
                      </div>
                      <div class="text-ul">
                        Read article
                        <img
                          src="/assets/images/icon_right_blue.png"
                          alt=""
                          style="transform: scale(0.8)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
          <b-tabs content-class="mt-3" justified  class="mobile_box">
            <b-tab title="PRESS" active @click="findCurrentKey('01.PRESS')">
              <div class="row">
                <div
                  class="col-lg-4"
                  md="4"
                  v-for="(item, index) in pressList"
                  :key="index"
                >
                  <div class="project-box-bottom" @click="goToDetail(item.link)">
                    <div class="position-relative overflow-hidden" style="height: 50%;">
                      <img
                        :src="item.pictureUrl"
                        alt=""
                        class="img-fluid d-block mx-auto shadow img_contain"
                        style="
                          border-radius: 14px 14px 0 0;
                          width: 100%;
                          height: 15.625rem;
                        "
                      />
                    </div>
                    <div
                      class="p-3"
                      style="
                        background-clip: border-box;
                        width: 100%;
                        height: 230px;
                        overflow-y: auto;
                      "
                    >
                      <h4
                        class="f-17 mb-1"
                        style="text-align: center; width: 100%"
                      >
                        {{ item.title }}
                      </h4>
                      <div class="text-muted" style="margin: 1rem 0">
                        {{ item.description }}
                      </div>
                      <div class="text-ul">
                        Read article
                        <img
                          src="/assets/images/icon_right_blue.png"
                          alt=""
                          style="transform: scale(0.8)"
                        />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab title="Blog" @click="findCurrentKey('02.Blog')">
              <div class="row">
                <div
                  class="col-lg-4"
                  md="4"
                  v-for="(item, index) in blogList"
                  :key="index"
                >
                  <div class="project-box-bottom" @click="goToDetail(item.link)">
                    <div class="position-relative overflow-hidden" style="height: 50%">
                      <img
                        :src="item.pictureUrl"
                        alt=""
                        class="img-fluid d-block mx-auto shadow img_contain"
                        style="
                          border-radius: 14px 14px 0 0;
                          width: 100%;
                          height: 15.625rem;
                        "
                      />
                    </div>
                    <div
                      class="p-3"
                      style="
                        background-clip: border-box;
                        width: 100%;
                        height: 230px;
                        overflow-y: auto;
                      "
                    >
                      <h4
                        class="f-17 mb-1"
                        style="text-align: center; width: 100%"
                      >
                        {{ item.title }}
                      </h4>
                      <div class="text-muted" style="margin: 1rem 0">
                        {{ item.description }}
                      </div>
                      <div class="text-ul">
                        Read article
                        <img
                          src="/assets/images/icon_right_blue.png"
                          alt=""
                          style="transform: scale(0.8)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab
              title="Research Paper"
              class="small_tab"
              @click="findCurrentKey('03.Research Paper')"
            >
              <div class="row">
                <div
                  class="col-lg-4"
                  md="4"
                  v-for="(item, index) in researchPaper"
                  :key="index"
                >
                  <div class="project-box-bottom" @click="goToDetail(item.link)">
                    <div class="position-relative overflow-hidden" style="height: 50%">
                      <img
                        :src="item.pictureUrl"
                        alt=""
                        class="img-fluid d-block mx-auto shadow img_contain"
                        style="
                          border-radius: 14px 14px 0 0;
                          width: 100%;
                          height: 15.625rem;
                        "
                      />
                    </div>
                    <div
                      class="p-3"
                      style="
                        background-clip: border-box;
                        width: 100%;
                        height: 230px;
                        overflow-y: auto;
                      "
                    >
                      <h4 class="f-17 mb-1">
                        {{ item.title }}
                      </h4>
                      <div class="text-muted" style="margin: 1rem 0">
                        {{ item.description }}
                      </div>
                    </div>
                    <div class="text-ul">
                      Read article
                      <img
                        src="/assets/images/icon_right_blue.png"
                        alt=""
                        style="transform: scale(0.8)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Press",
    data() {
      return {
        slide: 0,
        currentKey: "01.PRESS",
        currentPath: "/press",
        navgatorIndex: 0,
        sliding: null,
        imgList: [],
        page: {
          pageSize: 3,
          pageNum: 1,
        },
        blogPage: {
          pageSize: 3,
          pageNum: 1,
        },
        total: 0,
        totalPage: 0,
        height: "100%",
        pageThree: {
          pageSize: 3,
          pageNum: 1,
        },
        lightIndex: 0,
        pressList: [
            {
                pictureUrl: "",
                title: "research for federate learning",
                description: "Vecry successful",
            },
            {
                pictureUrl: "",
                title: "research for llm",
                description: "very famous",
            },
            {
                pictureUrl: "",
                title: "research for system",
                description: "Very Professional",
            }
        ],
        blogList: [
            {
                pictureUrl: "",
                title: "research for federate learning",
                description: "Vecry successful",
            },
            {
                pictureUrl: "",
                title: "research for llm",
                description: "very famous",
            },
            {
                pictureUrl: "",
                title: "research for system",
                description: "Very Professional",
            }
        ],
        researchPaper: [
        {
            pictureUrl: "",
            title: "research for federate learning",
            description: "Vecry successful",
        },
        {
            pictureUrl: "",
            title: "research for llm",
            description: "very famous",
        },
        {
            pictureUrl: "",
            title: "research for system",
            description: "Very Professional",
        }
        ],
      };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      findCurrentKey(e) {
        console.log(e);
        this.currentKey = e;
        if (this.currentKey == "03.Research Paper") {
          this.currentPath = "/researchPapers";
        } else if (this.currentKey == "01.PRESS") {
          this.currentPath = "/press";
        }
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
      navtiveTo() {
        if (this.currentKey != "02.Blog") {
          this.$router.push({ path: this.currentPath });
        } else {
          window.open("https://medium.com/@FedML");
        }
      },
      change() {
        console.log(111);
      },
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
    },
  };
  </script>
  
  <style lang="less" scoped>
  .navgator .navgatorLi {
    /* background-color: #fff; */
    width: 100%;
    // height: 3rem;
    display: flex;
    justify-content: flex-start;
    /* align-items: center; */
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
  }
  
  .nav_info_li {
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    margin: 1rem 0;
    margin-left: 4.1rem;
  }
  .nav_info {
    color: #fff;
    // opacity: 1;
    padding-left: 13px;
    font-size: 2rem;
  }
  .isActive {
    height: 100%;
    background: linear-gradient(to right top, #357ddd 41%, #c69bfd 100%);
    padding: 2rem 1rem;
  }
  .sectionBg {
    background: #2c2f3d;
    height: 720px;
    padding: 0 !important;
    position: relative;
    z-index: 0;
    .bg_box {
      position: absolute;
      top: 0;
      object-fit: cover;
      height: 100%;
      width: 100%;
      z-index: -1;
    }
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
  .sectionBg3 {
    background: url("/assets/images/sBg.jpg") center no-repeat;
    background-size: cover;
  }
  .text-ul > ul {
    font-size: 1.2rem;
    font-weight: 400;
    color: #929292;
    line-height: 23px;
    padding: 0.8rem 2rem 1.5rem 2rem;
    li {
      padding: 0.5rem 0;
    }
  }
  
  .scroll-img {
    margin: 0 20px;
    width: 13%;
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
  .line-box {
    width: 9.375rem;
    height: 2px;
    background: #fff;
    margin: 1rem 0;
  }
  
  .img-active {
    background: #0366d0;
    border-radius: 0 0 14px 14px;
  }
  .img-active .text-dark,
  .img-active .text-muted {
    color: #fff !important;
  }
  .img-active .text-ul ul li {
    color: #fdfdfd !important;
  }
  .project-box {
    width: 20rem;
    height: 25rem;
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
  .project-box-bottom {
    background: #fff;
    border-radius: 14px;
    cursor: pointer;
    margin-bottom: 2rem;
    img{
      // margin: 20px;
      // margin: 0 20px;
      // width: 70%;
    }
  }
  .project-box-bottom .text-ul {
    position: relative;
    color: #0366d0;
    font-weight: bold;
  }
  .hero-5-bg {
    padding: 0 !important;
  }
  
  .read-more {
    color: #fff;
    font-weight: bold;
    width: 12rem;
    height: 3rem;
    line-height: 3rem;
    background: #0366d0;
    text-align: center;
    margin: 0 auto;
    padding-left: 0rem;
    .right-icon{
      margin-left: 1rem;
    }
    
  }
  .btn_box {
    text-align: center;
    .btn-fedml:first-of-type {
      border-radius: 25px 0 0 25px;
    }
    .btn-fedml:nth-of-type(2) {
      border-radius: 0;
    }
  }
  
  .bg-lightHi /deep/.tab-content {
    margin-top: 0 !important;
  }
  .mobile_box{
    display: none;
  }
  .img_contain{
    object-fit: contain;
  }
  .p-3{
    h4{
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;				
            text-overflow: ellipsis;		
            display: -webkit-box;			
            -webkit-line-clamp: 3;			
            line-clamp: 3;					
            -webkit-box-orient: vertical;
    }
    .text-muted{
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;				
            text-overflow: ellipsis;		
            display: -webkit-box;			
            -webkit-line-clamp: 3;			
            line-clamp: 3;					
            -webkit-box-orient: vertical;
    }
  }
  @media screen and (max-width: 992px) {
    .pc_box{
      display: none;
    }
    .mobile_box /deep/.nav-item {
      width: 33.33%;
      margin-bottom: 2rem;
    }
    .container /deep/ .nav-tabs .nav-link.active {
    background: #c278ff;
    width: 100%;
    padding: 0;
    padding-top: 8px;
    height: 100px;
  }
    .mobile_box{
    display: block;
  
  }
  }
  </style>
  