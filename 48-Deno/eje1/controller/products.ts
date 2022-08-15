// deno-lint-ignore-file require-await
import { v4, OpineRequest, OpineResponse } from '../depts.ts';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

let products: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is product 1',
    price: 18.89,
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is product 2',
    price: 38.66,
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'This is product 3',
    price: 169.15,
  },
];

const isInvalidBody = (body: any): boolean => {
  return !body || !body.name || !body.description || !body.price || isNaN(body.price);
}

// @desc Get Products
// @route Get /api/products
const getAll = async (req: OpineRequest, res: OpineResponse) => {
  console.log('ENTREEE');
  await res.json({
    error: false,
    data: products,
  });
};

// @desc Get Single Product
// @route Get /api/products/:id
const get = async (req: OpineRequest, res: OpineResponse) => {
  console.log('PARAMS => ', req.params);
  const product: Product | undefined = products.find(
    (p) => p.id === req.params.id
  );
  if (product) {
    await res.json({
      error: false,
      data: product,
    });
  } else {
    res.status = 404;
    await res.json({
      error: true,
      message: 'No product found',
    });
  }
};

// @desc Add product
// @route Post /api/products
const add = async (req: OpineRequest, res: OpineResponse) => {
  console.log('ENTRE AL ADD');
  console.log('BODY => ', req.body);

  if (isInvalidBody(req.body)) {
    res.status = 400;
    res.json({
      error: true,
      message: 'InvalidBody',
    });
  } else {
    const product: Product = req.body;
    product.id = v4.generate();
    products.push(product);
    res.json({
      error: false,
      data: product,
    });
  }
};

// @desc Update Product
// @route PUT /api/products/:id
const update = async (req: OpineRequest, res: OpineResponse) => {
  const id_param = req.params.id;
  const data = req.body;
  const product: Product | undefined = products.find((p) => p.id === id_param);

  if (product) {
    const updateData: {
      name?: string;
      description?: string;
      price?: number;
    } = data;

    products = products.map((p) =>
      p.id === id_param ? { ...p, ...updateData } : p
    );

    res.json({
      error: false,
      data: products,
    });
  } else {
    res.status = 400;
    res.json({
      error: true,
      message: 'No data',
    });
  }
};

// @desc Delete Product
// @route DELETE /api/product/:id
const remove = async (req: OpineRequest, res: OpineResponse) => {
  const id_param = req.params.id;
  products = products.filter((p) => p.id !== id_param);
  res.json({
    error: false,
    message: 'Product Deleted',
    data: products,
  });
};

export const ProductController = {
  getAll,
  get,
  add,
  update,
  remove,
};
