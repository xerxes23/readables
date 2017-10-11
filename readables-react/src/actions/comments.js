export const APPLY_VOTE_TO_COMMENT = 'APPLY_VOTE_TO_COMMENT'
export const SET_COMMENTS_TO_POST_ID = 'SET_COMMENTS_TO_POST_ID'
export const UPDATE_COMMENT_SORT_METHOD = 'UPDATE_COMMENT_SORT_METHOD'
export const ADD_COMMENT = 'ADD_COMMENT'
export const CONTROL_EDIT_COMMENT_FORM = 'CONTROL_EDIT_COMMENT_FORM'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'


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

export function addNewComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  }
}

export function controlEditCommentForm(name, value) {
  return {
    type: CONTROL_EDIT_COMMENT_FORM,
    name,
    value
  }
}

export function updateComment(id, parentId, body, author) {
  return {
    type: UPDATE_COMMENT,
    parentId,
    id,
    body,
    author
  }
}