<template>
  <b-card :header="caption" >

    <b-navbar type="light" variant="light">
      <b-nav-form >
        创建时间：
        <b-form-input label="" class="mr-sm-2" type="text" placeholder="创建时间"></b-form-input>
        <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">查询</b-button>
        <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
          <b-button block variant="primary">新建员工</b-button>
        </b-col>
      </b-nav-form>
    </b-navbar>

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
          {userName: '刘大院', mobilePhone: '18801044453', createDate: '2018-09-08 13:15:44', status: '有效'},
          {userName: '王大妮', mobilePhone: '18799900923', createDate: '2018-09-08 13:15:44', status: '失效'}
        ]),
        fields: [
          {key: 'userName',label:'员工姓名'},
          {key: 'mobilePhone',label:'员工手机号'},
          {key: 'createDate',label:'创建时间'},
          {key: 'status',label: '状态'}
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
