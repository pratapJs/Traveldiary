import{POST_CREATE,POST_FETCH_ALL} from "../constants/postConstants"

export const postReducer=(posts=[], action)=>{
    switch (action.type){
        case POST_FETCH_ALL:
        return action.payload;
        case POST_CREATE:
            return posts;
            default:
            return posts

    }

}