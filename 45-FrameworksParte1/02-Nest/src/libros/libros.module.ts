import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibroSchema, LibrosCollectioName } from './dto/libros.schema';
import { LibrosController } from './libros.controller';
import { LibrosService } from './libros.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LibrosCollectioName, schema: LibroSchema },
    ]),
  ],
  controllers: [LibrosController],
  providers: [LibrosService],
})
export class LibrosModule {}
