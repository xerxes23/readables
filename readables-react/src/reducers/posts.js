
import { SET_POSTS, POSTS_ARE_LOADING } from '../actions/posts'


export const posts = (state = [], action) => {
    switch (action.type) {
        case SET_POSTS:
            const { posts } = action
            return  posts
        
        default:
            return state
    }
}




export const postsAreLoading = (state = false, action) => {
    switch (action.type) {
      
      default:
        return state
    }
}

