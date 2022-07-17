import { ValidationResult } from 'joi';
import Config from '../../config';
import { Logger } from '../../services/logger';
import { ProductsFactoryDAO } from './products.factory';
import { ProductsDAO } from './products.factory';
import { ProductI, ProductsDTO } from './products.interfaces';
import { ProductJoiSchema } from './products.schemas';

export default class ProductsAPI {
  private static instance: ProductsAPI;
  private products: ProductsDAO;

  private constructor(dao: ProductsDAO) {
    this.products = dao;
  }

  static async getInstance(): Promise<ProductsAPI> {
    if (!this.instance) {
      Logger.info('Inicializando api de productos');
      const dao = await ProductsFactoryDAO.get(Config.PERSISTENCIA);
      ProductsAPI.instance = new ProductsAPI(dao);
    }

    return ProductsAPI.instance;
  }

  validateSchema(data: any) {
    const result: ValidationResult = ProductJoiSchema.validate(data);

    if (result.error) {
      return {
        valid: false,
        errors: result.error.details,
      };
    }

    return {
      valid: true,
    };
  }

  getProduct(id?: string): Promise<ProductsDTO[] | ProductsDTO> {
    return this.products.get(id);
  }

  addProduct(data: ProductI): Promise<ProductsDTO> {
    return this.products.add(data);
  }

  updateProduct(id: string, newProductData: ProductI): Promise<ProductsDTO> {
    return this.products.update(id, newProductData);
  }

  deleteProduct(id: string): Promise<void> {
    return this.products.delete(id);
  }
}
