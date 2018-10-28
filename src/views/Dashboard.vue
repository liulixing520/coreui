<template>
  <div class="animated fadeIn">
    <div class="card">
      <div class="card-header">

      </div>
      <div class="card-body">
        <div class="bd-example">
          <p class="h4">您好，尊敬的金卡客户，感谢您对平台的信任</p>
          <p class="h4">我们已经合作<span class="badge badge-warning">300</span>天了</p>
          <p class="h4">您累计收益 <span class="badge badge-danger">8900.00</span>元</p>
          <p class="h4">您的账户余额为 <span class="badge badge-danger">90000.00</span>元</p>
          <p class="h4">可提现金额为 <span class="badge badge-danger">90000.00</span>元</p>

          <b-row class="align-items-center">
            <b-col cols="4" class="mb-3 mb-xl-0 text-center">
              <b-button variant="primary" size="lg">去提现</b-button>
            </b-col>

            <b-col cols="4" class="mb-3 mb-xl-0 text-center">
              <b-button variant="danger" size="lg" >账单金额</b-button>
            </b-col>
          </b-row>
        </div>
        <div style="padding-top: 1rem;">
        <template>

          <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
            <!--<template slot="status" slot-scope="data">-->
            <!--<b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>-->
            <!--</template>-->
          </b-table>

        </template>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  export default {
    name: 'c-table',
    props: {
      caption: {
        type: String,
        default: '员工管理'
      },
      hover: {
        type: Boolean,
        default: true
      },
      striped: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      }
    },
    data: () => {
      return {
        items: shuffleArray([
          {userName: '中国产经新闻网', mobilePhone: '32222', createDate: '90'},
          {userName: '网易', mobilePhone: '322122', createDate: '60'},
          {userName: '新浪', mobilePhone: '3221221', createDate: '60'},
          {userName: '中国消费网', mobilePhone: '361', createDate: '80'}
        ]),
        fields: [
          {key: 'userName',label:'已入住媒体'},
          {key: 'mobilePhone',label:'累计订单量'},
          {key: 'createDate',label:'工作日均订单数'}
        ],
        currentPage: 1,
        perPage: 5,
        totalRows: 0
      }
    },
    methods: {
      getRowCount (items) {
        console.log("items.length>>>>"+items.length)
        return items.length
      },
      linkGen (pageNum) {
        return '#page/' + pageNum + '/foobar'
      }
    }
  }


</script>
