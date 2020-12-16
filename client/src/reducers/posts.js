import{CREATE,FETCH_ALL,UPDATE,DELETE,LIKED_POST} from "../constants/postConstants"

export const postReducer=(posts=[], action)=>{
    switch (action.type){
        case FETCH_ALL:
        return action.payload;
        case CREATE:
            return [...posts, action.payload]
            case UPDATE:
                case LIKED_POST:
                return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
                case DELETE:
return posts.filter((post)=>post._id !== action.payload) ;
/* case LIKED_POST:
    return posts.map((post) => (post._id === action.payload._id ? action.payload : post)); */
            default:
            return posts

    }

}