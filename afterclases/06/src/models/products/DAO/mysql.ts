import knex from 'knex';

const mySqlConfig = {
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		port: 30006,
		password: '',
		database: 'ccinetto',
	},
};

const sqlite3Config = {
	client: 'sqlite3',
	connection: { filename: './myDB.sqlite' },
	useNullAsDefault: true,
};

export class RelationalDatabase {
	connection: any;
	tableName : string;
	initialized: boolean;
	config: any;

	constructor(tableName: string, mysql: boolean, ) {
		this.config = mysql ? mySqlConfig : sqlite3Config;
		this.connection = knex(this.config);
		this.tableName = tableName;
		this.initialized = false;
	}

	async initProductsTable() {
		await this.connection.schema.createTable(this.tableName, async (productsTable: any) => {
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
				this.connection(this.tableName).insert(aProduct)
			);
			await Promise.all(createProducts);
		})
	}

	async initDb() {
		const productsTableExists = await this.connection.schema.hasTable(this.tableName);
		if(!productsTableExists){
			console.log('Products Table not exists, creating it');
			await this.initProductsTable();
		}
	}

	async checkInit() {
		if(!this.initialized) {
			this.initialized = true;
			await this.initDb();
		}
	}

	async get(id?: number) {
		await this.checkInit();
    if (id) return this.connection(this.tableName).where('id', id);

    return this.connection(this.tableName);
  }

  async create(data: any) {
		await this.checkInit();
    return this.connection(this.tableName).insert(data);
  }

  async update(id: number, data: any) {
		await this.checkInit();
		return this.connection(this.tableName).where('id', id).update(data);
  }

  async delete(id: number) {
		await this.checkInit();
		return this.connection(this.tableName).where('id', id).del();
  }
}
