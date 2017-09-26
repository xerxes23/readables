// Libs
import { combineReducers } from 'redux'

// Reducers
import { categories, categoriesAreLoading } from './categories'
import { comments } from './comments'
import { posts, postsAreLoading } from './posts'
import { sortMethod } from './sortMethod'

export default combineReducers({
    
    categories,
    posts,
    comments,
    sortMethod,
    postsAreLoading,
    categoriesAreLoading
    
})