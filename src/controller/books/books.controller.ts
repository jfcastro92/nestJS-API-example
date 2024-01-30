import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateBookDto } from 'src/dto/createBook.dto';
import { Book } from 'src/services/book/book.interface';
import { BookService } from 'src/services/book/book.service';

@Controller('books')
export class BooksController {
  constructor(private bookService: BookService) {}

  @Get()
  getBooks(): Book[] {
    return this.bookService.getBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Book {
    return this.bookService.getBookById(parseInt(id));
  }

  @Post()
  createBook(@Body() infoBook: CreateBookDto) {
    console.log('New book request to create: ', JSON.stringify(infoBook));
    return this.bookService.createBook(infoBook);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() updateBook: Book) {
    console.log('New book request to update: ', JSON.stringify(updateBook));
    this.bookService.updateBook(parseInt(id), updateBook);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    console.log('New book request to delete with id: ', id);
    this.bookService.deleteBook(parseInt(id));
  }
}
