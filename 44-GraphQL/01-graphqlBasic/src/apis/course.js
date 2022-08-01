import { coursesData } from '../mocks/courses';

const findIndex = (id) => {
  const index = coursesData.findIndex((aProduct) => aProduct.id == id);
	if (index < 0) throw new Error('Course not found');

	return index;
};

const getNewId = () => {
  const lastItem = coursesData[coursesData.length-1];

  return lastItem.id + 1;
}

const getCourses = (query = {}) => {
  if (query.id) {
    const index = findIndex(query.id);
    return coursesData[index];
  }

  if (query.topic)
    return coursesData.filter((course) => course.topic === topic);

  return coursesData;
};

const createCourse = (courseData) => {
  const newCourse = {
    id: getNewId(),
    ...courseData,
  };
  coursesData.push(newCourse);

  return newCourse;
};

const updateCourse = (id, courseData) => {
  const index = findIndex(id);

  const oldItem = coursesData[index];

  const updatedItem = { ...oldItem, ...courseData };
  coursesData.splice(index, 1, updatedItem);

  return updatedItem;
};

const deleteCourse = (id) => {
  const index = findIndex(id);
  coursesData.splice(index, 1);
};

export const CourseApi = {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
};
