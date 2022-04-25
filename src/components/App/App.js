import React, {Component} from "react"
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import BooksService from "../../repository/booksRepository";
import Header from "../Header/header";
import Categories from "../Categories/categories";
import BookAdd from '../Books/BookAdd/bookAdd';
import Books from "../Books/BookList/books";

class App extends Component{


  constructor(props, context) {
    super(props, context);
    this.state = {
      categories: [],
      authors : [],
      books: [],
      selectedBook: {}
    }
  }

  render(){
      return (
          <Router>
              <Header/>
              <main>
                  <div className={"container"}>
                      <Route path={"/categories"}  render={() => <Categories categories={this.state.categories}/>}/>
                      <Route path={"/books/add"} exact render={() =>
                          <BookAdd categories={this.state.categories} authors={this.state.authors}
                                      onAddBook={this.addBook}/>}/>
                      <Route path={"/books"}  render={() =>
                          <Books books={this.state.books} onDelete={this.deleteBook}  />}/>
                      <Redirect to={"/books"}/>
                  </div>
              </main>
          </Router>
      );
  }


  componentDidMount() {
    this.loadCategories();
    this.loadAuthors();
    this.loadBooks();
  }


  loadCategories = () => {
    BooksService.fetchCategories()
        .then((data) => {
            console.log(data)
          this.setState({
            categories: data.data
          })
        });
  }

  loadAuthors = () => {
      BooksService.fetchAuthors()
          .then((data) => {
               console.log(data)
              this.setState({
                  authors: data.data
              })
          });
  }

  loadBooks = () => {
    BooksService.fetchBooks()
        .then((data) => {
            console.log(data)

            this.setState({
            books: data.data
          })
        });
  }

  deleteBook = (id) => {
    BooksService.deleteBook(id)
        .then(() => {
          this.loadBooks();
        })
  }

  addBook = (name, category, author, available_copies) => {
    BooksService.addBook(name, category, author, available_copies)
        .then(() => {
          this.loadBooks();
        })
  }

}

export default App;
