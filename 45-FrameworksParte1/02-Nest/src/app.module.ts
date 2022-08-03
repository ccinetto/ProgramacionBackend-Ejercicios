import Config from './config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LibrosModule } from './libros/libros.module';

@Module({
  imports: [
    MongooseModule.forRoot(Config.MONGO_ATLAS_SRV, { retryAttempts: 3 }),
    LibrosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
