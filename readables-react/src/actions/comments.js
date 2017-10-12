export const APPLY_VOTE_TO_COMMENT = 'APPLY_VOTE_TO_COMMENT';
export const SET_COMMENTS_TO_POST_ID = 'SET_COMMENTS_TO_POST_ID';
export const UPDATE_COMMENT_SORT_METHOD = 'UPDATE_COMMENT_SORT_METHOD';
export const ADD_COMMENT = 'ADD_COMMENT';
export const CONTROL_EDIT_COMMENT_FORM = 'CONTROL_EDIT_COMMENT_FORM';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';


export const setPostComments = (postId, comments) => ({
	type: SET_COMMENTS_TO_POST_ID,
	postId,
	comments
});


export const updateCommentSortMethod = method => ({
    type: UPDATE_COMMENT_SORT_METHOD,
	method
});

export const applyVoteToComment = (commentId, parentId, newValue) => ({
    type: APPLY_VOTE_TO_COMMENT,
    commentId,
    parentId,
	newValue
});

export const addNewComment = (postId, comment) => ({
    type: ADD_COMMENT,
    postId,
    comment
});

export const controlEditCommentForm = (name, value) => ({
    type: CONTROL_EDIT_COMMENT_FORM,
    name,
    value
});

export const updateComment = (id, parentId, body, author) => ({
	type: UPDATE_COMMENT,
    parentId,
    id,
    body,
    author
});