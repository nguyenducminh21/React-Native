import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://forever21.hungvu.net',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 30000,
});

export const getTodo = () => {
    return instance.get('/posts/1')
}
export const createTodo = (params) => {
    return instance.post('/posts', params)
}
export const updateTodo = (id, params) => {
    return instance.put(`/posts/${id}`, params)
}
export const deleteTodo = (id) => {
    return instance.delete(`/posts/${id}`)
}
export const login = (params) => {
    return instance.post('/login', params)
}