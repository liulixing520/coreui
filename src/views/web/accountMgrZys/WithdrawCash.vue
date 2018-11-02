<template>
  <b-card :header="caption" >
  <div id="withdraw_cash">
      <b-navbar type="light" variant="light">
        <b-nav-form >
          可提现金额：<b-form-input :readonly='true' label="" class="mr-sm-2" type="text" v-model="limitNum"></b-form-input>
          <div style="padding-left: 0.5rem;">
            <b-button variant="outline-success" class="my-2 my-sm-0"  type="submit" to="/accountMgrZys/withdrawCash/operate">申请提现</b-button>
          </div>
        </b-nav-form>
      </b-navbar>
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage"></b-table>
    <nav>
      <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="上一页" next-text="下一页" hide-goto-end-buttons/>
    </nav>
  </div>
  </b-card>
</template>

<script>
  export default {
    name: "withdraw-cash",
    data() {
      return {
        caption: '提现记录',
        limitNum: '30000',
        accountType: '收入',
        hover: true,
        striped: false,
        bordered: false,
        small: false,
        fixed: false,
        items: [
          {orderCode: '32885599008', cashNum: '2000', username: '李明', cashAccount: '62103567823521', status: '激活', content: '成功提取', time: '2018/09/8 16:35:28'},
          {orderCode: '32885599008', cashNum: '2000', username: '李明', cashAccount: '62103567823521', status: '激活', content: '成功提取', time: '2018/09/8 16:35:28'},
          {orderCode: '32885599008', cashNum: '2000', username: '李明', cashAccount: '62103567823521', status: '激活', content: '成功提取', time: '2018/09/8 16:35:28'},
          {orderCode: '32885599008', cashNum: '2000', username: '李明', cashAccount: '62103567823521', status: '激活', content: '成功提取', time: '2018/09/8 16:35:28'},
          {orderCode: '32885599008', cashNum: '2000', username: '李明', cashAccount: '62103567823521', status: '激活', content: '成功提取', time: '2018/09/8 16:35:28'},
          {orderCode: '32885599008', cashNum: '2000', username: '李明', cashAccount: '62103567823521', status: '激活', content: '成功提取', time: '2018/09/8 16:35:28'}
        ],
        fields: [
          {key: 'orderCode',label:'订单号'},
          {key: 'cashNum',label:'提现金额'},
          {key: 'username',label:'真实姓名'},
          {key: 'cashAccount',label:'提现账号'},
          {key: 'status',label:'状态'},
          {key: 'content',label:'回执内容'},
          {key: 'time',label:'创建时间'}
        ],
        currentPage: 1,
        perPage: 5
      }
    },
    computed: {
    },
    mixins: [],
    methods: {
      getRowCount (items) {
        console.log("items.length>>>>"+items.length)
        return items.length
      }
    }
  }

</script>

<style scoped>
#withdraw_cash{
  background-color: #fff;
  padding-bottom: 20px;
}
</style>
