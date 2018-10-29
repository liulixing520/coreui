<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row class="align-items-center" style="padding-bottom: 1.0rem;">
        <b-col cols="4" sm="4" md="2" class="mb-3 mb-xl-0">
          <b-button block   to="/orderMgr/newOrder/news"  variant="outline-success" >新闻订单(10)</b-button>
        </b-col>
        <b-col cols="4" sm="4" md="2"  class="mb-3 mb-xl-0">
          <b-button block to="/orderMgr/newOrder/mideas"  variant="outline-success">自媒体</b-button>
        </b-col>
        <b-col cols="4" sm="4" md="2" class="mb-3 mb-xl-0">
          <b-button block  pressed aria-pressed="true"  to="/orderMgr/newOrder/wechat"  variant="outline-success">微信公众号</b-button>
        </b-col>
      </b-row>
      <b-card :header="caption" >

        <b-navbar type="light" variant="light">
          <b-nav-form >
            标题：<b-form-input label="" class="mr-sm-2" type="text" placeholder="请输入标题"></b-form-input>
            媒体名称：
            <b-form-select id="basicSelectLg"

                           :plain="true"
                           :options="['产经新闻网','新华网', '新浪网']"
                           value="Please select">
            </b-form-select>
            <div style="padding-left: 0.5rem;">
              <b-button variant="outline-success" class="my-2 my-sm-0"  type="submit">查询</b-button>
            </div>
          </b-nav-form>
        </b-navbar>
        <b-button-group style="padding-bottom: 0.5rem;">
          <b-button class="d-sm-down-none" pressed block variant="outline-info" aria-pressed="true">全部</b-button>
          <b-button class="d-sm-down-none" variant="outline-info" >未处理</b-button>
          <b-button class="d-sm-down-none" variant="outline-info" >已处理</b-button>
          <b-button class="d-sm-down-none" variant="outline-info" >发布中</b-button>
          <b-button class="d-sm-down-none" variant="outline-info" >已拒稿</b-button>
          <b-button class="d-sm-down-none" variant="outline-info" >已完成</b-button>
        </b-button-group>

        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
          <!--<template slot="status" slot-scope="data">-->
          <!--<b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>-->
          <!--</template>-->
        </b-table>
        <nav>
          <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>
      </b-card>
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
        default: '新订单'
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
          {orderNo: '刘大院', title: '18801044453', linkurl:"", name:"", source:"", amount:"900", status:"有效", createDate: '2018-09-08 13:15:44', remark: '备注'},
          {orderNo: '王大妮', title: '18799900923', linkurl:"", name:"", source:"", amount:"900", status:"有效", createDate: '2018-09-08 13:15:44', remark: '备注'}
        ]),
        fields: [
          {key: 'orderNo',label:'订单号'},
          {key: 'title',label:'文字标题'},
          {key: 'linkurl',label:'完成链接'},
          {key: 'name',label:'公众号名称'},
          {key: 'source',label:'发布位置'},
          {key: 'amount',label:'文章费用'},
          {key: 'status',label:'发布状态'},
          {key: 'createDate',label: '创建时间'},
          {key: 'remark',label: '备注要求'}
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
