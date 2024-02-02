<template>
  <div style="background: #f5f5f5">
    <section class="section sectionBg" style="padding-bottom: 26px">
      <div class="container">
        <div class="row" style="margin: 50px 0px">
          <div class="mb-5 col-lg-6" style="width: 50%; margin-bottom: 20px">
            <h1 class="text-light font_Bold">Research Papers</h1>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section top-box"
      style="padding-top: 2rem; margin-bottom: -80px"
    >
      <div class="container">
        <div class="row small_change">
          <b-row>
            <b-col class="col-lg-8 col-md-8">
              <b-form-select
                v-model="selected"
                :options="options"
                class="changeBox"
              ></b-form-select>
            </b-col>
            <b-col class="col-lg-4 col-md-4">
              <b-button
                variant="primary"
                class="search_box"
                @click="handleLeft(selected)"
                >Search</b-button
              >
            </b-col>
          </b-row>
        </div>

        <div style="position: relative; display: flex">
          <div class="leftBox">
            <div id="navgator" class="navgatorDiv">
              <ul class="navgator">
                <li
                  class="navgatorLi"
                  v-for="(item, index) in navgator"
                  :key="index"
                  :class="{ isActive: index === navgatorIndex }"
                  @click="handleLeft(index)"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div
              v-for="(item, index) of imgList"
              :key="index"
              style="display: flex;cursor: pointer;"
              @click="goToDetail(item.link)"
            >
              <b-row>
                <b-col md="3">
                  <div class="container-text-left">
                    <div class="img-box">
                      <img :src="item.pictureUrl" alt="" />
                    </div>
                  </div>
                </b-col>
                <b-col md="9">
                  <div class="container-text-top">
                    <div class="container-text-center">
                      <h2>{{ item.title }}</h2>
                      <p>{{ item.conferenceYear }}</p>
                      <div class="color_text">
                        {{ item.description }}
                      </div>
                    </div>
                    <div class="icon-box">
                      <img
                        src="/assets/icon_right.png"
                        alt=""
                      />
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
            <div style="display: flex">
              <b-pagination
                style="margin-left: auto"
                v-model="page.pageNum"
                :total-rows="total"
                :per-page="page.pageSize"
                aria-controls="my-table"
                @input = "onShowPage()"
              ></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selected: 0,
      options: [
        {
          value: 0,
          text: "All Publications",
        },
        {
          value: 1,
          text: "Vision paper for High Scientific Impacts",
        },
        {
          value: 2,
          text: "System for Machine Learning",
        },
        {
          value: 3,
          text: "Machine Learning Algorithms",
        },
        {
          value: 4,
          text: "Security/privacy for Machine Learning",
        },
        {
          value: 5,
          text: "AI Applications",
        },
        {
          value: 6,
          text: "Blockchain",
        }
      ],
      slide: 0,
      imgList: [
        {
          pictureUrl: "https://fedml.s3.us-west-1.amazonaws.com/1677336644298%E6%88%AA%E5%B1%8F2023-02-25%20%E4%B8%8B%E5%8D%8810.30.55.png",
          title : "PipeTransformer: Automated Elastic Pipelining for Distributed Training of Transformers",
          conferenceYear: "ICML '2021",
          description: "In this paper, we propose PipeTransformer, which leverages automated elastic pipelining for efficient distributed training of Transformer models."
        },
        {
          pictureUrl: "https://fedml.s3.us-west-1.amazonaws.com/1677336644298%E6%88%AA%E5%B1%8F2023-02-25%20%E4%B8%8B%E5%8D%8810.30.55.png",
          title : "Layer-wise Adaptive Model Aggregation for Scalable Federated Learning",
          conferenceYear: "Arxiv’2022",
          description: "We propose FedLAMA, a layer-wise model aggregation scheme for scalable Federated Learning."
        }
      ],
      imgListThree: [
        {
          title : "PipeTransformer: Automated Elastic Pipelining for Distributed Training of Transformers",
          conferenceYear: "ICML '2021",
          description: "In this paper, we propose PipeTransformer, which leverages automated elastic pipelining for efficient distributed training of Transformer models."
        }
      ],
      navgator: [
        "All Publications",
        "Vision paper for High Scientific Impact",
        "System for Machine Learning",
        "Machine Learning Algorithms",
        "Security/privacy for Machine Learning",
        "AI Applications",
        "Blockchain",
      ],
      navgatorIndex: 0,
      page: {
        pageSize: 10,
        pageNum: 1,
      },
      pageThree: {
        pageSize: 3,
        pageNum: 1,
      },
      total: 0,
      totalPage: 0,
      currentPage: 1,
      perPage: 10,
    };
  },
  created() {
  },
  mounted() {
    // this.initSwiper();
  },
  methods: {
    async initSwiper() {
      const { swiper } = await import('swiper')
      import('swiper/swiper-bundle.css')

      new swiper(".swiper-container", {
        //设置轮播的循环方式
        loop: true,

        //设置自动播放间隔时间
        autoplay: 5000,

        // 轮播效果,默认为平滑轮播
        effect: "slide",

        //分页器
        pagination: ".swiper-pagination",

        //前进后退按钮
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",

        // 用户中断轮播后续播
        autoplayDisableOnInteraction: false,
      });
    },
    goToResearchPaperPage(item) {
      window.open(item.link)
    },
    linkTo(item) {
      window.open(item);
    },
    handleLeft(index) {
      this.navgatorIndex = index;
    },
    onShowPage() {
      console.log('e', this.page.pageNum);
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
.swiper-container {
  border-radius: 14px;
  width: 100%;
  height: 18.75rem;
  margin-top: 40px;
  padding-top: 30px;
  background: url("/assets/images/publication_banner02.jpg") center no-repeat;
}

.swiper-slide img {
  object-fit: cover;
}
.anchor_text {
  width: 60%;
  font-size: 32px;
  font-weight: bold;
  margin: 0 auto;
  padding: 3rem 0;
  padding-left: 5rem;
}
h1 {
  font-size: 50px;
  font-weight: 600;
}
.sectionBg {
  background: url("/assets/images/second_banner.png") center no-repeat;
  background-size: cover;
  height: 400px;
}

.section {
  padding-bottom: 0;
}
.row {
  width: 100%;
  position: relative;
  .container-text-top {
    position: relative;
    margin-left: 1rem;
    margin-bottom: 3rem;
    .container-text-center {
      min-height: 10rem;
      h2 {
        font-size: 1.25rem;
        color: #000000;
      }
      h2:hover{
        text-decoration:underline
      }
      .color_text {
        font-size: 1rem;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
    .icon-box {
      display: flex;
      justify-content: flex-end;
    }
  }
}

.pics_box /deep/.carousel-item img {
  border-radius: 14px;
  width: 1220px;
  height: 403px;
}
.leftBox {
  width: 350px;
  display: block;
  top: 0;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  position: sticky;
  margin-right: 1rem;
  ul {
    padding-left: 0;
  }

  .navgatorLi {
    display: block;
    line-height: 48px;
    position: relative;
    padding-left: 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
  .navgatorLi:first-of-type {
    border-radius: 14px 14px 0 0;
  }
  .navgatorLi:last-of-type {
    border-radius: 0 0 14px 14px;
  }
}
.navgatorDiv {
  background: #fff;
  border-radius: 14px;
  .isActive {
    color: #fff;
    background: #0466d1;
  }
  .navgatorLi:hover {
    color: #0366d0;
  }
  .isActive:hover {
    color: #fff;
  }
}
.position-relative {
  padding: 0 !important;
}
.swiper-img-box {
  max-width: 227px;
  border-radius: 14px;
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 14px;
  }
}
.container-text-left{
  .img-box {
    width: 227px;
  border-radius: 14px;
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 14px;
  }
  // .img_icon {
  //   width: 5rem;
  //   img {
  //     border-radius: 0;
  //   }
  // }
}
}

.more_box {
  border: 1px solid #ccc;
  text-align: center;
  margin: 1rem 0;
  color: #999;
  max-height: 2rem;
  width: 56rem;
  margin-left: 1rem;
  position: relative;
  cursor: pointer;
  .loading_box {
    position: absolute;
    top: -2.5rem;
    left: 48%;
  }
}

.small_change {
  display: none;
}
.text-light{
  color: black !important;
}
@media (min-width:1200px) and (max-width: 1400px) {
  .leftBox {
    display: none;
  }
  .img-box {
    margin-bottom: 1rem;
  }
  .container-text-top {
    margin-left: 0 !important;
  }
  .more_box {
    width: 22rem;
  }
  .small_change {
    display: block;
    .changeBox {
      margin-bottom: 2rem;
      width: 100%;
      height: 2rem;
      border: 1px solid #929292;
    }
    
    .search_box {
      margin-top: -2%;
    }
  }

}
@media (min-width:992px) and (max-width: 1199px) {
  .leftBox {
    display: none;
  }
  .img-box {
    margin-bottom: 1rem;
  }
  .container-text-top {
    margin-left: 0 !important;
  }
  .more_box {
    width: 22rem;
  }
  .small_change {
    display: block;
    .changeBox {
      margin-bottom: 2rem;
      width: 100%;
      height: 2rem;
      border: 1px solid #929292;
    }
    
    .search_box {
      margin-top: -2%;
    }
  }
  .container-text-left{
  .img-box {
    width: 200px;
  border-radius: 14px;
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 14px;
  }
}
}
}
@media (min-width:769px) and (max-width: 991px) {
  .leftBox {
    display: none;
  }
  .img-box {
    margin-bottom: 1rem;
  }
  .container-text-top {
    margin-left: 0 !important;
  }
  .more_box {
    width: 22rem;
  }
  .small_change {
    display: block;
    .changeBox {
      margin-bottom: 2rem;
      width: 100%;
      height: 2rem;
      border: 1px solid #929292;
    }
    
    .search_box {
      margin-top: -2%;
    }
  }
  .container-text-center{
    h2{
      font-size: 1rem !important;
    }
    p {
      margin-bottom: 0rem ;
    }
    // min-height: 3rem;
    min-height: 5rem !important;
    .color_text {
        font-size: 0.5rem !important;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      
  }
  .icon-box{
    img{
      transform: scale(0.8) !important;

    }
      }
  .container-text-left{
  .img-box {
  width: 150px;
  border-radius: 14px;
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 14px;
  }
}
}
}
@media screen and (max-width: 768px) {
  .leftBox {
    display: none;
  }
  .img-box {
    margin-bottom: 1rem;
  }
  .container-text-top {
    margin-left: 0 !important;
  }
  .more_box {
    width: 22rem;
  }
  .small_change {
    display: block;
    .changeBox {
      margin-bottom: 2rem;
      width: 150%;
    }
    .search_box {
      margin-left: 47%;
      margin-top: -2%;
    }
  }
.swiper_text{
  font-size: 1rem;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
}
}
</style>
