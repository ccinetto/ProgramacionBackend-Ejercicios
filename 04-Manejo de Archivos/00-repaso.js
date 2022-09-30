// const mostrarLetras = (palabra, delay, cb) => {
//     let i = 0;

//     const timerId = setInterval(() => {
//         console.log(new Date(), palabra[i]);
//         i++;
//         if(i >= palabra.length){
//             clearInterval(timerId)
//             cb()
//         }
//     }, delay)
// }

// const fin = () => console.log(new Date(), 'termine')

// mostrarLetras('independiente', 500, fin)



const imprimirCaracteres = (palabra, demora, cb) => {
    let i = 0;
    const timerId = setInterval(() => {
        console.log(palabra[i])
        i++;
        if(i >= palabra.length) {
            console.log('Terminamos de deletrear');
            clearInterval(timerId);
            cb();
        }
    }, demora)
}

const fin = () => console.log('terminé')

imprimirCaracteres('Juan Carlos', 500, fin);

imprimirCaracteres('Boke', 1000, fin);

