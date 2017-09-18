
const api = 'http://localhost:3001'

const headers = { 'Authorization': 'xerxes' }


export const getAllCategories =  () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)


export const getAllPosts = () => 
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())

export const getComments = (id) => 
    fetch(`${api}/posts/${id}/comments`, { headers })
        .then(res => res.json())
        
