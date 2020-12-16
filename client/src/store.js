import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import {postReducer} from "./reducers/posts"

const reducer= combineReducers({
    posts:postReducer,
}

)



//const middleware=[thunk]
//const store= createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

const store = createStore(reducer,compose(applyMiddleware(thunk)))

export default store;