import { SET_COMMENTS_TO_POST_ID } from '../actions/comments'

export const comments = (state = [], action) => {
    switch (action.type) {
    
        case SET_COMMENTS_TO_POST_ID:
            
            const { postId, comments } = action
            return {
                ...state,
                [postId]: comments
            }

      default:
        return state
    }
}