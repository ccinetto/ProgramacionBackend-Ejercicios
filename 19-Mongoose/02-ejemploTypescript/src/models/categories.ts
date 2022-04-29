import mongoose from 'mongoose';

export const categoryCollectionName = 'category';

export interface ICategory {
  name: string;
  description: string;
}

const categorySchema = new mongoose.Schema<ICategory>({
	name: {type: String, required: true},
	description : {type: String, required: true},
});

export const CategoryModel = mongoose.model<ICategory>(categoryCollectionName, categorySchema);