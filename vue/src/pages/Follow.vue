<template>
  <div class="Follow">
    <Cell
      v-for="(item,index) of $store.state.home"
      :key="item._id"
      :data="item"
      :index="index"
      api-name="user"
    />
  </div>
</template>

<script>
  import Cell from '../components/Cell.vue'
  // import axios from '../plugins/axios.js'
  import {mapActions} from 'vuex'
  export default {
    name:'Follow',
    props:{},
    data(){
      return {
        follow:[]
      }
    },
    components:{
      Cell
    },
    activated(){
      // this.$root.bLoading=true;
      this.FOLLOW()
    },
    updated(){},
    methods:mapActions(['FOLLOW'])
  }
</script>

<style scoped>
  .Follow{
	width: 100%;
    margin-top: .6rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }
</style>
