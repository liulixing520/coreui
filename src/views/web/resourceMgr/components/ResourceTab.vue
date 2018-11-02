<template>
  <div id="resource_tab">
    <b-row class="align-items-center" style="padding-bottom: 1.0rem;">
      <b-col cols="4" sm="4" md="2" class="mb-3 mb-xl-0">
        <b-button block pressed  to="#"  variant="outline-success" aria-pressed="true">新闻资源</b-button>
      </b-col>
      <b-col cols="4" sm="4" md="2"  class="mb-3 mb-xl-0">
        <b-button block to="#"  variant="outline-success">自媒体资源</b-button>
      </b-col>
      <b-col cols="4" sm="4" md="2" class="mb-3 mb-xl-0">
        <b-button block  to="#"  variant="outline-success">微信资源</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "resource-tab",
    data() {
      return {
      }
    },
    computed: {
    },
    mixins: [],
    methods: {
    }
  }

</script>

<style scoped>
#resource_tab{
  padding-bottom: 20px;
}
</style>
