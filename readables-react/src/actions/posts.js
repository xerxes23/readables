export const SET_POSTS = 'SET_POSTS'
export const POSTS_ARE_LOADING = 'POSTS_ARE_LOADING'

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