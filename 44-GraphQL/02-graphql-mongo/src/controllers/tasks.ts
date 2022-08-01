import { TaskGraphQlModel } from '../model/tasks';

export const TaskQueries = {
  taskById: TaskGraphQlModel.getResolver('findById'),
  taskByIds: TaskGraphQlModel.getResolver('findByIds'),
  taskOne: TaskGraphQlModel.getResolver('findOne'),
  taskMany: TaskGraphQlModel.getResolver('findMany'),
  taskCount: TaskGraphQlModel.getResolver('count'),
  taskConnection: TaskGraphQlModel.getResolver('connection'),
  taskPagination: TaskGraphQlModel.getResolver('pagination'),
};

export const TaskMutations = {
  taskCreateOne: TaskGraphQlModel.getResolver('createOne'),
  taskCreateMany: TaskGraphQlModel.getResolver('createMany'),
  taskUpdateById: TaskGraphQlModel.getResolver('updateById'),
  taskUpdateOne: TaskGraphQlModel.getResolver('updateOne'),
  taskUpdateMany: TaskGraphQlModel.getResolver('updateMany'),
  taskRemoveById: TaskGraphQlModel.getResolver('removeById'),
  taskRemoveOne: TaskGraphQlModel.getResolver('removeOne'),
  taskRemoveMany: TaskGraphQlModel.getResolver('removeMany'),
};
