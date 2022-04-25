import axios from '../custom-axios/axios';

const BooksService = {
    fetchCategories: () => {
        return axios.get('/categories');
    },
    fetchAuthors: () => {
        return axios.get('/authors');
    },
    fetchBooks: () => {
        return axios.get('/books');
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, category, author, available_copies) => {
        return axios.post("/books/add", {
            "name" : name,
            "category" : category,
            "author" : author,
            "available_copies" : available_copies
        })
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    }
}

export default BooksService;