import { MyMongoClient } from '../../../services/dbMongo';
import ProductDao from '../products.dao';
import ProductsDTO from '../products.dto';
import { ProductModel } from '../products.schema';
import { ProductI } from '../product.interfaces';

describe('Product DAO TEST', () => {
  let daoTest: ProductDao;

  beforeAll(() => {
    //Mock the connect method of MyMongoClient
    jest
      .spyOn(MyMongoClient.prototype, 'connect')
      .mockImplementation(async () => {
        console.log('MOCK CONNECT');
      });

    daoTest = new ProductDao();
  });

  describe('ProductDao Get', () => {
    it('deberia traerme un array vacio si no pido id y no hay elementos en la db', async () => {
      const mockResponse: ProductI[] = [];
      jest.spyOn(ProductModel, 'find').mockResolvedValueOnce(mockResponse);

      const data = await daoTest.get();

      expect(data).toEqual(mockResponse);
    });

    it('deberia traerme un array vacio si llamo al get con un id no valido', async () => {
      const mockResponse: ProductI[] = [];
      jest
        .spyOn(MyMongoClient.prototype, 'isValidId')
        .mockImplementationOnce(() => false);

      const data = await daoTest.get('1234');

      expect(data).toEqual(mockResponse);
    });

    it('deberia traerme el objeto que quiero si le paso un id que existe', async () => {
      const mockResponse = {
        nombre: 'bokita',
        precio: 2,
        stock: 22,
        _id: '61994f4a02cb778668c50409',
      };

      jest
        .spyOn(MyMongoClient.prototype, 'isValidId')
        .mockImplementationOnce(() => true);

      jest.spyOn(ProductModel, 'findById').mockResolvedValueOnce(mockResponse);

      const expectedResponse = [new ProductsDTO(mockResponse)];
      const data = await daoTest.get(mockResponse._id);

      expect(data).toEqual(expectedResponse);
    });
  });

  describe('ProductDao Add', () => {
    it('deberia guardar correctamente el nuevo producto', async () => {
      jest.spyOn(ProductModel.prototype, 'save').mockResolvedValueOnce('ok');
      const newProduct = {
        nombre: 'bokita',
        precio: 2,
        stock: 22,
      };

      const result = await daoTest.add(newProduct);

      expect(result.id).toBeDefined();
      expect(result.nombre).toEqual(newProduct.nombre);
      expect(result.stock).toEqual(newProduct.stock);
      expect(result.precioARS).toBeDefined();
      expect(result.precioARS).toEqual(newProduct.precio);
      expect(result.precioUSD).toBeDefined();
      expect(result.hasStock).toBeDefined();
      expect(result.hasStock).toBe(newProduct.stock > 0);
    });
  });

  describe('ProductDao Update', () => {
    it('deberia actualizar correctamente el producto', async () => {
      const newData = {
        nombre: 'bokita',
        precio: 2,
        stock: 22,
      };
      const _id = '61994f4a02cb778668c50409';

      const mockResponse = {
        _id,
        ...newData,
      };

      jest
        .spyOn(ProductModel, 'findByIdAndUpdate')
        .mockResolvedValueOnce(mockResponse);

      const result = await daoTest.update(_id, newData);
      const expectedResponse = new ProductsDTO(mockResponse);
      expect(result).toEqual(expectedResponse);
    });
  });

  describe('ProductDao Delete', () => {
    it('deberia borrar correctamente un producto', async () => {
      const id = '1234';
      const pepito = jest
        .spyOn(ProductModel, 'findByIdAndDelete')
        .mockResolvedValueOnce(undefined);

      await daoTest.delete(id);

      expect(pepito).toHaveBeenCalled();
      expect(pepito).toHaveBeenCalledWith(id);
    });
  });
});
