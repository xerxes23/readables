// Libs
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


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
    categoriesAreLoading,
    form: formReducer
})