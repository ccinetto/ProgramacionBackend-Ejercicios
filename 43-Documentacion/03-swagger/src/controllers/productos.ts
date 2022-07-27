import { Request, Response, NextFunction } from 'express';
import { productsAPI } from '../apis/productos';
import { ProductQuery } from '../models/products/products.interface';

class Producto {
  checkAddProducts(req: Request, res: Response, next: NextFunction) {
    const { nombre, precio } = req.body;

    if (!nombre || !precio || typeof nombre !== 'string' || isNaN(precio)) {
      return res.status(400).json({
        msg: 'Campos del body invalidos',
      });
    }

    next();
  }

  async checkProductExists(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const producto = await productsAPI.getProducts(id);
    console.log(producto);
    if (!producto.length) {
      return res.status(404).json({
        msg: 'objeto no encontrado',
      });
    }
    next();
  }

  async getProducts(req: Request, res: Response) {
    const { id } = req.params;
    const { nombre, precio } = req.query;
    if (id) {
      const result = await productsAPI.getProducts(id);
      if (!result.length)
        return res.status(404).json({
          data: 'objeto no encontrado',
        });

      return res.json({
        data: result,
      });
    }

    const query: ProductQuery = {};

    if (nombre) query.nombre = nombre.toString();

    if (precio) query.precio = Number(precio);

    if (Object.keys(query).length) {
      return res.json({
        data: await productsAPI.query(query),
      });
    }

    res.json({
      data: await productsAPI.getProducts(),
    });
  }

  async addProducts(req: Request, res: Response) {
    const newItem = await productsAPI.addProduct(req.body);

    res.json({
      msg: 'producto agregado con exito',
      data: newItem,
    });
  }

  async updateProducts(req: Request, res: Response) {
    const id = req.params.id;

    const updatedItem = await productsAPI.updateProduct(id, req.body);

    res.json({
      msg: 'actualizando producto',
      data: updatedItem,
    });
  }

  async deleteProducts(req: Request, res: Response) {
    const id = req.params.id;
    await productsAPI.deleteProduct(id);
    res.json({
      msg: 'producto borrado',
    });
  }
}

export const productsController = new Producto();
