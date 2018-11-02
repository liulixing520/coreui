<template>
  <div id="we_chat_add">
    <resource-tab></resource-tab>
  </div>
</template>

<script>
  import ResourceTab from './components/ResourceTab'
  export default {
    name: "we-chat-add",
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
#we_chat_add{
  background-color: #fff;
  padding-bottom: 20px;
}
</style>
