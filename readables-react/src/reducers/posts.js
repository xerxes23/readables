
import { SET_POSTS, POSTS_ARE_LOADING, ADD_NEW_POST, UPDATE_POST, DELETE_POST, APPLY_VOTE } from '../actions/posts'


export const posts = (state = {}, action) => {
    switch (action.type) {
        
        case DELETE_POST:
        const postIdToDelete = action.postId
        return {
          ...state,
          [postIdToDelete]: {
            ...state[postIdToDelete],
            deleted: true
          }
        }

        case APPLY_VOTE:
            const { postId, newValue } = action
  
            return {
              ...state,
              [postId]: {
                ...state[postId],
                voteScore: newValue
              }
            }

        case SET_POSTS:
            let stateWithPosts = []
      action.posts.forEach(post => {
        stateWithPosts = {
          ...stateWithPosts,
          [post.id]: post
        }
      })
      return stateWithPosts
        

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

        case UPDATE_POST:
            const postEdited = action.post
            return {
              ...state,
              [postEdited.id]: {
                ...state[postEdited.id],
                title: postEdited.title,
                body: postEdited.body,
                author: postEdited.author,
                category: postEdited.category
              }
            }

        default:
            return state
    }
}




export const postsAreLoading = (state = false, action) => {
    switch (action.type) {
        case POSTS_ARE_LOADING:
            return action.value

        default:
            return state
    }
}

