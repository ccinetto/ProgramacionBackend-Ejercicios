import { CourseApi } from '../apis/course';

export const getCourseById = (args) => {
  const query = {
    id: args.id,
  };

  return CourseApi.getCourses(query);
};

export const getAllCoursesByTopic = ({ topic }) => {
  const query = {};
  if (topic) {
    query.topic = topic;
  }

  return CourseApi.getCourses(query);
};

export const getAllCourses = () => {
  return coursesData;
};

export const updateCourseTopic = ({ id, topic }) => {
  const data = {
    topic,
  };
  const updatedItem = CourseApi.updateCourse(id, data);

  return updatedItem;
};

export const createCourse = ({ data }) => {
  const newCourse = CourseApi.createCourse(data);

  return newCourse;
};

export const deleteCourse = ({ id }) => {
  CourseApi.deleteCourse(id);
};
