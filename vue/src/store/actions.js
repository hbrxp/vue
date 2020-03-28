import axios from '../plugins/axios.js'
import {get} from './service.js'

export default {
  
  HOME({commit,state},payload){
    
    /* axios({
      url:'/api/goods/home',
      params:{_limit:10,_page:1}
    }).then(
      res=>commit('HOME',res.data.data)
    ) */
    
    get({apiname:'user',params:{_limit:10,_page:1}}).then(
      result=>commit('HOME',result)
    )
    
  },
  
  // BANNER({commit,state},payload){
  //   get({apiname:'banner'}).then(
  //     result=>commit('BANNER',result)
  //   )
  // },
  
  FOLLOW({commit,state},payload){
    get({apiname:'follow',params:{_page:1,_limit:8}}).then(
      result=>commit('FOLLOW',result)
    )
  },
  
  COLUMN({commit,state},payload){
    get({apiname:'column',params:{_page:1,_limit:6}}).then(
      result=>commit('COLUMN',result)
    )
  },
  
  DETAIL({commit,state},{apiname,_id}){
    get({apiname,_id}).then(
      result=>commit('DETAIL',result)
    )
  }
  
}