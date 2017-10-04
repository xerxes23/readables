export const SET_POSTS = 'SET_POSTS'
export const POSTS_ARE_LOADING = 'POSTS_ARE_LOADING'
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const UPDATE_SORT_METHOD = 'UPDATE_SORT_METHOD'
export const UPDATE_POST = 'UPDATE_POST'
export const DISPLAY_DELETE_MODAL = 'DISPLAY_DELETE_MODAL'
export const SET_POST_ID_TO_DELETE_MODAL = 'SET_POST_ID_TO_DELETE_MODAL'
export const DELETE_POST = 'DELETE_POST'
export const APPLY_VOTE = 'APPLY_VOTE'

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts
  }
}

export const postsAreLoading = (value) => {
  return {
    type: POSTS_ARE_LOADING,
    value
  }
}



export function addNewPost(values) {
  return {
    type: ADD_NEW_POST,
    title: values.title,
    category: values.category,
    author: values.author,
    body: values.body,
    id: values.id,
    timestamp: values.timestamp
  }
}


export function updatePost(values) {
  return {
    type: ADD_NEW_POST,
    title: values.title,
    category: values.category,
    author: values.author,
    body: values.body,
    id: values.id,
    timestamp: values.timestamp
  }
}



export function updateSortMethod(method) {
  return {
    type: UPDATE_SORT_METHOD,
    method
  }
}

export function displayDeleteModal(bool) {
  return {
    type: DISPLAY_DELETE_MODAL,
    active: bool
  }
}

export const setPostIdToDeleteModal = postId => ({
  type: SET_POST_ID_TO_DELETE_MODAL,
  postId
})

export const deletePost = postId => ({
  type: DELETE_POST,
  postId
})

export function applyVote(postId, newValue) {
  return {
    type: APPLY_VOTE,
    postId,
    newValue
  }
}