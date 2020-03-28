import axios from '../plugins/axios.js';

//通用服务

function get({apiname,params,_id=null}){
  
  if(!apiname){
    // console.log('apiname,type,commit为必传参数');
    return;
  }
  
  let url = _id ? '/api/goods/'+ apiname + '/' + _id : '/api/goods/'+ apiname;
  params = params || {_page:1,_limit:3}
  return axios({
    url,params
  }).then(
    res=>res.data.data
  )
 
  
}


/* function get({apiname,params,type,commit,_id=null}){
  
  if(!apiname || !type || !commit){
    console.log('apiname,type,commit为必传参数');
    return;
  }
  
  let url = _id ? '/api/goods/'+ apiname + '/' + _id : '/api/goods/'+ apiname;
  params = params || {_page:1,_limit:3}
  axios({
    url,params
  }).then(
    res => commit(type,res.data.data)
  )
 
  
} */


export {get}