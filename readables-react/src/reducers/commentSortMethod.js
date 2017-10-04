import { UPDATE_COMMENT_SORT_METHOD } from '../actions/comments'

export const commentSortMethod = (state = 'score', action) => {
    switch (action.type) {

        case UPDATE_COMMENT_SORT_METHOD:
            return action.method

        default:
            return state
    }
}
  