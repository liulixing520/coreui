<template>
  <div id="water_bill">
    <b-navbar type="light" variant="light">
      <b-nav-form >
        创建开始时间：<b-form-input label="" class="mr-sm-2" type="date" v-model="startDate"></b-form-input>
        创建结束时间：<b-form-input label="" class="mr-sm-2" type="date" v-model="endDate"></b-form-input>
        账单种类：
        <b-form-select id="basicSelectLg"
         v-model="accountType"
         :plain="true"
         :options="['收入','提现', '退稿扣款', '提现失败返还']"
         value="请选择">
        </b-form-select>
        <div style="padding-left: 0.5rem;">
          <b-button variant="outline-success" class="my-2 my-sm-0"  type="submit">查询</b-button>
        </div>
      </b-nav-form>
    </b-navbar>
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage"></b-table>
    <nav>
      <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="上一页" next-text="下一页" hide-goto-end-buttons/>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "water-bill",
    data() {
      return {
        startDate: '', // 开始时间
        endDate: '', // 结束时间
        accountType: '收入',
        hover: true,
        striped: false,
        bordered: false,
        small: false,
        fixed: false,
        items: [
          {content: '收入-文章标题', money: '+40', time: '2018/09/8 16:35:28'},
          {content: '收入-文章标题', money: '+20', time: '2018/09/8 16:35:28'},
          {content: '提现', money: '+30', time: '2018/09/8 16:35:28'},
          {content: '退稿扣款', money: '-430', time: '2018/09/8 16:35:28'},
          {content: '提现失败返还', money: '+440', time: '2018/09/8 16:35:28'},
        ],
        fields: [
          {key: 'content',label:'内容'},
          {key: 'money',label:'金额'},
          {key: 'time',label:'时间'}
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
#water_bill{
  background-color: #fff;
  padding-bottom: 20px;
}
</style>
