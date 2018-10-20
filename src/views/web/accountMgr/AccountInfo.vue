<template>
  <div class="animated fadeIn">

    <b-row>

      <b-col cols="12" sm="6" lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-3 clearfix">
            <i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-warning mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">账户余额</div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <b-card :no-body="true">
          <b-card-body class="p-3 clearfix">
            <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-danger mb-0 mt-2">$399,10</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">累计消费</div>
          </b-card-body>
        </b-card>
      </b-col>


    </b-row><!--/.row-->
  </div>
</template>

<script>
  import SocialBoxChartExample from '../../dashboard/SocialBoxChartExample'
  export default {
    name: 'widgets',
    components: {
      SocialBoxChartExample
    },
    data () {
      return {
        msg: 'Widgets'
      }
    }
  }
</script>
