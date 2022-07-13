import { MealModel, MealI } from '../model/meals';

class Meal {
  async getMeal(id?: string) {
    if (id) return MealModel.findById(id);

    return MealModel.find();
  }

  async createMeal(mealData: MealI) {
    return MealModel.create(mealData);
  }
}

export default new Meal();
