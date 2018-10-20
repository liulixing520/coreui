<template>
  <b-card :header="caption" >
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
      <!--<template slot="status" slot-scope="data">-->
        <!--<b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>-->
      <!--</template>-->
    </b-table>
    <nav>
      <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
  </b-card>
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
        default: '账户变更记录'
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
          {no: '1', seriesNo: '3338487474444', amount:"320.00", createTime: '2018-09-08 13:15:44', status: '划扣'},
          {no: '2', seriesNo: '3338487474444', amount:"320.00", createTime: '2018-09-08 13:15:44', status: '订单退款'},
          {no: '3', seriesNo: '3338487474444', amount:"320.00", createTime: '2018-09-08 13:15:44', status: '提现'},
          {no: '4', seriesNo: '3228799900923', amount:"120.00", createTime: '2018-09-08 13:15:44', status: '充值'}
        ]),
        fields: [
          {key: 'no',label:'序号'},
          {key: 'seriesNo',label:'流水号'},
          {key: 'amount',label:'交易额'},
          {key: 'createTime',label:'交易额'},
          {key: 'status',label: '交易类型'},
          {key: 'status',label: '操作'}
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
