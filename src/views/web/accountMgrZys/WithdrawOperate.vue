<template>
  <div id="withdraw_operate">
    <b-card :header="caption" >
      <b-container class="bv-example-row">
        <b-form>
          <b-row class="justify-content-md-center">
            <b-col col lg="2" style="text-align: right;line-height: 35px;">可提现金额：</b-col>
            <b-col cols="12" md="auto">
              <b-form-input :readonly='true' label="" class="mr-sm-2" type="text" v-model="limitNum"></b-form-input>
            </b-col>
            <b-col col lg="2"></b-col>
          </b-row>
          <b-row class="justify-content-md-center" style="margin-top: 20px;">
            <b-col col lg="2" style="text-align: right;line-height: 35px;">提现金额：</b-col>
            <b-col cols="12" md="auto">
              <b-form-input label="" class="mr-sm-2" type="text" placeholder="请输入提金额" v-model="widthDrawCash"></b-form-input>
            </b-col>
            <b-col col lg="2"></b-col>
          </b-row>
          <b-row class="justify-content-md-center" style="margin-top: 20px;">
            <b-col col lg="2" style="text-align: right;line-height: 35px;">姓名：</b-col>
            <b-col cols="12" md="auto">
              <b-form-input label="" class="mr-sm-2" type="text" placeholder="请输入姓名" v-model="username"></b-form-input>
            </b-col>
            <b-col col lg="2"></b-col>
          </b-row>
          <b-row class="justify-content-md-center" style="margin-top: 20px;">
            <b-col col lg="2" style="text-align: right;line-height: 35px;">支付宝账户：</b-col>
            <b-col cols="12" md="auto">
              <b-form-input label="" class="mr-sm-2" type="text" placeholder="请输入支付宝账号" v-model="aliPay"></b-form-input>
            </b-col>
            <b-col col lg="2"></b-col>
          </b-row>
          <b-row class="justify-content-md-center" style="margin-top: 20px;">
            <b-col col lg="2" style="text-align: right;line-height: 35px;">银行卡号：</b-col>
            <b-col cols="12" md="auto">
              <b-form-input label="" class="mr-sm-2" type="text" placeholder="请输入银行卡号" v-model="bankCard"></b-form-input>
            </b-col>
            <b-col col lg="2"></b-col>
          </b-row>
          <b-row class="justify-content-md-center" style="margin-top: 20px;">
            <b-col col lg="2" style="text-align: right;line-height: 35px;">开户行：</b-col>
            <b-col cols="12" md="auto">
              <b-form-input label="" class="mr-sm-2" type="text" placeholder="请输入开户行名称" v-model="bankName"></b-form-input>
            </b-col>
            <b-col col lg="2"></b-col>
          </b-row>
          <b-row class="justify-content-md-center" style="margin-top: 20px;">
            <b-col cols="12" md="auto">
              <b-button block  variant="outline-success" @click="applyWithDraw">申请提现</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-container>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "withdraw-operate",
    data() {
      return {
        caption: '提现操作',
        limitNum: '30000',
        widthDrawCash: '',
        username: '',
        aliPay: '',
        bankCard: '',
        bankName: ''
      }
    },
    computed: {
    },
    mixins: [],
    methods: {
      applyWithDraw () {
        console.log('提现')
      }
    }
  }

</script>

<style scoped>
#withdraw_operate{
  background-color: #fff;
  padding-bottom: 20px;
}
</style>
