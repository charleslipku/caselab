<template>
    <div style="background: #f5f5f5">
      <section class="section sectionBg" style="padding-bottom: 26px">
        <div class="container">
          <div class="row justify-content-center" style="margin: 50px 0px">
            <div class="mb-5 col-lg-6" style="width: 50%; margin-bottom: 20px">
              <h1 class="text-light font_Bold">Press</h1>
            </div>
            <div class="col-lg-6"></div>
          </div>
        </div>
      </section>
      <section
        class="section top-box"
        style="padding-top: 2rem; margin-bottom: -80px"
      >
        <div class="container">
          <div style="position: relative; display: flex">
            <div class="row">
              <div
                v-for="(item, index) of imgList"
                :key="index"
                style="display: flex;cursor: pointer;"
              >
                <div class="container-text-left">
                  <div class="img-box">
                    <img :src="item.pictureUrl" alt="" />
                  </div>
                </div>
                <div class="container-text-top">
                  <div class="container-test-time" style="font-family: system-ui">{{ item.releaseTime }}</div>
                  <div class="container-text-center">
                    <h2>{{ item.title }}</h2>
                    <div class="color_text">
                      {{ item.description }}
                    </div>
                  </div>
                  <div class="icon-box">
                    <img
                      :src="item.logo"
                      alt=""
                      style="width: 6rem;"
                    />
                    <img
                      style="margin-left: auto; margin-right: 0px;;"
                      src="/assets/icon_right.png"
                      alt=""
                    />
                  </div>
                </div>
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
  import dayjs from 'dayjs';
  
  export default {
    data() {
      return {
        imgList: [
          {
            pictureUrl: "https://fedml.s3.us-west-1.amazonaws.com/1692063341205download.jpeg",
            title: "Breaking News for ICLR",
            description: "恭喜子瑶同学，我们组的第一篇工作今天被ICLR 2024接收了🎆！我们为联邦学习设计了一种基于超参数梯度下降的学习率规划算法，最高将收敛速率提升一倍，并且免去了反复调整学习率的麻烦。感谢建宇兄(Apple)的合作和支持。今后我们将更多投入大模型分布式训练相关的研究。希望这篇工作能为我们组的科研开个好头，今后有更多更好的产出😃文章标题：FedHyper: A Universal and Robust Learning Rate Scheduler for Federated Learning with Hypergradient Descent链接：https://openreview.net/forum?id=Kl9CqKf7h6希望大家多多支持，提出宝贵的意见🙏 我们会尽快开源项目代码",
            releaseTime: "2023-07-19 00:00:00",
            logo: "https://fedml.s3.us-west-1.amazonaws.com/1689791609961TechCrunch-logo.png",
          }
        ],
        slide:0,
        page: {
          pageSize: 10,
          pageNum: 1,
        },
        total: 0,
        totalPage: 0,
        dayjs,
      };
    },
    mounted() {},
    methods: {
      onShowPage() {
        console.log('e', this.page.pageNum);
      },
      morePage() {
        this.page.pageNum += 1;
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
  .container-text-left{
    margin-right: 1rem;
  }
  .container-text-top {
    position: relative;
    width: 100%;
    margin-bottom: 3rem;
    .container-text-center {
      min-height: 10.5rem;
      h2 {
          font-size: 20px;
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
          -webkit-line-clamp: 4;			
          line-clamp: 4;					
          -webkit-box-orient: vertical;
        }
    }
  }
  .icon-box {
    display: flex;
    justify-content:flex;
    height: 30px;
    width: 100%;
    .icon_url {
      width: 144px;
      height: 40px;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .img-box {
    width: 227px;
    height: 223px;
    border-radius: 14px;
    img {
      height: 100%;
      width: 100%;
      border-radius: 14px;
    }
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
  .pic_txt {
    position: absolute;
    top: -14rem;
    left: -5rem;
    text-align: left;
  }
  .pics_box /deep/.carousel-item img {
    border-radius: 14px;
    width: 1220px;
    height: 403px;
  }
  .position-relative {
    padding: 0 !important;
  }
  .more_box {
    border: 1px solid #ccc;
    text-align: center;
    margin: 1rem 0;
    color: #999;
    max-height: 2rem;
    width: 81rem;
    margin-left: 1rem;
    .loading_box{
      position: absolute;
      top: -1.5rem;
      left: 48%;
  
    }
  }
  .img_box {
    border-radius: 14px;
    margin-top: 2rem;
    position: relative;
  
    img {
      border-radius: 14px;
      height: 100%;
      width: 100%;
    }
    .img_icon {
      width: 5rem;
      img {
        border-radius: 0;
      }
    }
    .pic_txt {
      position: absolute;
      top: -2rem ;
      left: 6%;
      text-align: left;
      color: #333;
      width: 40rem;
      h2 {
        margin-bottom: 1rem;
        font-size: 2.5rem;
      }
    }
  }
  .text-light{
    color:  black !important;
  }
  @media screen and (max-width: 768px) {
    .img-box {
      margin-bottom: 1rem;
    }
    .container-text-top {
      margin-left: 0 !important;
    }
    .img_box {
      height: 10rem;
      .pic_txt {
        width: 23rem;
        top: -7rem !important;
        left: -3.5rem;
        h4 {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 1.5rem;
          margin-bottom: 0.2rem;
        }
        h3 {
          font-size: 0.8rem;
        }
        .img_icon {
          width: 3rem;
        }
      }
    }
    .more_box {
      width: 22rem;
  cursor: pointer;

    }
  }
  </style>
  