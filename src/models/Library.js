import Book from './Book';

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  deleteBook(title) {
    this.books = this.books.filter(book => book.title !== title);
  }

  searchBookByTitle(title) {
    return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  }

  searchBookByAuthor(author) {
    return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
  }

  getTotalBooks() {
    return this.books.length;
  }
}

export default Library;