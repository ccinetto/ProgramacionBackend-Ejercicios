//5
const variables = { courseID: 1 };
// https://www.youtube.com/watch?v=5QXR81AzUxw
const query = `
    query ($courseID: Int!) {
      getCourseById(id: $courseID) {
            title
            author
            description
            topic
            url
        }
    }
`;

fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    query,
    variables,
  }),
})
  .then((r) => r.json())
  .then((data) => {
    alert(`Ejemplo 4 = ${JSON.stringify(data)}`);
  })
  .catch(console.error);
