import { Recurso1APIMemoria } from './recurso1Memoria';
import { Recurso1APIArchivo } from './recurso1Archivo';


//Logica para devolver 1 u otr (DAO!!!!!)

class DaoRecurso1 {
	recurso;
	constructor (seleccion) {
		if(seleccion == 'memoria')
			this.recurso = Recurso1APIMemoria;
		
			if(seleccion == 'archivo')
			this.recurso = Recurso1APIArchivo;
	}


	getRecurso() {
		return this.recurso;
	}
}

const instancia = new DaoRecurso1('archivo');
export default instancia.getRecurso();
