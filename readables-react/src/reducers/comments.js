import { SET_COMMENTS_TO_POST_ID, APPLY_VOTE_TO_COMMENT } from '../actions/comments'

export const comments = (state = [], action) => {
    switch (action.type) {
    
        case SET_COMMENTS_TO_POST_ID:
            
            const { postId, comments } = action
            return {
                ...state,
                [postId]: comments
            }

        case APPLY_VOTE_TO_COMMENT:
            return {
              ...state,
              [action.parentId]: state[action.parentId].map(
                content =>
                  content.id === action.commentId
                    ? { ...content, voteScore: action.newValue }
                    : content
              )
            }

      default:
        return state
    }
}