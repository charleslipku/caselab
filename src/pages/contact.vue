<template>
  <div>
    <section class="section sectionBg" style="padding-bottom: 26px">
      <div class="container">
        <div
          class="row justify-content-center"
          style="margin: 50px 0; color: black"
        >
          <div class="title font_Bold" style="font-size: 50px; font-weight: bold">
            Contact
          </div>
          <div class="title-text font_Bold" style="font-size: 20px; font-weight: bold">
            We'd love to talk about any research projects and ideas
          </div>
        </div>
      </div>
    </section>
    <section class="section" style="padding-top: 2rem; background: #f5f5f5">
      <div class="container">
        <div style="position: relative; display: flex">
          <div class="row row-text" style="width: 100%">
            <div>
              <b-row no-gutters>
                <b-col md="3" class="container-text">
                  <h2 class=" font_Bold ">Email</h2>
                  <div class="info-box color_tex ">xxx@xxx.com</div>
                </b-col>
                <b-col md="3" class="container-text">
                  <h2 class=" font_Bold ">Phone Number</h2>
                  <div class="info-box color_tex ">xxxxxxxxxxx</div>
                </b-col>
                <b-col md="3" class="container-text" >
                  <h2 class="font_Bold">Address</h2>
                  <div class="info-box color_tex">
                    NY 10010, United States
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="section" style="padding-top: 1px">
      <div class="container">
        <div style="position: relative; display: flex">
          <div class="row" style="width: 100%">
            <div class="title_txet font_Bold">
              Please tell us your interests
            </div>
            <b-form>
              <b-row no-gutters>
                <b-col md="4" class="form_box">
                  <b-form-input
                    v-model="form.name"
                    placeholder="Name"
                    class="input-box"
                  ></b-form-input>
                  <span v-if="nameVisible" class="tip_box"
                    >Please fill in this field correctly</span
                  >
                </b-col>
                <b-col md="4" class="form_box">
                  <b-form-input
                    v-model="form.email"
                    type="email"
                    class="input-box"
                    placeholder="Email"
                  ></b-form-input>
                  <span v-if="emailVisible" class="tip_box"
                    >Please fill in this field correctly</span
                  >
                </b-col>
                <b-col md="4" class="form_box">
                  <b-form-input
                    v-model="form.subject"
                    class="input-box"
                    placeholder="Major"
                  ></b-form-input>
                  <span v-if="subjectVisible" class="tip_box"
                    >Please fill in this field correctly</span
                  >
                </b-col>
                <b-col md="12" class="form_box">
                  <b-form-textarea
                    v-model="form.message"
                    placeholder="Message"
                    rows="3"
                    max-rows="10"
                    class="input-box"
                  ></b-form-textarea>
                  <span v-if="messageVisible" class="tip_box"
                    >Please fill in this field correctly</span
                  >
                </b-col>
                <div class="btn-contact-bottom">
                  <b-button
                    variant="primary"
                    class="btn-contact"
                    @click="deBounceFn"
                    >Send</b-button
                  >
                </div>
              </b-row>
            </b-form>
          </div>
        </div>
      </div>
    </section>
    <div class="model_box">
      <b-modal ref="my-modal" hide-footer>
        <div class="d-block text-center">
          <h3>Message Sent!</h3>
        </div>
        <div style="text-align: center">
          <b-button class="mt-3 btn_close" block @click="closeModel"
            >Close Me</b-button
          >
        </div>
      </b-modal>
    </div>
    <div v-if="loadingVisible">
      <b-spinner class="loading_box"></b-spinner>
    </div> -->
  </div>
</template>

<script>
import { debounce } from "@/api/";
// function deBounce(fn, t) {
//       const delay = t || 500;
//       let timeout;
//       console.log(this)
//       return function () {
//         const context = this;

//         const args = arguments;
//         if(!timeout) {
//           timeout = setTimeout(() => {
//             timeout = null;
//             fn.apply(context, args)
//           }, delay)
//         }
//       }
//     }
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      modelVisible: false,
      nameVisible: false,
      emailVisible: false,
      subjectVisible: false,
      messageVisible: false,
      loadingVisible: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    closeModel() {
      this.$refs["my-modal"].hide();
    },
   
    deBounceFn: debounce(function () {
      this.loadingVisible = true;
      this.onSubmit();
    }, 3000),
    onSubmit() {
      const data = this.form;
      const { name, email, subject, message } = data;
      if (name == "") {
        this.nameVisible = true;
      } else {
        this.nameVisible = false;
      }
      const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if(regEmail.test(email) ){
        this.emailVisible = false;
      } else {
        this.emailVisible = true;
        this.loadingVisible = false;
      }
      if (subject == "") {
        this.subjectVisible = true;
      } else {
        this.subjectVisible = false;
      }
      if (message == "") {
        this.messageVisible = true;
      } else {
        this.messageVisible = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.model_box /deep/ .modal-content {
  background: red;
  border: 0 !important;
  background: transparent;
}
h1 {
  font-size: 70px;
}
.sectionBg {
  background: url("/assets/images/second_banner.png") center no-repeat;
  background-size: cover;
  height: 400px;
}
.container-text {
  margin-bottom: 2rem;
  color: #929292;
  h2{
    font-size: 1.3rem;
  }
}
.section {
  padding-bottom: 0;
}

h5 {
  font-weight: bold;
  font-size: 20px;
  color: #333333;
}
.title_txet {
  text-align: left;
  font-size: 1.3rem;
  font-weight: 500;
  color: #333333;
  padding: 3rem 0 2rem 12px;
}

.btn-contact {
  background: #0366d0 !important;
}

.row-text h2 {
  color: #333333;
  font-size: 22px;
}
.row-text .info-box {
  font-size: 1.1rem;
  color: #343a40;
}
.btn-contact-bottom {
  text-align: center;
}
.icon-white {
  background: #fff !important;
  color: black;
}
.input-box {
  border-radius: 10px;
  margin-bottom: 2rem;
}
.loading_box {
  position: fixed;
  height: 30px;
  width: 30px;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  z-index: 99;
}
.close {
  border: 0 !important;
  background: red;
}
.btn.btn-secondary {
  color: #fff;
  background: #377dff;
}
.form_box {
  position: relative;
  .tip_box {
    position: absolute;
    bottom: 0;
    color: red;
  }
}
</style>
