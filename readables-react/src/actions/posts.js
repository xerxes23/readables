export const SET_POSTS = 'SET_POSTS'
export const POSTS_ARE_LOADING = 'POSTS_ARE_LOADING'
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const UPDATE_SORT_METHOD = 'UPDATE_SORT_METHOD'

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


export function updateSortMethod(method) {
  return {
    type: UPDATE_SORT_METHOD,
    method
  }
}