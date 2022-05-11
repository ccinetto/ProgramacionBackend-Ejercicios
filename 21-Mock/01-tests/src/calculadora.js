class Cal {
    chequearValores(num1,num2) {
        return isNaN(num1) || isNaN(num2)
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
}

export const Calculadora = new Cal();