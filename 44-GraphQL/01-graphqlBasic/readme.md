1. Ejecutar programa con npm run dev
2. dirigirse a http://localhost:8080/graphql

3. Queries: Para consultar informacion a GraphQL. Tenemos las siguientes categorias
   a. Queries sin parametros que devuelven un valor tipico (Ej getMessage que devuelve un String)
    Ej: 
        {
            getMessage
        }

   b. Queries sin parametros que devuelven un array de un valor generico (Ej. getArrayOfNumber que devuelve un array de numeros)
    Ej: 
        {
            getArrayOfNumber
        }
   c. Queries sin parametros que devuelven un valor customizado (Ej getAllCourses)
    Ej: 
        {
            getAllCourses {
                id,
                title,
                topic
            }
        }
   d. Queries con parametros que devuelven un valor customizado (Ej. getCourseById)
    Ej: 
        {
            getCourseById(id:1) {
                id,
                title,
                topic
            }
        }

4. Mutations: Ejecuciones grahQL cuya finalidad es la de modificar los datos actuales
    Ej:
        mutation{
            updateCourseTopic(id:1, topic:"Javascript"){
                id,
                title,
                topic
            }
        }