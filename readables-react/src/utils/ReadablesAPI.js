
const api = 'http://localhost:3001'

const headers = { 'Authorization': 'xerxes' }


export const getAllCategories =  () => {
    return fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)
}        


export const getAllPosts = () => {
    return fetch(`${api}/posts`, { headers })
    .then(res => res.json())
}


export const getCommentsByPostId = postId =>  {
    return fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
}


export const getPostById = postId => {
    return fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
}


export const addPost = body => {
    return fetch(`${api}/posts/`, {
        method: 'POST',
        headers: {
        ...headers,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}


export const deletePostById =  postId => {
    return fetch(`${api}/posts/${postId}`, {
        method: 'DELETE',
        headers: headers
    })
}


export const editPostById = (postId, body) => {
       
   return fetch(`${api}/posts/${postId}`, {
        method: 'PUT',
        headers: {
        ...headers,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}


export const votePost = (postId, value) => {
    
    let option = value === 1 ? 'upVote' : 'downVote'
     

    return fetch(`${api}/posts/${postId}`, {
        method: 'POST',
        headers: {
        ...headers,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({option})
    })
}


export const voteComment = (commentId, value) => {
    
    let option = {
        option: value === 1 ? 'upVote' : 'downVote'
    }  

    return fetch(`${api}/comments/${commentId}`, {
        method: 'POST',
        headers: {
        ...headers,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(option)
    })
}


export const addComment = (body) => {
    
    return fetch(`${api}/comments/`, {
        method: 'POST',
        headers: {
        ...headers,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}


export const updateCommentById = (commentId, body, author) => {
    
    const commentBody = {
        body,
        author
    }

    return fetch(`${api}/comments/${commentId}`, {
        method: 'PUT',
        headers: {
        ...headers,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentBody)
    })
}


export const deleteCommentById =  commentId => {
    return fetch(`${api}/comments/${commentId}`, {
        method: 'DELETE',
        headers: headers
    })
}

