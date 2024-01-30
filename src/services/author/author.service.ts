import { Injectable } from '@nestjs/common';
import { Author } from './author.interface';

@Injectable()
export class AuthorService {
  private readonly authors: Author[] = [];

  //Create books
  createAuthor(authorInfo) {
    let lastId: number;

    function addId(authorsArray: Author[]): number {
      if (authorsArray.length > 0) {
        lastId = authorsArray[authorsArray.length - 1].id_author + 1;
        return lastId;
      } else {
        return (lastId = 1);
      }
    }

    const newAuthor: Author = {
      id_author: addId(this.authors),
      ...authorInfo,
    };
    this.authors.push(newAuthor);
  }
  //Get books
  getAuthors() {
    return this.authors;
  }
  //Get book by Id
  getAuthorById(id: number): Author {
    return this.authors.find((author: Author) => author.id_author === id);
  }
  //Update book
  updateAuthor(id: number, newAuthor: Author) {
    let authorIndex: number = -1;
    authorIndex = this.authors.findIndex((author: Author) => {
      if (author.id_author === id) {
        this.authors[authorIndex] = newAuthor;
      }
    });
  }
  //Delete book
  deleteAuthor(id: number) {
    this.authors.forEach((author, index) => {
      if (author.id_author === id) {
        this.authors.splice(index, 1);
      }
    });
  }
}
