import { describe, it, expect } from 'vitest';
import Book from '../models/Book';
import Library from '../models/Library';

describe('Library Management System', () => {
  it('should add a new book to the library', () => {
    const library = new Library();
    const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 3);
    library.addBook(book);
    expect(library.getTotalBooks()).toBe(1);
  });

  it('should delete a book from the library', () => {
    const library = new Library();
    const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 3);
    const book2 = new Book('1984', 'George Orwell', 1949, 5);
    library.addBook(book1);
    library.addBook(book2);
    library.deleteBook('The Great Gatsby');
    expect(library.getTotalBooks()).toBe(1);
  });

  it('should search for a book by title', () => {
    const library = new Library();
    const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 3);
    library.addBook(book);
    const searchResult = library.searchBookByTitle('gatsby');
    expect(searchResult.length).toBe(1);
    expect(searchResult[0].title).toBe('The Great Gatsby');
  });

  it('should search for a book by author', () => {
    const library = new Library();
    const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 3);
    library.addBook(book);
    const searchResult = library.searchBookByAuthor('fitzgerald');
    expect(searchResult.length).toBe(1);
    expect(searchResult[0].author).toBe('F. Scott Fitzgerald');
  });

  it('should display the total number of books in the library', () => {
    const library = new Library();
    const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 3);
    const book2 = new Book('1984', 'George Orwell', 1949, 5);
    library.addBook(book1);
    library.addBook(book2);
    expect(library.getTotalBooks()).toBe(2);
  });
});