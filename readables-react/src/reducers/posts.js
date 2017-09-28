
import { SET_POSTS, POSTS_ARE_LOADING, ADD_NEW_POST } from '../actions/posts'


export const posts = (state = [], action) => {
    switch (action.type) {
        case SET_POSTS:
            const { posts } = action
            return  posts
        

        case ADD_NEW_POST:
            const { title, author, body, category, id, timestamp } = action
      
            return {
              ...state,
              [id]: {
                author: author,
                body: body,
                category,
                deleted: false,
                id,
                timestamp,
                title,
                voteScore: 1
              }
            }    

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

