<template>
  <div class="wrapper">
    <div class="animated fadeIn">
          <b-row class="align-items-center" style="padding-bottom: 1.0rem;">
            <b-col cols="4" sm="4" md="2" class="mb-3 mb-xl-0">
              <b-button block pressed  to="/orderMgr/newOrder/news"  variant="outline-success" aria-pressed="true">新闻订单(10)</b-button>
            </b-col>
            <b-col cols="4" sm="4" md="2"  class="mb-3 mb-xl-0">
              <b-button block to="/orderMgr/newOrder/mideas"  variant="outline-success">自媒体</b-button>
            </b-col>
            <b-col cols="4" sm="4" md="2" class="mb-3 mb-xl-0">
              <b-button block  to="/orderMgr/newOrder/wechat"  variant="outline-success">微信公众号</b-button>
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
          <template slot="title" slot-scope="data">
            <a href="javascript:void(0);" @click="largeModal = true" >{{data.item.title}}</a>
          </template>
          <template slot="source" slot-scope="data">
            <a href="javascript:void(0);" @click="largeModal2 = true" >{{data.item.source}}</a>
          </template>
        </b-table>
        <nav>
          <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>

        <b-modal title="金庸去世" size="lg" v-model="largeModal"  @ok="largeModal = false">
          <h5>安排：中国产经新闻网</h5>
          金庸（1924年3月10日-2018年10月30日），原名查良镛，生于浙江省海宁市，1948年移居香港 [1]  。当代武侠小说作家、新闻学家、企业家、政治评论家、社会活动家，“香港四大才子”之一 [1-2]  。
          1944年考入重庆中央政治大学外交系。1946年秋，金庸进入上海《大公报》任国际电讯翻译。1948年，毕业于上海东吴大学法学院 [1]  。1952年调入《新晚报》编辑副刊，并写出《绝代佳人》、《兰花花》等电影剧本。1959年，金庸等人于香港创办《明报》 [3]  。
          1985年起，历任香港特别行政区基本法起草委员会委员、政治体制小组负责人之一，基本法咨询委员会执行委员会委员，以及香港特别行政区筹备委员会委员。2000年，获得大紫荆勋章。2009年9月，被聘为中国作协第七届全国委员会名誉副主席 [4-5]  。同年荣获2008影响世界华人终身成就奖 [6]  。2010年，获得剑桥大学哲学博士学位 [1]  。
          2018年10月30日，金庸在香港逝世，享年94岁。 [7]
        </b-modal>

        <b-modal title="来源" size="sm" v-model="largeModal2"  @ok="largeModal2 = false">
          <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="citems" :fields="cfields" :current-page="currentPage" :per-page="perPage">
            <template slot="linkurl" slot-scope="data">
              <a href="javascript:void(0);" @click="largeModal2 = true" >{{data.item.linkurl}}</a>
            </template>
          </b-table>
        </b-modal>

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
          {orderNo: '9001212', title: '论长相的重要性', linkurl:"", name:"", source:"来源", amount:"900", status:"有效", createDate: '2018-09-08 13:15:44', remark: '备注'},
          {orderNo: '32232422', title: '知名武侠小说作者金庸去世', linkurl:"", name:"", source:"来源", amount:"900", status:"有效", createDate: '2018-09-08 13:15:44', remark: '备注'}
        ]),
        fields: [
          {key: 'orderNo',label:'订单号'},
          {key: 'title',label:'文字标题'},
          {key: 'linkurl',label:'完成链接'},
          {key: 'name',label:'媒体名称'},
          {key: 'source',label:'来源'},
          {key: 'amount',label:'文章费用'},
          {key: 'status',label:'发布状态'},
          {key: 'createDate',label: '创建时间'},
          {key: 'remark',label: '备注要求'}
        ],
        cfields: [
          {key: 'name',label:'媒体名称'},
          {key: 'linkurl',label: '链接地址'}
        ],
        citems: shuffleArray([
          {name: '论长相的重要性',  linkurl:"www.baidu.com"},
          {name: '知名武侠小说作者金庸去世', linkurl:"www.sina.com.cn"}
        ]),
        currentPage: 1,
        perPage: 5,
        totalRows: 0,
        largeModal: false,
        largeModal2: false

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
