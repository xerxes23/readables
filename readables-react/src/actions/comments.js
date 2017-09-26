
export const SET_COMMENTS_TO_POST_ID = 'SET_COMMENTS_TO_POST_ID'


export function setPostComments(postId, comments) {
    return {
      type: SET_COMMENTS_TO_POST_ID,
      postId,
      comments
    }
  }