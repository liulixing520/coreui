<template>
  <b-card :header="caption">
    <b-navbar type="light" variant="light">
      <b-nav-form >
        标题：
        <b-form-input label="" class="mr-sm-2" type="text" placeholder="标题"></b-form-input>
        文章网址：
        <b-form-input label="" class="mr-sm-2" type="text" placeholder="文章网址"></b-form-input>
        <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">查询</b-button>
      </b-nav-form>
    </b-navbar>

    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
      <template slot="status" slot-scope="data">
        <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
      </template>
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
        default: '文章列表'
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
          {orderNo: '11111111111111', articleName: '关于发年终奖的提议', articleUrl: 'www.baidu.com', status: 'Active'},
          {orderNo: '222222222222', articleName: '关于发年终奖的提议2', articleUrl: 'www.baidu.com', status: 'Banned'},
          {orderNo: '222222222222', articleName: '关于发年终奖的提议2', articleUrl: 'www.baidu.com', status: 'Banned'},
          {orderNo: '222222222222', articleName: '关于发年终奖的提议2', articleUrl: 'www.baidu.com', status: 'Banned'},
          {orderNo: '222222222222', articleName: '关于发年终奖的提议2', articleUrl: 'www.baidu.com', status: 'Banned'},
          {orderNo: '222222222222', articleName: '关于发年终奖的提议2', articleUrl: 'www.baidu.com', status: 'Banned'},
          {orderNo: '222222222222', articleName: '关于发年终奖的提议2', articleUrl: 'www.baidu.com', status: 'Banned'},
          {orderNo: '222222222222', articleName: '关于发年终奖的提议2', articleUrl: 'www.baidu.com', status: 'Banned'},
          {orderNo: '222222222222', articleName: '关于发年终奖的提议2', articleUrl: 'www.baidu.com', status: 'Banned'},
          {orderNo: '222222222222', articleName: '关于发年终奖的提议2', articleUrl: 'www.baidu.com', status: 'Banned'},
          {orderNo: '222222222222', articleName: '关于发年终奖的提议2', articleUrl: 'www.baidu.com', status: 'Banned'},
          {orderNo: '222222222222', articleName: '关于发年终奖的提议2', articleUrl: 'www.baidu.com', status: 'Banned'},
          {orderNo: '222222222222', articleName: '关于发年终奖的提议2', articleUrl: 'www.baidu.com', status: 'Banned'},
          {orderNo: '222222222222', articleName: '关于发年终奖的提议2', articleUrl: 'www.baidu.com', status: 'Banned'},
          {orderNo: '222222222222', articleName: '关于发年终奖的提议2', articleUrl: 'www.baidu.com', status: 'Banned'},
          {orderNo: '333333333333', articleName: '关于发年终奖的提议3', articleUrl: 'www.baidu.com', status: 'Pending'}
        ]),
        fields: [
          {key: 'orderNo',label:'订单号'},
          {key: 'articleName',label:'文章标题'},
          {key: 'articleUrl',label:'文章网址'},
          {key: 'status',label: '媒体费用'}
        ],
        currentPage: 1,
        perPage: 5,
        totalRows: 0
      }
    },
    methods: {
      getBadge (status) {
        return status === 'Active' ? 'success'
          : status === 'Inactive' ? 'secondary'
            : status === 'Pending' ? 'warning'
              : status === 'Banned' ? 'danger' : 'primary'
      },
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
