import { Injectable } from '@nestjs/common';
import { Book } from './book.interface';

@Injectable()
export class BookService {
  private readonly books: Book[] = [];

  //Create books
  createBook(bookInfo) {
    let lastId: number;

    function addId(booksArray: Book[]): number {
      if (booksArray.length > 0) {
        lastId = booksArray[booksArray.length - 1].id_book + 1;
        return lastId;
      } else {
        return (lastId = 1);
      }
    }

    const newBook: Book = {
      id_book: addId(this.books),
      ...bookInfo,
    };
    this.books.push(newBook);
  }
  //Get books
  getBooks() {
    return this.books;
  }
  //Get book by Id
  getBookById(id: number): Book {
    return this.books.find((book: Book) => book.id_book === id);
  }
  //Update book
  updateBook(id: number, newBook: Book) {
    let bookIndex: number = -1;
    bookIndex = this.books.findIndex((book: Book) => book.id_book === id);
    this.books[bookIndex] = newBook;
  }
  //Delete book
  deleteBook(id: number) {
    this.books.forEach((book, index) => {
      if (book.id_book === id) {
        this.books.splice(index, 1);
      }
    });
  }
}
