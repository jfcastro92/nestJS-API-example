import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAuthorDto } from 'src/dto/createAuthor.dto';
import { Author } from 'src/services/author/author.interface';
import { AuthorService } from 'src/services/author/author.service';

@Controller('authors')
export class AuthorsController {
  constructor(private authorService: AuthorService) {}

  @Get()
  getBooks(): Author[] {
    return this.authorService.getAuthors();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Author {
    return this.authorService.getAuthorById(parseInt(id));
  }

  @Post()
  createBook(@Body() infoAuthor: CreateAuthorDto) {
    console.log('New author request to create: ', JSON.stringify(infoAuthor));
    return this.authorService.createAuthor(infoAuthor);
  }

  @Put(':id')
  updateAuthor(@Param('id') id: string, @Body() updateAuthor: Author) {
    console.log('New author request to update: ', JSON.stringify(updateAuthor));
    this.authorService.updateAuthor(parseInt(id), updateAuthor);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    console.log('New author request to delete with id: ', id);
    this.authorService.deleteAuthor(parseInt(id));
  }
}
