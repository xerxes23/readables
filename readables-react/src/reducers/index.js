// Libs
import { combineReducers } from 'redux'

// Reducers
import { categories } from './categories'
import { comments } from './comments'
import { posts } from './posts'


export default combineReducers({
    categories,
    posts,
    comments
})