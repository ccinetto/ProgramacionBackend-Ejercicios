import { Calculadora } from '../calculadora';

describe('conjunto de pruebas Suma', () => {
    it('deberia sumar bien dos numeros', () => {
        const num1 = 4;
        const num2 = 8;
        const resultadoEsperado = 12;

        expect(Calculadora.suma(num1,num2)).toBe(resultadoEsperado);
    })

    it('si sumo argumentos no numericos, debe responder con un error', () =>{
        const arg1 = 4;
        const arg2 = ['pepe'];

        const funcionPrueba = () => Calculadora.suma(arg1,arg2)

        expect(funcionPrueba).toThrow('Argumentos invalidos');
    })
})

describe('conjunto de pruebas Resta', () => {
    it('deberia restar bien dos numeros', () => {
        const num1 = 4;
        const num2 = 5;
        const resultadoEsperado = -1;

        expect(Calculadora.resta(num1,num2)).toBe(resultadoEsperado);
    })

    it('si resto argumentos no numericos, debe responder con un error', () =>{
        const arg1 = 4;
        const arg2 = ['pepe'];

        const funcionPrueba = () => Calculadora.resta(arg1,arg2)

        expect(funcionPrueba).toThrow('Argumentos invalidos');
    })
})

describe('Conjunto de pruebas chequear valores', () => {
    it('Deberia retornar false si los argumentos que le paso son numericos', () => {
        const arg1 = 4;
        const arg2 = 88.5;

        const resultado = Calculadora.chequearValores(arg1, arg2);

        expect(resultado).toBe(false);
    })

    it('Deberia retornar false si alguno de los argumentos que le paso no es numerico', () => {
        const arg1 = 4;
        const arg2 = 'pepe';

        const resultado = Calculadora.chequearValores(arg1, arg2);

        expect(resultado).toBe(true);
    })
})