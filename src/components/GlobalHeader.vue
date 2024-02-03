<template>
  <nav
    :class="[
      btnFlag
        ? 'navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark align-items-center nav-sticky'
        : 'navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark align-items-center nav-black',
        routerBlack
        ? 'navbar-top-black'
        : 'navbar-top-w'
      ]
      "
  >
    <div class="container" style="height: 60px;">
      <a class="logo mr-3" href="/">
        <div class="logo-container">
          <img v-if="routerBlack" src="/assets/images/lab_logo.jpg" alt="" style="width: 130px;padding-bottom:10px;">
          <img v-else src="/assets/images/lab_logo.jpg" alt="" style="width: 130px;padding-bottom:10px;">
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <i class="zi zi_user" style="transform: scale(1.2);color: #fff;" @click="toLogin"></i>
      <i class="zi zi_listul" style="transform: scale(1.4);color: #fff; margin-left: 2rem;" @click="openMenu"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse" style="justify-content: flex-end;">
        <ul v-if="screenWidth >= 992" class="navbar-nav navbar-center navbar-nav-chi" id="mySidenav" style="margin-left: 2%">
          <li
            class="nav-item nav-top"
            @mouseenter="showNav(item)"
            @click="clickNav(item)"
            v-for="(item, index) in navList"
            :key="index"
            @mouseleave="leaveNav(item)"
            :class="!routerBlack ? 'navbar-black' : ''"
          >
            <div v-if="item.title != 'LLMOps' && item.title != 'PRICING'">
              <a class="font_Bold nav-black-a"  :class="item.isShow ? 'nav-open' : ''" href="#" @click="navtiveTo(item)">{{item.title}}
              </a>
              
              <div
                :class="item.navSub && item.navSub.length > 2 ? 'isLong': ''"
                class="navbar-dropdown"
                v-show="item.isShow"
                
              > 
                
              </div>
            </div>
            <!-- <div v-else-if="item.title == 'LLMOps'">
              <a class="font_Bold nav-black-a"  href="#" style="color:#fff, cursor: pointer" @click="goToLLM('LLMOps')">LLMOps</a>
            </div> -->
          </li>
        </ul>

        <ul v-else class="navbar-nav navbar-center navbar-nav-chi" id="mySidenav" style="margin-left: 2%">
          <li
            class="nav-item nav-top"
            @mouseenter="showNav(item)"
            @click="clickNav(item)"
            v-for="(item, index) in navSecondList"
            :key="index"
            @mouseleave="leaveNav(item)"
            :class="!routerBlack ? 'navbar-black' : ''"
          >
            <div v-if="item.title != 'LLMOps'">
              <a class="font_Bold nav-black-a"  :class="item.isShow ? 'nav-open' : ''" href="#" @click="navtiveTo(item)">{{item.title}}
              </a>
              
              <div
                :class="item.navSub && item.navSub.length > 2 ? 'isLong': ''"
                class="navbar-dropdown"
                v-show="item.isShow"
                
              > 
              <div class="navbar-box">
                <div class="navbar-header">
                  <div class="navbar-header-title">
                    {{item.title}}
                  </div>
                </div>
                <div v-if="index == 0" class="line-container">
                  <div class="line"></div>
                  <div style="margin: 4px 4px 4px 4px; color: #437dd9; font-size: 1.5rem; line-height: 60px; font-weight: 600;">FEDML Nexus AI</div>
                  <div class="line"></div>
                </div>
                <div class="nav-flex" :style="{'padding-top': index === 0 ? '10px' : '40px'}">
                  <div class="navbar-dropdown-grid">
                    <div class="first-column" v-for="(obj, k) in item.navSub" :key="'sub'+k" @mouseleave="mouseLeave">
                      <ul v-if="obj.title == 'Open Source'" class="">
                        <li class="" :style="obj.isSeat ? {'min-height': '60px'} : {}">
                          <span v-if="index == 0" class="uk-nav-header" style="color: #437dd9">{{obj.title}}</span>
                          <span v-else class="uk-nav-header">{{obj.title}}</span>
                        </li>
                        <div class="nav-box-item" :class="navIndex == k + '' + m ? 'isSelect' : ''" v-for="(j, m) in obj.list" :key="k + '' + m" @click="clickNav(j)" @mouseenter="navIndex = k + '' + m" @mouseleave="navIndex = null" style="">
                          <div>
                            <img v-if="j.img" :src="j.img" alt="" style="width: 25px;margin-right: 5px;    cursor: pointer;" />
                            <a
                              class="nav-item-a nav-chi-a"
                              href="#"
                              >{{j.name}}</a
                            >
                            <div class="nav-item-info" v-if="j.list">
                              {{j.list}}
                            </div>
                            
                          </div>
                        </div>
                        <li class="" :style="obj.isSeat ? {'min-height': '60px'} : {}">
                          <span v-if="index == 0" class="uk-nav-header" style="color: #437dd9">Community Driven AI</span>
                          <span v-else class="uk-nav-header">Community Driven AI</span>
                        </li>
                        <div class="single-box-item" style="" @click="goToBlockChain()">
                          <div>
                            <a
                              class="single-item-a nav-chi-a"
                              href="#"
                              >Blockchain empowered solutions</a
                            >
                            <div class="single-item-info">
                              AI x Web3  marketplace for monetization of data, compute, and ML models. Providing ML roll up, ML ZKP, and verifiable contribution assessment. 
                            </div>
                            
                          </div>
                        </div>
                      </ul>
                      <ul v-else-if="obj.title == 'Serve Anywhere'" class="">
                        <li class="" :style="obj.isSeat ? {'min-height': '60px'} : {}">
                          <span v-if="index == 0" class="uk-nav-header" style="color: #437dd9">{{obj.title}}</span>
                          <span v-else class="uk-nav-header">{{obj.title}}</span>
                        </li>
                        <div class="nav-box-item" :class="navIndex == k + '' + m ? 'isSelect' : ''" v-for="(j, m) in obj.list" :key="k + '' + m" @click="clickNav(j)" @mouseenter="navIndex = k + '' + m" @mouseleave="navIndex = null" style="">
                          <div>
                            <img v-if="j.img" :src="j.img" alt="" style="width: 25px;margin-right: 5px;    cursor: pointer;" />
                            <a
                              class="nav-item-a nav-chi-a"
                              href="#"
                              >{{j.name}}</a
                            >
                            <div class="nav-item-info" v-if="j.list">
                              {{j.list}}
                            </div>
                            
                          </div>
                        </div>
                        <li class="" :style="obj.isSeat ? {'min-height': '80px'} : {}">
                          <span v-if="index == 0" class="uk-nav-header" style="color: #437dd9">Compute Resource Sharing</span>
                          <span v-else class="uk-nav-header">Compute Resource Sharing</span>
                        </li>
                        <div class="single-box-item" style="" @click="goToCheetah()">
                          <div>
                            <a
                              class="single-item-a nav-chi-a"
                              href="#"
                              >Decentralized GPU Cloud</a
                            >
                            <div class="single-item-info">
                              "Uber for AI", 1 line command to automatically provision GPUs for your jobs, community driven pricing, pay for compute only.
                            </div>
                            
                          </div>
                        </div>
                        <div class="single-box-item" style="" @click="goToSupplier()">
                          <div>
                            <a
                              class="single-item-a nav-chi-a"
                              href="#"
                              >GPU Suppliers</a
                            >
                            <div class="single-item-info">
                              Earn income by renting your GPUs for on-demand compute.
                            </div>
                            
                          </div>
                        </div>
                      </ul>
                      <ul v-else class="">
                        <li class="" :style="obj.isSeat ? {'min-height': '80px'} : {}">
                          <span v-if="index == 0" class="uk-nav-header" style="color: #437dd9">{{obj.title}}</span>
                          <span v-else class="uk-nav-header">{{obj.title}}</span>
                        </li>
                        <div class="nav-box-item" :class="navIndex == k + '' + m ? 'isSelect' : ''" v-for="(j, m) in obj.list" :key="k + '' + m" @click="clickNav(j)" @mouseenter="navIndex = k + '' + m" @mouseleave="navIndex = null" style="">
                          <div>
                            <img v-if="j.img" :src="j.img" alt="" style="width: 25px;margin-right: 5px;    cursor: pointer;" />
                            <a
                              class="nav-item-a nav-chi-a"
                              href="#"
                              >{{j.name}}</a
                            >
                            <div class="nav-item-info" v-if="j.list">
                              {{j.list}}
                            </div>
                            
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                
              </div>
                
              </div>
            </div>
            <div v-else>
              <a class="font_Bold nav-black-a"  href="#" style="color:#fff, cursor: pointer" @click="goToLLM('LLMOps')">LLMOps</a>
            </div>
          </li>
        </ul>

        <ul
          class="list-inline ml-auto menu-social-icon mb-0 py-2 py-lg-0"
          style=""
        >
          <!-- <li class="list-inline-item ml-0" >
            <b-button variant="primary" @click="toLogin">Login</b-button>
          </li> -->
        </ul>
      </div>
      
    </div>
    <ul class="col_menu first" v-if="menuVisible && screenWidth >= 992">
      
        <li
            v-for="(item, index) in navList"
            :key="index"
        >
        <template v-if="item.navSub && item.navSub.length">
          <div @click="openSub(index)">{{ item.title}}
            <i :id="'icon'+index" class='zi zi_forDown' style="margin-left: 1rem;"></i>
          </div>
          <div :id="'id'+index" style="display: none;" >
            <ul class="second">
              <li
              v-for="(obj, k) in item.navSub" :key="'sub'+k"
              >
              <div v-if="obj.title !=''" @click="openLast(index,k)">
                {{obj.title}}
                <i :id="'iconSecond'+k" class='zi zi_forDown' style="margin-left: 1rem;"></i>
              </div>
              <div class="third" :id="'last'+index+k" style="display: none;">
                <ul>
                  <li v-for="(j, m) in obj.list" :key="'li' + m" >
                    <span @click="clickNav(j)">{{j.name}}</span>
                  </li>
                </ul>
              </div>
              </li>
            </ul>
          </div>
        </template>

        <template v-else>
            <span @click="clickNav(item)">{{item.title}}</span>
        </template>
       
        </li>
    </ul>
    <ul class="col_menu first" v-else-if="menuVisible && screenWidth < 992">
      
      <li
          v-for="(item, index) in navSecondList"
          :key="index"
      >
      <template v-if="item.navSub && item.navSub.length">
        <div @click="openSub(index)">{{ item.title}}
          <i :id="'icon'+index" class='zi zi_forDown' style="margin-left: 1rem;"></i>
        </div>
        <div :id="'id'+index" style="display: none;" >
          <ul class="second">
            <li
            v-for="(obj, k) in item.navSub" :key="'sub'+k"
            >
            <div v-if="obj.title !=''" @click="openLast(index,k)">
              {{obj.title}}
              <i :id="'iconSecond'+k" class='zi zi_forDown' style="margin-left: 1rem;"></i>
            </div>
            <div class="third" :id="'last'+index+k" style="display: none;">
              <ul>
                <li v-for="(j, m) in obj.list" :key="'li' + m" >
                  <span @click="clickNav(j)">{{j.name}}</span>
                </li>
              </ul>
            </div>
            </li>
          </ul>
        </div>
      </template>

      <template v-else>
          <span @click="clickNav(item)">{{item.title}}</span>
      </template>
     
      </li>
  </ul>
  </nav>
</template>

<script>
import { BIcon } from 'bootstrap-vue'

const YouTube = '/assets/images/YouTube.png'
const twitter = '/assets/images/twitter2.png'
const ins = '/assets/images/ins.png'
const Wechat = '/assets/images/Wechatlogo.png'
const Discord = '/assets/images/Discord.png'
const slack = '/assets/images/slack.png'
const github = '/assets/images/github.png'
export default {
  name: "GlobalHeader",
  components: {
    BIcon
	},
  data() {
    return {
      navIndex: null,
      screenWidth: '',
      navList : [
        {
          title: "PROJECT",
          isShow: false,
          notShowImg: true,
          isBlack: true,
          path: '/projectOverview',
        },
        {
          title: "PAPERS",
          isShow: false,
          notShowImg: true,
          path: '/researchPapers',
        },
        {
          title: "NEWS",
          isShow: false,
          notShowImg: true,
          path: '/press'
        },
        {
          title: "MEMBER",
          isShow: false,
          notShowImg: true,
          path: '/aboutus',
        },
        {
          title: "CONTACT",
          isShow: false,
          notShowImg: true,
          path: '/contact',
        },
      ],
      navSecondList : [
      {
          title: "PROJECT",
          isShow: false,
          notShowImg: true,
          isBlack: true,
          path: '/projectOverview',
        },
        {
          title: "PAPERS",
          isShow: false,
          notShowImg: true,
          path: '/researchPapers',
        },
        {
          title: "NEWS",
          isShow: false,
          notShowImg: true,
          path: '/press'
        },
        {
          title: "MEMBER",
          isShow: false,
          notShowImg: true,
          path: '/aboutus',
        },
        {
          title: "CONTACT",
          isShow: false,
          notShowImg: true,
          path: '/contact'
        },
      ],
      btnFlag: false,
      menuVisible:false,
      iconVisible:true,
      routerBlack: null,
      subVisible:'',
      subiconVisible:true,
      subMenNum:[],
      menuNum:[],
    };
  },
  watch:{
    $route(to,from){
      console.log(to,from)
      this.routerBlack=to.meta.isBlack
    }
  },
  mounted() {
    this.screenWidth = window.screen.width
    console.log('screenWidth ', this.screenWidth)
    // console.log(this.$route.meta.isBlack)
    this.routerBlack=this.$route.meta.isBlack
    window.addEventListener("scroll", this.scrollToTop, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop, true);
  },
  methods: {
    openSub(index){
      let icon = document.getElementById(`icon${index}`)
      icon.className == 'zi zi_forDown' ? icon.className = 'zi zi_forUp' : icon.className= 'zi zi_forDown'
      if(index === 2){
        let domm2 = document.getElementById(`last${index}0`)
        let domHidden = domm2.style.display
        domHidden === 'none' ? domm2.style.display = 'block' : domm2.style.display = 'none'
      }
      if(index === 3){
        let domm3 = document.getElementById(`last${index}0`)
        let domHidden = domm3.style.display
        domHidden === 'none' ? domm3.style.display = 'block' : domm3.style.display = 'none'
      }
      if(index === 4){
        let domm4 = document.getElementById(`last${index}0`)
        let domHidden = domm4.style.display
        domHidden === 'none' ? domm4.style.display = 'block' : domm4.style.display = 'none'
      }
      if (index === 5) {
        let domm5 = document.getElementById(`last${index}0`)
        let domHidden = domm5.style.display
        domHidden === 'none' ? domm5.style.display = 'block' : domm5.style.display = 'none'
      }
      let domm = document.getElementById(`id${index}`)
      let hidden = domm.style.display
      hidden === 'none' ? domm.style.display = 'block' : domm.style.display = 'none'
      // this.iconVisible = !this.iconVisible
    },
    openLast(index,k){
      let icon = document.getElementById(`iconSecond${k}`)
      icon.className == 'zi zi_forDown' ? icon.className = 'zi zi_forUp' : icon.className= 'zi zi_forDown'
      const name = index.toString() + k.toString()
      
      let domm = document.getElementById(`last${name}`)
      let hidden = domm.style.display
      hidden === 'none' ? domm.style.display = 'block' : domm.style.display = 'none'
      this.subiconVisible = !this.subiconVisible
    },
    goToNexus() {
      window.location.replace('/productPlatform');
    },
    openMenu(){
      this.iconVisible = true
      this.subiconVisible = true
      this.menuVisible = !this.menuVisible
      this.menuNum = []
      if(this.screenWidth >= 992) {
        this.navList.map(() => {
          this.menuNum.push(false)
        })
      } else {
        this.navSecondList.map(() => {
          this.menuNum.push(false)
        })
      }
    },
    goToBlockChain() {
      this.menuVisible = false
      window.location.replace('/web3');
    },
    goToCheetah() {
      this.menuVisible = false
      window.location.replace('/cheetah');
    },
    goToSupplier() {
      this.menuVisible = false
      window.location.replace('/supplier');
    },
    clickNav(item) {
      if (item.url) {
        this.menuVisible = false
        // window.open(url, '_blank')
        window.location.href = item.url
      }else if (item.path) {
        this.menuVisible = false
        // 改成重定向并刷新
        window.location.replace('/caselab/'+item.path)
        // this.$router.push({
        //     path: item.path
        //   });
      }else {
        return
      }
    },
    goToDetailPage(url) {
      window.location.replace(url)
    },
    openWechat(){
      this.imgVisible = false
    },
    mouseLeave(){
      this.imgVisible = true

    },
    toLogin(){
      window.open('https://nexus.fedml.ai/login?redirect=/platform/multiPlatform');
    },
    navtiveTo(item) {
      if (item.title === 'Platform') {
        this.$router.push({path: '/product'})
      }
    },
    goToLLM(e) {
      this.menuVisible = false
        // 改成重定向并刷新
        window.location.replace('/llMops')
    },
    showNav(item) {
      if(this.screenWidth >= 992) {
        this.navList.forEach(obj => {
          obj.isShow = false
        });
      } else {
        this.navSecondList.forEach(obj => {
          obj.isShow = false
        });
      }
      if (item.url) {
        return
      }
      this.$nextTick(()=>{
        item.isShow = true;
      })
      
    },
    leaveNav(item) {
      item.isShow = false;
    },
    scrollToTop() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 50) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.navbar-black{
  .nav-black-a{
    color: #333 !important;
  }
}
.nav-sticky.navbar-custom.navbar-top-w .navbar-black{
  .nav-black-a{
    color: #333 !important;
  }
}
.nav-sticky{
  .nav-black-a{
    color: #fff !important;
  }
}
.nav-box-item:hover{
      color: #C278FF !important;
    }
.isLong {
  width: 86%;
  // margin-left: -30% !important;
      left: 10%;
}
.navbar-dropdown {
  position: absolute;
  animation: vanishIn 0.5s;
  margin-left: 0%;
  .navbar-box{
    background-color: #fff;
    border-radius: 6px;
    // padding: 30px;
    border: 1px solid #e1e8f0;
    box-shadow: 0 0 2px #33456233, 0 50px 100px -20px #33456240,
      0 30px 60px -30px #0000004d;
  }
  .nav-flex {
    display: flex;
    // background-color: #fff;
    border-radius: 10px;
    // padding: 40px;
    // padding-left: 20px;
    // padding-right: 44px;
    // padding:  40px 46px 40px 20px;
    padding:  40px 46px 40px 30px;
    // border: 1px solid #e1e8f0;
    // box-shadow: 0 0 2px #33456233, 0 50px 100px -20px #33456240,
    //   0 30px 60px -30px #0000004d;
    .navbar-dropdown-grid {
      min-width: 150px;
      // width: 100%;
      display: flex;
      flex-wrap: nowrap;
      border-radius: 10px 0px 0px 10px;
      margin: 0;
      padding: 0;
      list-style: none;
      margin: -30px;
      margin-bottom: 0px;
      // padding: 30px;
      // background-color: #F1F3F7;
    }
    .nav-box-item{
      padding: 10px 0;
      max-width: 21rem;
      cursor: pointer;
      .Federate :hover{
        color: #2F7CE1;
      }
    }
    .single-box-item {
      padding: 10px 0;
      max-width: 21rem;
      cursor: pointer;
    }
    .single-box-item:hover .single-item-a {
      color: #2F7CE1 !important;
    }
    .single-box-item:hover .single-item-info {
      color: #2F7CE1 !important;
    }
    .single-item-a{
      // line-height: 19px;
      padding-bottom: 0;
      margin-bottom: 13px;
      width: 200px;
      color: #384250;
      font-size: 14px;
      transition: 0.15s ease-in-out;
      transition-property: color;
      margin-left: 0;
    }
    .isSelect {
      .nav-item-info{
        color: #2F7CE1;
        font-weight: bold;
      }
      .nav-item-a{
        color: #2F7CE1;
      }
    }
    .Federate{

    padding-bottom: 0;
  margin-bottom: 13px;
  color: #384250;
  font-size: 14px;


  line-height: 1.33;
      color: #36363b;
      font-weight: 400;
      font-size: 12px;
      margin-top: 6px;
      font-family: "Inter",sans-serif;

    }
    .Federate :hover{
      color: #2F7CE1
    }
    .nav-sub-right{
            margin-top: -15px;
        width: 270px;
        margin-left: 60px;
        border: 0;
        // div{
        //   min-height: 312px;
        // }
        .nav-card{
          position: relative;
        }
      }
    ul {
      list-style: none;
      // margin-left: -25px;
    }
    .nav-item-info{
      font-weight: bold;
      line-height: 1.33;
      color: #36363b;
      font-weight: 400;
      font-size: 12px;
      margin-top: 6px;
      font-family: "Inter",sans-serif;
      transition: 0.15s ease-in-out;
      transition-property: color;
    }
  }
}
@keyframes vanishIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.line-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1150px;
  padding-left: 30px;
  cursor: pointer;
}
.line {
  flex: 1;
  height: 4px;
  background-color: #437dd9;
  width: 50px;
}
.card-background-box{
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  z-index: 0;
  transition: -webkit-transform .15s ease-in-out;
  transition: transform .15s ease-in-out;
  transition: transform .15s ease-in-out,-webkit-transform .15s ease-in-out;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
.card-background-image:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(321.58deg,rgba(10,10,12,.15),rgba(10,10,12,.9));
    transition: .15s ease-in-out;
    transition-property: opacity;
}
.card-background-image:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: rgba(10,10,12,.6);
    transition: .15s ease-in-out;
    transition-property: opacity;
}
.card-body {
    padding: 24px;
}
.navbar-nav > li > a {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: 80px;
  padding: 0 8px;
  font-size: 16px;
  text-decoration: none;
  position: relative;
  height: 100%;
  // color: #384250;
}
.navbar-nav > li .uk-nav-header {
      color: #333;
      // color: #437dd9;
    font-size: 17px;
    line-height: 60px;
    font-weight: 600;
  // margin: 0 18px;
}
.navbar-nav > li .nav-item-a {
  // line-height: 19px;
  padding-bottom: 0;
  margin-bottom: 13px;
  color: #384250;
  font-size: 14px;
  transition: 0.15s ease-in-out;
  transition-property: color;
}
.single-item-info {
  line-height: 1.33;
  color: #36363b;
  font-weight: 400;
  font-size: 12px;
  margin-top: 6px;
  font-family: "Inter",sans-serif;
  transition: 0.15s ease-in-out;
  transition-property: color;
}

.navbar-nav > li .nav-item-div{
  font-size: 12px;
  margin: 0 18px;
  color: #9b9bae85;
  margin-bottom: 6px;
}
.navbar-nav > li > a.nav-open:after {
  color: #0366D0;
  background-color: #0366D0;
  content: "";
  height: 3px;
  bottom: -3px;
  left: 8%;
  right: 0;
  width: 84%;
  position: absolute;
  z-index: 121;
}
.logo-container {
  display: flex;
  flex-direction: column;
}
.logo-text {
  font-size: 12px;
  font-family: 'PingFang SC';
  font-weight: bold;
  margin-left: 42px;
  color: #fff;
}
.navbar-nav-chi > li .nav-item-a{
  color: #36363B;
  font-weight: 600;
  padding: 0px;
  margin: 0 0px;
}
.col_menu{
  display: none;
}
.navbar-toggler:focus{
  box-shadow:none;
}
.bold-e {
  font-weight: 440
}

.bold-d {
  font-weight: 440
}
.bold-f {
  font-weight: 440
}
.bold-s {
  font-weight: 440
}

.bold-e > span {
  font-weight: 900;
  font-size: 16px;
}
.bold-s > span {
  font-weight: 900;
  font-size: 16px;
}
.bold-d > span {
  font-weight: 900;
  font-size: 16px;
}
.bold-f > span {
  font-weight: 900;
  font-size: 16px;
}
@media screen and (max-width:992px) {
  .pc-text-w {
    display: none
  }
  .navbar-toggler{
    position: absolute;
    right: 30px;
  }
  .pc-text-b {
    display: none
  }
  ul{
    list-style: none;

  }
  .col_menu{
    display: block;
      max-height: 40rem;
      overflow: hidden;
      overflow-y: auto;
      background: #f8f9fa;
      list-style: none ;
      width: 100%;
      color: #333 !important;
      opacity: 1 !important;
      li{
        padding: 1rem 0;
      }
  }
}
.navbar-header{
      margin-top: 20px;
    width: 100%;
    padding: 0 32px;
}
.navbar-header-title{
  padding-bottom: 1.2rem;
    border-bottom: 1px solid #c4c4c480 !important;
    color: #36363B;
    font-weight: 600;
}
.icon_box{
  padding-top: 0.1rem;
  margin-left: 0.3rem;
}

</style>
