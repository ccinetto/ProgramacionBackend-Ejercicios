import { buildSchema } from 'graphql';
import {
  getCourseById,
  getAllCoursesByTopic,
  getAllCourses,
  updateCourseTopic,
  createCourse,
  deleteCourse
} from '../controllers/courses';
import { getMessage, getArrayOfMessages } from '../controllers/messages';
import { getNumber, getArrayOfNumbers } from '../controllers/numbers';

// GraphQL schema
//https://graphql.org/graphql-js/basic-types/
export const graphqlSchema = buildSchema(`
    type Query {
        getMessage: String,
        getArrayOfMessages: [String],
        getNumber: Int,
        getArrayOfNumbers: [Int],
        getAllCourses: [Course]
        getCourseById(id: Int!): Course
        getAllCoursesByTopic(topic: String!): [Course]
    },
    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course
        createCourse(data: CourseInput!): Course
        deleteCourse(id: Int!): Course
    },
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
    input CourseInput {
      title: String
      author: String
      description: String
      topic: String
      url: String
    }
`);

// Root resolver
export const graphqlRoot = {
  getMessage,
  getArrayOfMessages,
  getNumber,
  getArrayOfNumbers,
  getCourseById,
  getAllCoursesByTopic,
  getAllCourses,
  updateCourseTopic,
  createCourse,
  deleteCourse,
};
