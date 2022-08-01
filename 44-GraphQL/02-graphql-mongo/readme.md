Ejemplos de Consultas

------------------------------------------------------------------------
{
	taskById(_id:"618c65983b1a9689e80b5fb2") {
    title,
    description
	  updatedAt
	  createdAt
	}
}
------------------------------------------------------------------------


{
	taskMany(limit:10) {
    title,
    description
	  updatedAt
	  createdAt
	}
}
 
------------------------------------------------------------------------

  mutation{
    taskCreateOne(
      record:{
      title:"hola",
      description:"h",
      duration:20,
    }
    ) {
      recordId
    }
  }
