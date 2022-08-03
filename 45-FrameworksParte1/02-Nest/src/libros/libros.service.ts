import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/crear-libro.dto';
import { LibroDocument, LibrosCollectioName } from './dto/libros.schema';

@Injectable()
export class LibrosService {
  constructor(
    @InjectModel(LibrosCollectioName) private LibroModel: Model<LibroDocument>,
  ) {}

  async buscarLibros() {
    return this.LibroModel.find();
  }

  async crearLibro(libro: CreateBookDto) {
    console.log(libro);
    return this.LibroModel.create(libro);
  }

  async modificarLibro(id: string, libro: CreateBookDto) {
    return this.LibroModel.findByIdAndUpdate(id, libro, { new: true });
  }

  async borrarLibro(id: string) {
    await this.LibroModel.findByIdAndDelete(id);
  }
}
