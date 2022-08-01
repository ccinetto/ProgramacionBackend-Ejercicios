import mongoose from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

//Defino Interface para trabajar con mi Recurso en el codigo
interface TaskType {
  _id: string;
  title: string;
  description: string;
  duration: number;
}

//Defino Schema de mi recurso para Mongoose
const TaskSchema = new mongoose.Schema<TaskType>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Defino mi modelo para trabajar con mi recurso usando mongoose
export const TaskModel = mongoose.model<TaskType>('task', TaskSchema);

//transformo mi modelo para poder trabajarlo con GraphQL
export const TaskGraphQlModel = composeWithMongoose(TaskModel);
