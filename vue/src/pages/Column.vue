<template>
  <div class="Column">
   <Cell
     v-for="item of $store.state.home"
     :key="item._id"
     :data="item"
     api-name="user"
   />
  </div>
</template>

<script>
  import Cell from '../components/Cell.vue'
  export default {
    name:'Column',
    props:{},
    data(){
      return {
        column:[]
      }
    },
    components:{
      Cell
    },
    activated(){
      this.$store.dispatch('COLUMN')
    },
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .Column{
		width: 100%;
		margin-top: .6rem;
		margin-left: 0.4rem;
		margin-right: 0.4rem;
  }
</style>
