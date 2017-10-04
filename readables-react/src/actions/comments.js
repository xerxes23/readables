export const APPLY_VOTE_TO_COMMENT = 'APPLY_VOTE_TO_COMMENT'
export const SET_COMMENTS_TO_POST_ID = 'SET_COMMENTS_TO_POST_ID'
export const UPDATE_COMMENT_SORT_METHOD = 'UPDATE_COMMENT_SORT_METHOD'

export function setPostComments(postId, comments) {
    return {
      type: SET_COMMENTS_TO_POST_ID,
      postId,
      comments
    }
}


export function updateCommentSortMethod(method) {
  return {
    type: UPDATE_COMMENT_SORT_METHOD,
    method
  }
}

export function applyVoteToComment(commentId, parentId, newValue) {
  return {
    type: APPLY_VOTE_TO_COMMENT,
    commentId,
    parentId,
    newValue
  }
}