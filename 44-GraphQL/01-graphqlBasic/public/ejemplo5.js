//5
const variables = { topic: 'Node.js' };
// https://www.youtube.com/watch?v=5QXR81AzUxw
const query = `
    query ($topic: String!) {
      getAllCoursesByTopic(topic: $topic) {
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
    alert(`Ejemplo 5 = ${JSON.stringify(data)}`);
  })
  .catch(console.error);
