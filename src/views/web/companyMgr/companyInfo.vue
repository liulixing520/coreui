<template>
  <div class="animated fadeIn">
    <b-card no-body>
      <b-card-body>
        <b-row>

          <b-col md="6">
            <b-card>
              <div slot="header">
                <strong>Horizontal</strong> Form
              </div>
              <b-form>
                <b-form-group
                  label="Email"
                  label-for="horizEmail"
                  description="Please enter your email."
                  :label-cols="3"
                  :horizontal="true">
                  <b-form-input id="horizEmail" type="email" placeholder="Enter Email.." autocomplete="username email"></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Password"
                  label-for="horizPass"
                  description="Please enter your password."
                  :label-cols="3"
                  :horizontal="true">
                  <b-form-input id="horizPass" type="password" placeholder="Enter Password.." autocomplete="current-password"></b-form-input>
                </b-form-group>
                <div slot="footer">
                  <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
                  <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
                </div>
              </b-form>
            </b-card>
            <b-card>
              <div slot="header">
                <strong>Normal</strong> Form
              </div>
              <b-form>
                <b-form-group validated
                              label="Email"
                              label-for="normalEmail"
                              description="Please enter your email.">
                  <b-form-input id="normalEmail" type="email" placeholder="Enter Email.." required autocomplete="email"></b-form-input>
                </b-form-group>
                <b-form-group validated
                              label="Password"
                              label-for="normalPass"
                              description="Please enter your password.">
                  <b-form-input id="normalPass" type="password" placeholder="Enter Password.." required autocomplete="current-password"></b-form-input>
                </b-form-group>
                <div slot="footer">
                  <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
                  <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
                </div>
              </b-form>
            </b-card>
            <b-card no-body :no-block="true">
              <div slot="header">
                Input <strong>Grid</strong>
              </div>
              <b-card-body>
                <b-row class="form-group">
                  <b-col sm="3">
                    <b-form-input type="text" placeholder=".col-sm-3"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="form-group">
                  <b-col sm="4">
                    <b-form-input type="text" placeholder=".col-sm-4"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="form-group">
                  <b-col sm="5">
                    <b-form-input type="text" placeholder=".col-sm-5"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="form-group">
                  <b-col sm="6">
                    <b-form-input type="text" placeholder=".col-sm-6"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="form-group">
                  <b-col sm="7">
                    <b-form-input type="text" placeholder=".col-sm-7"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="form-group">
                  <b-col sm="8">
                    <b-form-input type="text" placeholder=".col-sm-8"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="form-group">
                  <b-col sm="9">
                    <b-form-input type="text" placeholder=".col-sm-9"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="form-group">
                  <b-col sm="10">
                    <b-form-input type="text" placeholder=".col-sm-10"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="form-group">
                  <b-col sm="11">
                    <b-form-input type="text" placeholder=".col-sm-11"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="form-group">
                  <b-col sm="12">
                    <b-form-input type="text" placeholder=".col-sm-12"></b-form-input>
                  </b-col>
                </b-row>
              </b-card-body>
              <div slot="footer">
                <b-button type="submit" size="sm" variant="primary"><i class="fa fa-user"></i> Login</b-button>
                <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
              </div>
            </b-card>
            <b-card>
              <div slot="header">
                Input <strong>Sizes</strong>
              </div>
              <b-form-group
                label="Small input"
                label-for="smInput"
                label-size="sm"
                :label-cols="5"
                :horizontal="true">
                <b-form-input id="smInput" type="text" size="sm" placeholder="size='sm'"></b-form-input>
              </b-form-group>
              <b-form-group
                label="Default input"
                label-for="defaultInput"
                :label-cols="5"
                :horizontal="true">
                <b-form-input  id="defaultInput" type="text" placeholder="normal"></b-form-input>
              </b-form-group>
              <b-form-group
                label="Large input"
                label-for="lgInput"
                label-size="lg"
                :label-cols="5"
                :horizontal="true">
                <b-form-input id="lgInput" type="text" size="lg" placeholder="size='lg'"></b-form-input>
              </b-form-group>
              <div slot="footer">
                <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
                <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
  import { validationMixin } from "vuelidate"
  import { required, minLength, email, sameAs, helpers } from "vuelidate/lib/validators"

  const mustAccept = value => {
    return Boolean(value)
  }
  const strongPass = helpers.regex('strongPass', /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)


  const formShape = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accept: false
  }

  export default {
    name: "ValidationForms",
    data() {
      return {
        form: Object.assign({}, formShape),
        feedBack: 'secondary',
        submitted: false
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
        },
        lastName: {
          required,
          minLength: minLength(1)
        },
        userName: {
          required,
          minLength: minLength(5)
        },
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(8),
          strongPass
        },
        confirmPassword: {
          required,
          sameAsPassword: sameAs("password")
        },
        accept: {
          required,
          mustAccept
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
