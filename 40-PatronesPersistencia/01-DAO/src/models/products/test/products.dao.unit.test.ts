import { MongoDBClient } from '../../../services/dbMongo';
import ProductDao from '../products.dao';
import mongoose from 'mongoose';
import { ProductModel } from '../products.schema';
import { ProductI } from '../product.interfaces';

describe('Product DAO TEST', () => {
  let daoTest: ProductDao;

  beforeAll(async () => {
    //Mock the connect method of MyMongoClient
    jest.spyOn(mongoose, 'connect').mockResolvedValue(mongoose);

    daoTest = await ProductDao.getInstance();
  });

  describe('ProductDao Get', () => {
    it('deberia traerme un array vacio si no pido id y no hay elementos en la db', async () => {
      const mockResponse: ProductI[] = [];
      jest.spyOn(ProductModel, 'find').mockResolvedValueOnce(mockResponse);

      const data = await daoTest.get();

      expect(data).toEqual(mockResponse);
    });

    it('deberia traerme un array vacio si el id que le pido no existe', async () => {
      const mockResponse: ProductI[] = [];
      const data = await daoTest.get('1234');

      expect(data).toEqual(mockResponse);
    });

    it('deberia traerme el objeto que quiero si le paso un id que existe', async () => {
      const mockResponse = [
        {
          nombre: 'bokita',
          precio: 2,
          stock: 22,
          _id: '61994f4a02cb778668c50409',
        },
      ];

      jest
        .spyOn(ProductModel, 'findById')
        .mockResolvedValueOnce(mockResponse[0]);

      const data = await daoTest.get(mockResponse[0]._id);

      expect(data).toEqual(mockResponse);
    });
  });

  describe('ProductDao Add', () => {
    it('deberia guardar correctamente el nuevo producto', async () => {
      const newProduct = {
        nombre: 'bokita',
        precio: 2,
        stock: 22,
      };

      jest.spyOn(ProductModel, 'create').mockImplementation(() => {
        return Promise.resolve({_id: '61994f4a02cb778668c50409', ...newProduct})
      })

      const result = await daoTest.add(newProduct);

      expect(result.nombre).toEqual(newProduct.nombre);
      expect(result.precio).toEqual(newProduct.precio);
      expect(result.stock).toEqual(newProduct.stock);
      expect(result._id).toBeDefined();
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

      expect(result).toEqual(mockResponse);
    });
  });

  describe('ProductDao Delete', () => {
    it('deberia borrar correctamente un producto', async () => {
      const mockDelete = jest
        .spyOn(ProductModel, 'findByIdAndDelete')
        .mockResolvedValueOnce(undefined);

      await daoTest.delete('1234');

      expect(mockDelete).toHaveBeenCalled();
    });
  });
});
