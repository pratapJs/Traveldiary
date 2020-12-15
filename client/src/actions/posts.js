import * as api from '../api'
import{POST_FETCH_ALL,POST_CREATE} from "../constants/postConstants"


export const getPosts=()=> async(dispatch)=>{

try{
    const {data}= await api.fetchPosts();
    dispatch({
        type:POST_FETCH_ALL,
        payload:data
    })
} catch(error){
console.log(error.message);
}

  
}