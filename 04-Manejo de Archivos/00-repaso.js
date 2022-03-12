const mostrarLetras = (palabra, delay, cb) => {
    let i = 0;

    const timerId = setInterval(() => {
        console.log(new Date(), palabra[i]);
        i++;
        if(i >= palabra.length){
            clearInterval(timerId)
            cb()
        }
    }, delay)
}

const fin = () => console.log(new Date(), 'termine')

mostrarLetras('independiente', 500, fin)