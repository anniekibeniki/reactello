export default class ApiService {
    baseUrl = 'https://jsonplaceholder.typicode.com/';
    static _instance = null;

    static instance = () => {
        if (!ApiService._instance) {
            ApiService._instance = new ApiService();
        }
        return ApiService._instance;
    }

    getResource = async (url, options = null) => {
        const res = await fetch(`${this.baseUrl}${url}`, options);
        if (!res.ok) {
            throw new Error(`Could not fetch ${res.url}, recieved ${res.status}`);
        }
        return res.json();
    }
    _transformTodo({ id, title, completed = false, important = false }) {
        return {
            id,
            label: title,
            done: completed,
            important,
        };
    }
    getAllTodos = async () => {
        const res = await this.getResource('todos');
        return res.map(this._transformTodo);
    }
    getTodo = (id) => {
        return this.getResource(`todos/${id}`);
    }
    getPosts = () => {
        return this.getResource('posts');
    }
    getPost = (id) => {
        return this.getResource(`post/${id}`);
    }
}