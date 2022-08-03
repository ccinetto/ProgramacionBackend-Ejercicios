import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { Genero } from './libro.dto';

export class CreateBookDto {
  @ApiProperty({ example: 'El arte de la doma clasica' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 80)
  titulo: string;

  @ApiProperty({ example: 'Juan Carlos' })
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty({ example: Genero.FICCION, enum: Genero })
  @IsNotEmpty()
  @IsEnum(Genero)
  genero: Genero;

  @ApiProperty({ example: 25 })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  precio: number;
}
