import { Test, TestingModule } from '@nestjs/testing';
import { LibrosController } from './libros.controller';

describe('LibrosController', () => {
  let controller: LibrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibrosController],
    }).compile();

    controller = module.get<LibrosController>(LibrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
