import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stock: { type: Number, default: 10 },
  price: { type: Number, required: true },
});


export class ProductsMongoDao {
  srv: string;
  productos: any;

  constructor() {
    this.srv = process.env.MONGO_SRV || 'ejemplo';
    mongoose.connect(this.srv);
    this.productos = mongoose.model('productos', productSchema);
  }


  async get(id?: number) {
    if (id) return this.productos.findById(id);

    return this.productos.find();
  }

  async create(data: any) {
    return this.productos.create(data);
  }

  update(id: number, data: any) {
    return this.productos.findByIdAndUpdate(id, data);
  }

  delete(id: number) {
    return this.productos.findByIdAndDelete(id);
  }
}