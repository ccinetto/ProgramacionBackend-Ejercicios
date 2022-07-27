import ProductDao from '../products.dao';
import { ProductModel } from '../products.schema';
import { ProductI } from '../product.interfaces';
import MongoDBClient from '../../../services/dbMongo';

describe('Product DAO TEST', () => {
  jest.setTimeout(20000);
  let daoTest: ProductDao;
  let mongoDBClient: MongoDBClient;

  beforeAll(async () => {
		console.log('EJECUTO BEFOREALL PARA INICIALIZAR DAO Y DB');
    mongoDBClient = await MongoDBClient.connect()
		daoTest = await ProductDao.getInstance();
    await ProductModel.deleteMany();
  });

  afterEach(async () => {
		console.log('EJECUTO afterEach PARA BORRAR TODO LO QUE HAYA CREADO EN LOS TESTS');
    await ProductModel.deleteMany();
  });

	afterAll(async() => {
		console.log('EJECUTO afterAll PARA DESCONECTARME DE LA DB CUANDO HAYA TERMINADO TODOS LOS TESTS');
		await mongoDBClient.disconnect();
	})

  describe('ProductDao Get', () => {
    it('deberia traerme un array vacio si no pido id y no hay elementos en la db', async () => {
      const expectedResponse: ProductI[] = [];

      const data = await daoTest.get();

      expect(data).toEqual(expectedResponse);
    });

    it('deberia traerme un array vacio si el id que le pido no existe', async () => {
      const expectedResponse: ProductI[] = [];
      const data = await daoTest.get('62df43581af04e56b1682fe4');

      expect(data).toEqual(expectedResponse);
    });

    it('deberia traerme el objeto que quiero si le paso un id que existe', async () => {
      const objectData = {
        nombre: 'bokita',
        precio: 2,
        stock: 22,
      };
      const product = await ProductModel.create(objectData);

      const data = await daoTest.get(product._id);

      expect(data[0]._id).toEqual(product._id);
			expect(data[0].nombre).toEqual(objectData.nombre);
      expect(data[0].precio).toEqual(objectData.precio);
      expect(data[0].stock).toEqual(objectData.stock);

    });
  });

  describe('ProductDao Add', () => {
    it('deberia guardar correctamente el nuevo producto', async () => {
      const newProduct = {
        nombre: 'bokita',
        precio: 2,
        stock: 22,
      };

      const result = await daoTest.add(newProduct);

      expect(result.nombre).toEqual(newProduct.nombre);
      expect(result.precio).toEqual(newProduct.precio);
      expect(result.stock).toEqual(newProduct.stock);
      expect(result._id).toBeDefined();
    });
  });

  describe('ProductDao Update', () => {
    it('deberia actualizar correctamente el producto', async () => {
			const testObject = {
        nombre: 'bokita',
        precio: 2,
        stock: 22,
      };
      const product = await ProductModel.create(testObject);

      const newData = {
        nombre: 'newName',
        precio: testObject.precio + 4,
        stock: testObject.stock - 3,
      };

      const result = await daoTest.update(product._id, newData);

      expect(result.precio).toEqual(newData.precio);
			expect(result.stock).toEqual(newData.stock);
      expect(result.nombre).toEqual(newData.nombre);
    });
  });

  describe('ProductDao Delete', () => {
    it('deberia borrar correctamente un producto', async () => {
			const testObject = {
        nombre: 'bokita',
        precio: 2,
        stock: 22,
      };
      const product = await ProductModel.create(testObject);

      await daoTest.delete(product._id);

			const result = await daoTest.get(product._id);

      expect(result).toEqual([]);
    });
  });
});
