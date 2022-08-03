import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Genero } from './libro.dto';

export type LibroDocument = Libro & Document;

@Schema()
export class Libro {
  @Prop({ type: String, required: true })
  titulo: string;

  @Prop({ type: String, required: true })
  author: string;

  @Prop({ type: Number, required: true })
  precio: number;

  @Prop({ type: String, enum: Genero, required: true })
  genero: Genero;
}

export const LibrosCollectioName = Libro.name;
export const LibroSchema = SchemaFactory.createForClass(Libro);
