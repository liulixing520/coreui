<template>
  <div class="animated fadeIn">
    <b-card no-body>
      <b-card-header>
        <i class="icon-note"></i> 文章发布
        <!--<a class="badge badge-danger" href="https://coreui.io/pro/vue/">CoreUI Pro</a>-->
        <div class="card-header-actions">
          <!--<a class="card-header-action" href="https://github.com/monterail/vuelidate" target="_blank" rel="noreferrer noopener">-->
            <!--<small class="text-muted">docs</small>-->
          <!--</a>-->
        </div>
      </b-card-header>
      <b-card-body>
        <b-row>
          <b-col lg="12">
            <!--<h6>Simple Form</h6>-->
            <b-form v-on:submit.prevent="onSubmit" v-on:reset.prevent="onReset" novalidate>
              <b-form-group
                label="文章上传"
                label-for="fileInput"
                :label-cols="2"
                :horizontal="true">
                <b-form-file id="fileInput" :plain="true"></b-form-file>

              </b-form-group>
              <b-form-group id="firstname"
                            label="文章标题"
                            label-for="firstname"
                            :label-cols="2"
                            :horizontal="true">
                <b-form-input id="firstName"
                              type="text"
                              v-model.lazy.trim="$v.form.firstName.$model"
                              :state="chkState('firstName')"
                              aria-describedby="input1LiveFeedback1"
                              placeholder="文章标题"
                              autocomplete='given-name'
                              autofocus />
                <b-form-invalid-feedback id="input1LiveFeedback1">
                  请输入文章标题，不得少于2个字符
                </b-form-invalid-feedback>
              </b-form-group>


              <b-form-group id="lastName"
                            label="文章内容"
                            label-for="lastName"
                            :label-cols="2"
                            :horizontal="true">
                <quill-editor :content="content"></quill-editor>
              </b-form-group>

              <b-button type="submit" variant="primary" :disabled="$v.form.$invalid || submitted">
                提交
              </b-button>
              <!--<b-button class="ml-1" type="submit" variant="success" :disabled="!$v.form.$invalid">-->
                <!--Validate-->
              <!--</b-button>-->
              <b-button class="ml-1" type="reset" variant="danger" :disabled="!isDirty">重置</b-button>
            </b-form>
            <br/>
          </b-col>

        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
  import { validationMixin } from "vuelidate"
  import { required, minLength } from "vuelidate/lib/validators"
  import Vue from 'vue'
  import VueQuillEditor from 'vue-quill-editor'

  // require styles
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'


  // mount with global
  Vue.use(VueQuillEditor)

//  const mustAccept = value => {
//    return Boolean(value)
//  }


  const formShape = {
    firstName: ""
  }

  export default {
    name: "ValidationForms",
    data() {
      return {
        form: Object.assign({}, formShape),
        feedBack: 'secondary',
        submitted: false,
        content: `<p><b>Bootstrap</b> is a <a href="/wiki/Free_and_open-source_software" title="Free and open-source software">free and open-source</a> front-end <a href="/wiki/Web_framework" title="Web framework">web framework</a> for designing <a href="/wiki/Website" title="Website">websites</a> and <a href="/wiki/Web_application" title="Web application">web applications</a>. It contains <a href="/wiki/HTML" title="HTML">HTML</a>- and <a href="/wiki/CSS" class="mw-redirect" title="CSS">CSS</a>-based design templates for <a href="/wiki/Typography" title="Typography">typography</a>, forms, buttons, navigation and other interface components, as well as optional <a href="/wiki/JavaScript" title="JavaScript">JavaScript</a> extensions. Unlike many web frameworks, it concerns itself with <a href="/wiki/Front-end_web_development" title="Front-end web development">front-end development</a> only.</p>
      <p>Bootstrap is the second most-starred project on <a href="/wiki/GitHub" title="GitHub">GitHub</a>, with more than 111,600 stars and 51,500 forks.<sup id="cite_ref-most-starred_3-0" class="reference"><a href="#cite_note-most-starred-3">[3]</a></sup></p>
      <p>Bootstrap, originally named Twitter Blueprint, was developed by Mark Otto and Jacob Thornton at <a href="/wiki/Twitter" title="Twitter">Twitter</a> as a framework to encourage consistency across internal tools. Before Bootstrap, various libraries were used for interface development, which led to inconsistencies and a high maintenance burden. According to <a href="/wiki/Twitter" title="Twitter">Twitter</a> developer Mark Otto:</p>
      <blockquote class="templatequote">
      <p>"A super small group of developers and I got together to design and build a new internal tool and saw an opportunity to do something more. Through that process, we saw ourselves build something much more substantial than another internal tool. Months later, we ended up with an early version of Bootstrap as a way to document and share common design patterns and assets within the company."<sup id="cite_ref-bootstrap_a_list_apart_4-0" class="reference"><a href="#cite_note-bootstrap_a_list_apart-4">[4]</a></sup></p>
      </blockquote>
      <p>After a few months of development by a small group, many developers at Twitter began to contribute to the project as a part of Hack Week, a <a href="/wiki/Hackathon" title="Hackathon">hackathon</a>-style week for the Twitter development team. It was renamed from Twitter Blueprint to Bootstrap, and released as an open source project on August 19, 2011.<sup id="cite_ref-v1-release_5-0" class="reference"><a href="#cite_note-v1-release-5">[5]</a></sup> It has continued to be maintained by Mark Otto, Jacob Thornton, and a small group of core developers, as well as a large community of contributors.<sup id="cite_ref-about_6-0" class="reference"><a href="#cite_note-about-6">[6]</a></sup></p>`
      }
    },
    computed: {
      formStr() { return JSON.stringify(this.form, null, 4) },
      isValid() { return !this.$v.form.$anyError },
      isDirty() { return this.$v.form.$anyDirty },
      invCheck() { return 'You must accept before submitting' },
    },
    mixins: [validationMixin],
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(2)
        }
      }
    },
    methods: {
      onSubmit() {
        if (this.validate()) {
          this.$nextTick(() => {
            // submit
            // console.log('submit:', this.formStr)
            this.submitted = true
            this.feedBack = 'info'
            this.$router.push({path: '/articleMgr/articleList'})
          })
        }
      },
      onReset() {
        // Reset validation
        this.form = Object.assign({}, formShape)
        this.submitted = false
        this.$nextTick(() => {
          this.$v.$reset()
          this.feedBack = 'secondary'
        })
      },
      chkState(val) {
        const field = this.$v.form[val]
        return !field.$dirty || !field.$invalid
      },
      findFirstError(component = this) {
        if (component.state === false) {
          if (component.$refs.input) {
            component.$refs.input.focus()
            return true
          }
          if (component.$refs.check) {
            component.$refs.check.focus()
            return true
          }
        }
        let focused = false
        component.$children.some((child) => {
          focused = this.findFirstError(child)
          return focused
        })

        return focused
      },
      validate() {
        this.$v.$touch()
        this.$nextTick(() => this.findFirstError())
        return this.isValid
      }
    }
  }

</script>

<style scoped>
  .btn.disabled {
    cursor: auto;
  }
</style>

