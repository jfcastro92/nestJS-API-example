import { Module } from '@nestjs/common';
import { BooksController } from '././controller/books/books.controller';
import { AuthorsController } from './controller/authors/authors.controller';
import { BookService } from './services/book/book.service';
import { AuthorService } from './services/author/author.service';

@Module({
  imports: [],
  controllers: [BooksController, AuthorsController],
  providers: [BookService, AuthorService],
})
export class AppModule {}
