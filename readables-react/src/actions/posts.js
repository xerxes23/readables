export const SET_POSTS = 'SET_POSTS';
export const POSTS_ARE_LOADING = 'POSTS_ARE_LOADING';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const UPDATE_SORT_METHOD = 'UPDATE_SORT_METHOD';
export const UPDATE_POST = 'UPDATE_POST';
export const DISPLAY_DELETE_MODAL = 'DISPLAY_DELETE_MODAL';
export const SET_POST_ID_TO_DELETE_MODAL = 'SET_POST_ID_TO_DELETE_MODAL';
export const DELETE_POST = 'DELETE_POST';
export const APPLY_VOTE = 'APPLY_VOTE';

export const setPosts = posts => ({
    type: SET_POSTS,
    posts
});

export const postsAreLoading = value => ({
    type: POSTS_ARE_LOADING,
    value
});



export const addNewPost = values => ({
    type: ADD_NEW_POST,
    title: values.title,
    category: values.category,
    author: values.author,
    body: values.body,
    id: values.id,
    timestamp: values.timestamp
});


export const updatePost = values =>  ({
    type: ADD_NEW_POST,
    title: values.title,
    category: values.category,
    author: values.author,
    body: values.body,
    id: values.id,
    timestamp: values.timestamp
});



export const updateSortMethod = method => ({
    type: UPDATE_SORT_METHOD,
    method
});

export const displayDeleteModal = bool => ({
    type: DISPLAY_DELETE_MODAL,
    active: bool
});

export const setPostIdToDeleteModal = postId => ({
  type: SET_POST_ID_TO_DELETE_MODAL,
  postId
});

export const deletePost = postId => ({
  type: DELETE_POST,
  postId
});

export const applyVote = (postId, newValue) => ({
    type: APPLY_VOTE,
    postId,
    newValue
});