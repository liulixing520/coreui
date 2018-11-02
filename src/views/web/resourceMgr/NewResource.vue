<template>
  <div id="new_resource">
    <resource-tab></resource-tab>
  </div>
</template>

<script>
  import ResourceTab from './components/ResourceTab'
  export default {
    name: "new-resource",
    components: {
      ResourceTab
    },
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
#new_resource{
  background-color: #fff;
  padding-bottom: 20px;
}
</style>
