import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateBookDto } from './dto/crear-libro.dto';
import { BookDto } from './dto/libro.dto';
import { LibroDocument } from './dto/libros.schema';
import { LibrosService } from './libros.service';

@Controller('libros')
@ApiTags('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Get('/')
  @ApiOperation({
    description: 'Devuelve una array con los libros existentes',
  })
  @ApiOkResponse({
    description: 'Devuelve una array con los libros existentes',
    type: [BookDto],
  })
  getAllLibros(): Promise<LibroDocument[]> {
    return this.librosService.buscarLibros();
  }

  @Post('/')
  @ApiOperation({
    description: 'Crear un nuevo Libro',
  })
  @ApiOkResponse({
    description: 'Retorna el libro creado',
    type: BookDto,
  })
  crearLibro(@Body() libro: CreateBookDto): Promise<LibroDocument> {
    return this.librosService.crearLibro(libro);
  }

  @Put('/:id')
  @ApiOperation({
    description: 'Modifica un Libro existente',
  })
  @ApiOkResponse({
    description: 'Retorna el libro con la data modificada',
    type: BookDto,
  })
  modificarLibro(
    @Param('id') idLibro: string,
    @Body() libroData: CreateBookDto,
  ): Promise<LibroDocument> {
    return this.librosService.modificarLibro(idLibro, libroData);
  }

  @Delete('/:id')
  @ApiOperation({
    description: 'Borra un Libro',
  })
  @ApiOkResponse({
    description: 'Returns un mensaje diciendo que salio todo bien',
  })
  async borrarLibro(@Param('id') idLibro: string): Promise<string> {
    await this.librosService.borrarLibro(idLibro);
    return `Libro con id ${idLibro} borrado`;
  }
}
