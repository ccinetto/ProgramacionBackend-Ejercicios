import knex from 'knex';

const dbConfig = {
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		port: 30006,
		password: '',
		database: 'ccinetto',
	},
};

class RelationalDatabase {
	connection: any;
	tableName : string;

	constructor(config: any, tableName: string) {
		this.connection = knex(config);
		this.tableName = tableName;
	}

	get(id?: number) {
    if (id) return this.connection(this.tableName).where('id', id);

    return this.connection(this.tableName);
  }

  create(data: any) {
    return this.connection(this.tableName).insert(data);
  }

  update(id: number, data: any) {
    return this.connection(this.tableName).where('id', id).update(data);
  }

  delete(id: number) {
    return this.connection(this.tableName).where('id', id).del();
  }
}

const productsTableName = 'products';

export const ProductsModel = new RelationalDatabase(dbConfig, productsTableName)
export const CartsModel = new RelationalDatabase(dbConfig, 'carts');

const db = knex(dbConfig);

const initProductsTable = async () => {
	await db.schema.createTable(productsTableName, async (productsTable) => {
		console.log('done')
		productsTable.increments();
		productsTable.string('name').notNullable();
		productsTable.integer('stock').notNullable();
		productsTable.decimal('price', 4, 2);
		productsTable.timestamps(true, true);

		const initProducts = [
			{
				name: 'cartuchera',
				stock: 20,
				price: '10.5',
			},
			{
				name: 'pendrive',
				stock: 20,
				price: '99.4',
			},
		];
		const createProducts = initProducts.map((aProduct) =>
			db(productsTableName).insert(aProduct)
		);
		await Promise.all(createProducts);
	})
}

export const initDb = async () => {
		const productsTableExists = await db.schema.hasTable(productsTableName);
		if(!productsTableExists){
			console.log('Products Table not exists, creating it');
			await initProductsTable();
		}
}