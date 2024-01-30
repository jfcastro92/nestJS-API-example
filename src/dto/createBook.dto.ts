import {
  IsString,
  IsNumber,
  IsPositive,
  Min,
  Max,
  IsNotEmpty,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @Min(1900)
  @Max(new Date().getFullYear())
  year: number;

  @IsNumber()
  @Min(1)
  @IsPositive()
  pages: number;
}
