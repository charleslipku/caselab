<template>
  <section class="footer sectionBg2" style="height: 300px">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="mb-5">
            <a class="logo mr-3" href="/"
              ><img
                src="/assets/images/lab_logo.jpg"
                alt=""
                style=" width: 172px;
                  transform: scale(0.8);
                  margin: 0 0 10px -18px;"
            /></a>
            <p class="my-4 text-white">
              Edge Technology AI LAB
            </p>
            <div class="row">
              <div class="col-md-12">
                 
                
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1">
          <div class="row">
            <div class="col-md-2">
              <h4 class="f-22 font-weight-normal mb-3 text-white">PROJECT</h4>
            </div>
            <div class="col-md-2" style="cursor: pointer" @click="goToPage('pricing')">
              <h4 class="f-22 font-weight-normal mb-3 text-white">PAPERS</h4>
              <ul class="list-unstyled footer-sub-menu">
              </ul>
            </div>
            <div class="col-md-2">
              <h4 class="f-22 font-weight-normal mb-3 text-white">NEWS</h4>
            </div>
            <div class="col-md-2">
              <h4 class="f-22 font-weight-normal mb-3 text-white">MEMBER</h4>
            </div>
            <div class="col-md-2">
              <h4 class="f-22 font-weight-normal mb-3 text-white">CONTACT</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GlobalFooter",
  data() {
    return {};
  },
  methods: {
    goToPage(data) {
      switch (data) {
        case "researchpapers":
          this.$router.push({ path: "/researchPapers" });
          break;

        case "sponsorship":
          this.$router.push({ path: "/sponsorship" });
          break;

        case "Press":
          this.$router.push({ path: "/press" });
          break;
        case "contact":
          this.$router.push({ path: "/contact" });
          break;
        case "AboutUs":
          this.$router.push({ path: "/aboutus" });
          break;
        case "Career":
          this.$router.push({ path: "/careers" });
          break;
        case "Partnership":
          this.$router.push({ path: "/partnerships" });
          break;
        case "pricing":
          window.location.replace("/pricing")
          break;
        case "nexus":
          window.open("https://nexus.fedml.ai/login?redirect=/home");
          break;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.we_box {
  width: 7.5rem;
  border-radius: 14px;
  margin-bottom: 2rem;
  img {
    width: 100%;
    border-radius: 14px;
  }
}
.icon_box {
  margin-bottom: 1rem;
  img {
    width: 2.5rem;
    margin-right: 0.8rem;
  }
}
.logo_img{
  margin-bottom: 5px;
  cursor: pointer;
}
a {
  cursor: pointer;
}
</style>
