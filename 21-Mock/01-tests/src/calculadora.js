class Cal {
    chequearValores(num1,num2) {
        const verificacion1 = isNaN(num1);
        const verificacion2 = isNaN(num2);

        if(verificacion1 || verificacion2) return true 
        else return false

        // return isNaN(num1) || isNaN(num2)
    }

    suma (num1, num2) {
        if(this.chequearValores(num1,num2))
            throw new Error('Argumentos invalidos')
        
        return num1+num2;
    }

    resta (num1, num2) {
        if(this.chequearValores(num1,num2))
            throw new Error('Argumentos invalidos')

        return num1-num2;
    }

    multiplicacion (num1, num2) {
        if(this.chequearValores(num1,num2))
            throw new Error('Argumentos invalidos')

        return num1*num2;
    }
}

export const Calculadora = new Cal();