import mongoose from 'mongoose';

export const categoryCollectionName = 'category';

const categorySchema = new mongoose.Schema({
	name: {type: String, required: true},
	description : {type: String, required: true},
});

export const CategoryModel = mongoose.model(categoryCollectionName, categorySchema);