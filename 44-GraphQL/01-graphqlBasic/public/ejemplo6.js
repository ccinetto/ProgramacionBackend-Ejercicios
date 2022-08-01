var query = `
      mutation ($id: Int!, $topic: String!) {
          updateCourseTopic(id: $id, topic: $topic) {
              ... courseData
          }
      }
      fragment courseData on Course {
          title
          author
          description
          topic
          url
          id
      }
  `;
var variables = {
  id: 2,
  topic: 'JavaScript',
};

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
    alert(`Ejemplo 6 = ${JSON.stringify(data)}`);
  })
  .catch(console.error);
