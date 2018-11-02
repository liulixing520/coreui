<template>
  <div id="media_add">
    <resource-tab></resource-tab>
  </div>
</template>

<script>
  import ResourceTab from './components/ResourceTab'
  export default {
    name: "media-add",
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
#media_add{
  background-color: #fff;
  padding-bottom: 20px;
}
</style>
